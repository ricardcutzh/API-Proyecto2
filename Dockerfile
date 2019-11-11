FROM node:8.16

#LOOPBACK 3
#docker run -it -p 80:3000 --rm --name p2-arqui2 api-p2:latest /bin/bash
#docker build -t api-p2 .
#RUN npm install -g loopback-cli

#LOOPBACK 4
RUN npm i -g @loopback/cli

COPY ./proyecto2 /home

EXPOSE 3000

WORKDIR /home

RUN npm install
