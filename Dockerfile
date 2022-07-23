FROM node:lts-buster-slim

WORKDIR /app

CMD ["yarn", "run", "dev"]