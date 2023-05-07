# base image
FROM node:12.18.4-alpine3.12

# set working directory
WORKDIR /app

# copy project files
COPY . .

# install dependencies
RUN npm install

# start the app
CMD ["npm", "start"]
