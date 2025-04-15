# Use Node.js as base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the files
COPY . .

# Expose the port
EXPOSE 3000

# Run the server (adjust according to your entry point)
CMD ["node","server.js"]

# # server/Dockerfile
# FROM node:18-alpine

# WORKDIR /app
# COPY . .
# RUN npm install

# EXPOSE 3000
# CMD ["node", "server.js"]
