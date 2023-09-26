FROM node:18-bookworm AS base

RUN npm install -g pnpm

# Install gosu
RUN wget -O /usr/local/bin/gosu "https://github.com/tianon/gosu/releases/download/1.16/gosu-amd64" && \
    chmod +x /usr/local/bin/gosu

RUN mkdir /data && chown 1000:1000 /data

WORKDIR /data

#######################################
FROM base AS dev

CMD ["pnpm", "dev"]

#######################################
FROM base AS prod

COPY --from=project . /data

RUN gosu node pnpm install
RUN gosu node pnpm build

CMD ["pnpm", "start"]