const projects = [
  {
    title: "Infrastructure as Code with Terraform",
    file: "terraform_ec2.tf",
    description:
      "Provisioned AWS EC2 infrastructure using Terraform with Apache installed through user data. Configured Security Groups and automated deployment using Infrastructure as Code principles.",
    tech: [
      "Terraform",
      "AWS",
      "EC2",
      "Apache",
      "Security Groups",
    ],
    github: "#",
  },
  {
    title: "Node.js Application on AWS EC2",
    file: "deploy_node_ec2.sh",
    description:
      "Deployed a Node.js application on Ubuntu EC2 with secure SSH access, IAM configuration, environment variables, and public deployment.",
    tech: [
      "Node.js",
      "AWS EC2",
      "Linux",
      "IAM",
      "SSH",
    ],
    github: "https://jaisinghbisht.medium.com/deploying-a-node-js-application-on-aws-ec2-99aee2bd98b1",
  },
];

export default projects;