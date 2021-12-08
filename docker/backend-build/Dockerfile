# This dockerfile expects its build context to be that of ./
# `docker build -t backend:latest -f ./docker/backend-build/Dockerfile .`

# Source image
FROM node:14

# Run container process under the root context
USER root

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
#
# separate step to aid caching
COPY package*.json ./
RUN npm install

# copy src code and build
# TODO other build targets?
COPY . ./
RUN npm run-script build:production

# second-stage, less dependencies needed after build
FROM node:14-alpine
WORKDIR /
COPY --from=0 /usr/src/app/ /usr/src/app/
WORKDIR /usr/src/app/
RUN npm install --only=prod

# Ensure tcp/8080 is exposed and exec
EXPOSE 8080
CMD [ "npm", "run-script", "start" ]
