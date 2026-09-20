data "aws_vpc" "default" {
  default = true
}

data "aws_subnets" "default" {
  filter {
    name   = "vpc-id"
    values = [data.aws_vpc.default.id]
  }
}

data "aws_ami" "ubuntu" {
  most_recent = true

  owners = ["099720109477"]

  filter {
    name = "name"
    values = [
      "ubuntu/images/hvm-ssd-gp3/ubuntu-noble-24.04-amd64-server-*"
    ]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }

  filter {
    name   = "root-device-type"
    values = ["ebs"]
  }
}

resource "aws_security_group" "portfolio" {
  name        = "portfolio-sg"
  description = "Security group for portfolio EC2"
  vpc_id      = data.aws_vpc.default.id

  ingress {
    description = "HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name    = "portfolio-sg"
    Project = "jai-portfolio"
  }
}

resource "aws_instance" "portfolio" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = var.instance_type
  key_name      = var.key_name

  subnet_id = data.aws_subnets.default.ids[0]

  vpc_security_group_ids = [
    aws_security_group.portfolio.id
  ]

  user_data = <<-EOF
    #!/bin/bash

    apt-get update -y

    apt-get install -y nginx

    mkdir -p /var/www/portfolio

    chown -R ubuntu:ubuntu /var/www/portfolio

    cat > /etc/nginx/sites-available/portfolio <<'NGINX'
    server {
        listen 80;
        listen [::]:80;

        server_name _;

        root /var/www/portfolio;
        index index.html;

        location / {
            try_files $uri $uri/ /index.html;
        }
    }
    NGINX

    rm -f /etc/nginx/sites-enabled/default

    ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/portfolio

    nginx -t

    systemctl restart nginx
  EOF

  tags = {
    Name    = "jai-portfolio"
    Project = "jai-portfolio"
  }
}
