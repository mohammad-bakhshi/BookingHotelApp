FROM node:alpine

# Create app directory
WORKDIR /usr/app

COPY package.json /usr/app/package.json
COPY pnpm-lock.yaml /usr/app/pnpm-lock.yaml
COPY prisma ./prisma/
RUN npm install -g pnpm
RUN pnpm install

COPY . /usr/app

EXPOSE 3000

RUN pnpm prisma migrate dev

RUN pnpm prisma generate

CMD ["pnpm", "dev" ]


FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./
COPY pnpm-lock.yaml /usr/app/pnpm-lock.yaml

# Install application dependencies
RUN npm install -g pnpm
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Expose the port your Express.js app is listening on
EXPOSE 3000

# Start the application
CMD ["npm", "dev"]