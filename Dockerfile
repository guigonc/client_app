FROM node:latest
RUN mkdir -p /opt/client_app
RUN mkdir -p /opt/node_modules
WORKDIR /opt/client_app
COPY package.json /opt/client_app/
RUN npm install --silent
COPY .babelrc karma.conf.js webpack.config.js webpack.production.config.js /opt/client_app/
COPY ./lib /opt/client_app/lib
COPY ./app /opt/client_app/app
COPY ./specs /opt/client_app/specs
COPY ./build /opt/client_app/build
