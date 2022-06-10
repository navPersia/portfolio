#stage 1
FROM arm64v8/node:latest as node
# FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
#stage 2
# FROM arm64v8/nginx
# COPY --from=node /app/dist/PersonalWeb /usr/share/nginx/html