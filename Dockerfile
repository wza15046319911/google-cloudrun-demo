FROM node:22-slim

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build TypeScript code
RUN npm run build

# Set execution permissions
RUN chmod +x ./dist/index.js

# Set environment variables
ENV NODE_ENV=production

# Expose port
EXPOSE 8080

# Run the compiled JavaScript
CMD ["node", "dist/index.js"]