n#  items Microservice

## Overview
RESTful API microservice for managing items. It provides CRUD operations for items data.

## Tech Stack
- Node.js with Express.js
- PostgreSQL
- Docker
- AWS (EKS, ECR, RDS, Secrets Manager)

## Key Features
- Secure database credential management using AWS Secrets Manager
- Containerized for easy deployment and scaling
- Designed for deployment on Amazon EKS

## Setup and Deployment
1. Clone the repository
2. Install dependencies: `npm install`
3. Set up AWS resources (RDS, Secrets Manager, EKS cluster)
4. Configure environment variables
5. Build Docker image: `docker build -t user-service .`
6. Push image to Amazon ECR
7. Deploy to EKS using provided Kubernetes manifest

## CI/CD Pipeline
- GitHub Actions for CI (testing, building Docker image)
- AWS CodePipeline for CD (deploying to EKS)

## Local Development
1. Set up local PostgreSQL database
2. Configure local environment variables
3. Run `npm run dev` to start the development server


