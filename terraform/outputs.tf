output "instance_public_ip" {
  description = "Public IP address of the portfolio EC2 instance"
  value       = aws_instance.portfolio.public_ip
}

output "instance_public_dns" {
  description = "Public DNS of the portfolio EC2 instance"
  value       = aws_instance.portfolio.public_dns
}

output "github_actions_role_arn" {
  description = "IAM role ARN used by GitHub Actions"
  value       = aws_iam_role.github_actions.arn
}

output "github_oidc_provider_arn" {
  description = "GitHub OIDC provider ARN"
  value       = aws_iam_openid_connect_provider.github.arn
}
