FROM node:15.4 as build
WORKDIR /app
COPY /*.json ./
COPY . . 
RUN npm run build

FROM node:15.4
WORKDIR /app
COPY /*.json ./
RUN npm install --only=production
COPY --from=build /app/dist ./dist
CMD npm run start:prod