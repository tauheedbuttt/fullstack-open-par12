FROM node:20 AS testing-stage

WORKDIR /usr/src/app/todo-frontend

COPY ./todo-frontend .

RUN npm ci

RUN npm test

FROM node:20 AS build-stage

WORKDIR /usr/src/app/todo-frontend

COPY --from=testing-stage /usr/src/app/todo-frontend /usr/src/app/todo-frontend

RUN npm run build

FROM nginx:1.25-alpine
COPY --from=build-stage /usr/src/app/todo-frontend/dist /usr/share/nginx/html