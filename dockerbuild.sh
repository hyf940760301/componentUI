#!/bin/sh

Project="${CI_PROJECT_NAMESPACE}-${CI_PROJECT_NAME}"
ContainerName=${Project}-extract

docker build -t ${Project}:build -f ./dockerfile/Dockerfile.build .

mkdir -p release
docker rm -vf ${ContainerName}
docker create --name ${ContainerName} ${Project}:build
docker cp ${ContainerName}:/usr/src/app/release/integration ./release/integration
docker cp ${ContainerName}:/usr/src/app/release/staging ./release/staging
docker cp ${ContainerName}:/usr/src/app/release/production ./release/production
docker rm -vf ${ContainerName}

docker build -t ${IMAGE_TAG_INTEGRATION} -f ./dockerfile/Dockerfile-integration .
docker build -t ${IMAGE_TAG_STAGING} -f ./dockerfile/Dockerfile-staging .
docker build -t ${IMAGE_TAG_PRODUCTION} -f ./dockerfile/Dockerfile-production .
docker push ${IMAGE_TAG_INTEGRATION}
docker push ${IMAGE_TAG_STAGING}
docker push ${IMAGE_TAG_PRODUCTION}
