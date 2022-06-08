FROM node:16.3-alpine3.12
WORKDIR /app
COPY . .
RUN npm i
#ENV NODE_OPTIONS=--openssl-legacy-provider
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
RUN npm run build
EXPOSE 3000
ENTRYPOINT ["npm", "start"]
