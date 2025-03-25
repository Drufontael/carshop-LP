FROM node:22 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
ARG REACT_APP_SERVICE_ID
ARG REACT_APP_TEMPLATE_ID
ARG REACT_APP_PUBLIC_KEY
ENV REACT_APP_SERVICE_ID=$REACT_APP_SERVICE_ID
ENV REACT_APP_TEMPLATE_ID=$REACT_APP_TEMPLATE_ID
ENV REACT_APP_PUBLIC_KEY=$REACT_APP_PUBLIC_KEY
RUN npm run build
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]