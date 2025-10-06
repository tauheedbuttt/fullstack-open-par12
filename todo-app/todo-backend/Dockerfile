FROM node:20

WORKDIR /usr/src/app/todo-backend

COPY  ./todo-backend .

RUN npm ci --omit=dev
CMD npm start