FROM node:8-alpine
WORKDIR /app

# copy code, install npm packages
COPY package*.json ./
RUN npm install
COPY . ./

# expose the port
EXPOSE 3000

# run app
CMD ["npm", "start"]