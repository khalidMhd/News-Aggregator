# Use Node.js version 16.16.0 image as a base
FROM node:16.16.0-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the project
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Command to run the React app
CMD ["npm", "start"]
