# Etapa 1: renderizar las vistas PHP a un index.html estático
FROM php:8.3-cli-alpine AS render

WORKDIR /app
COPY views ./views
COPY build-static.php ./
RUN php build-static.php /app/index.html

# Etapa 2: servir solo archivos estáticos con nginx (sin PHP ni base de datos)
FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY public/build /usr/share/nginx/html/build
COPY --from=render /app/index.html /usr/share/nginx/html/index.html

EXPOSE 80
