variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "ap-south-1"
}

variable "github_repository" {
  description = "GitHub repository in owner/repository format"
  type        = string
  default     = "Jai-This-Side/My-Portfolio-website"
}

variable "github_branch" {
  description = "GitHub branch allowed to assume the AWS role"
  type        = string
  default     = "main"
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t3.micro"
}

variable "key_name" {
  description = "Existing EC2 key pair name"
  type        = string
}
