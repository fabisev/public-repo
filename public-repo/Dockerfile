FROM node:18-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy built application
COPY dist/ ./dist/

# Set environment variables
ENV NODE_ENV=production

# Expose port (if your app uses one)
EXPOSE 3000

# Start the application
CMD ["node", "dist/main.js"]