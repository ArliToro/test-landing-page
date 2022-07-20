FROM node:16.13.2 AS build_stage

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
RUN npm cache clean --force
# install and cache app dependencies
COPY . ./

COPY package*.json ./
ADD package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json

RUN true

COPY **public/* /usr/src/app/public/
#COPY **src/* /usr/src/app/src/
#RUN npm install -g live-server


RUN npm install && npm run build -dev --max_old_space_size=4096 node_modules/@angular/cli/bin/ng build --dev


# Bundle app source
#COPY _adbuilder-ui/* /usr/src/

#Run Tests
CMD ["npm","run","test"]

# start app
CMD ["npm", "start"]

FROM nginx
COPY --from=build_stage /usr/src/app/build /usr/share/nginx/html