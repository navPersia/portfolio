#stage 1
FROM node as node
# FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
#stage 2
FROM nginx
COPY --from=node /app/dist/PersonalWeb /usr/share/nginx/html