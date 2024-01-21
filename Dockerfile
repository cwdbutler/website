FROM node:lts AS build
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
# invalidate the cache to fetch the latest contentful data on rebuild
ARG CACHEBUST=1
RUN yarn build

FROM nginx:alpine AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080