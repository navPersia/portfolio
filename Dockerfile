#stage 1
FROM node as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/PersonalWeb /usr/share/nginx/html