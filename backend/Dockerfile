FROM node:alpine

# Create app directory
WORKDIR /usr/app

COPY package.json /usr/app/package.json
COPY pnpm-lock.yaml /usr/app/pnpm-lock.yaml
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm prisma generate

COPY . /usr/app

EXPOSE 3000

CMD [ "pnpm", "start" ]