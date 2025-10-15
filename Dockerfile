FROM node:24-slim AS base

WORKDIR /app

RUN apt-get update \
    && apt-get install -y jq \
    && apt-get clean


# Copy necessary files
COPY package.json package-lock.json ./

FROM base AS dev
RUN npm install
CMD ["pnpm" , "run" , "dev"]


FROM base AS build
RUN npm install
COPY . .
# Temporary disable type checking
RUN npm ci
RUN npm run build
FROM nginxinc/nginx-unprivileged:1.27-alpine AS prod

USER 0

RUN chmod 777 /usr/share/nginx/html
COPY --chown=101:101 --chmod=400 nginx.conf /etc/nginx/nginx.conf
COPY --chown=101:101 --from=build /app/dist /usr/share/nginx/html

