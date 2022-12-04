FROM node:latest
WORKDIR /site-frontend
COPY . .
RUN npm run build
CMD ["npm", "start"]