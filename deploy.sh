#!/bin/sh
set -xue

tag=$1

# Deploy the db to ecr
aws ecr get-login-password --region ap-northeast-1 | docker login --username AWS --password-stdin 101501319743.dkr.ecr.ap-northeast-1.amazonaws.com
docker build --platform linux/amd64 -t dena-training-2024-team-7-db -f ./docker/mongodb.prod.Dockerfile .
docker tag dena-training-2024-team-7-db:latest 101501319743.dkr.ecr.ap-northeast-1.amazonaws.com/dena-training-2024-team-7-db:latest
docker push 101501319743.dkr.ecr.ap-northeast-1.amazonaws.com/dena-training-2024-team-7-db:latest

# Deploy the backend to ecr
aws ecr get-login-password --region ap-northeast-1 | docker login --username AWS --password-stdin 101501319743.dkr.ecr.ap-northeast-1.amazonaws.com
docker build -t dena-training-2024-team-7-backend-prod -f ./docker/backend.prod.Dockerfile .
docker tag dena-training-2024-team-7-backend-prod:latest 101501319743.dkr.ecr.ap-northeast-1.amazonaws.com/dena-training-2024-team-7-backend-prod:latest
docker push 101501319743.dkr.ecr.ap-northeast-1.amazonaws.com/dena-training-2024-team-7-backend-prod:latest

# Update the backend service
aws ecs update-service --force-new-deployment --cluster dena-training-2024 --service dena-training-2024-team-7 --task-definition dena-training-2024-team-7:$tag