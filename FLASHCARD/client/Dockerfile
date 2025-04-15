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

# Build the React app
RUN npm run build

# Expose the port
EXPOSE 5173

# Run the app in development mode
CMD ["npm", "run", "dev"]

# # Use Node.js lightweight image
# FROM node:18-alpine

# # Set working directory in the container
# WORKDIR /app

# # Copy only the package.json and package-lock.json to leverage caching
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Now copy the rest of the application code
# COPY . .

# # For production, build the app
# RUN npm run build

# # Expose the port your frontend runs on (Vite = 5173, React = 3000)
# EXPOSE 5173

# # Command to start the dev server (use 'start' for production)
# CMD ["npm", "run", "dev"]
