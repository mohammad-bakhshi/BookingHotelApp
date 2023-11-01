FROM node:alpine

# Create app directory
WORKDIR /usr/app

COPY package.json /usr/app/package.json
COPY pnpm-lock.yaml /usr/app/pnpm-lock.yaml
RUN pnpm install

COPY . /usr/app

EXPOSE 3000

RUN pnpm prisma generate
CMD [ "pnpm", "start" ]