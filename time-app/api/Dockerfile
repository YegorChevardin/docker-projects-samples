FROM node:alpine
WORKDIR /app
EXPOSE 8081
COPY ./package*.json ./
RUN npm install
COPY . ./
CMD ["npm", "run", "dev"]