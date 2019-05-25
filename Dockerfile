#Dockerfile
	FROM node:12
	WORKDIR /application
	COPY package.json /application
	RUN npm install
	COPY . /application
	EXPOSE 2200
	CMD node server.js