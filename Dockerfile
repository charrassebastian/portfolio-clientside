FROM node:lts as build
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build:ssr
CMD ["node", "dist/portfolio-frontend/server/main.js"]
EXPOSE 80
