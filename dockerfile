# Use official Node.js runtime as base image
FROM node:22-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source code
COPY . .

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Change ownership of the app directory
RUN chown -R nextjs:nodejs /app
USER nextjs

# Expose the port
EXPOSE 5003

# Start the application (generate Prisma client at runtime)
CMD ["sh", "-c", "npx prisma generate && npx prisma db push && node ./src/Server.js"]