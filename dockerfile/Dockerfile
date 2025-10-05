FROM node:20

WORKDIR /usr/src/app/docker-playground

COPY --chown=node:node . .
ENV DEBUG=playground:*
RUN npm ci --omit=dev
CMD npm start