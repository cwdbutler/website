FROM node:lts AS build
LABEL org.opencontainers.image.source https://github.com/cwdbutler/website
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .

# set environment variables for contentful at build time
ARG CONTENTFUL_SPACE_ID
ENV CONTENTFUL_SPACE_ID=$CONTENTFUL_SPACE_ID
ARG CONTENTFUL_DELIVERY_TOKEN
ENV CONTENTFUL_DELIVERY_TOKEN=$CONTENTFUL_DELIVERY_TOKEN
ARG CONTENTFUL_MANAGEMENT_TOKEN
ENV CONTENTFUL_MANAGEMENT_TOKEN=$CONTENTFUL_MANAGEMENT_TOKEN

ARG CACHEBUST=1

RUN yarn build

FROM nginx:alpine AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

ARG CACHEBUST=1

COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080