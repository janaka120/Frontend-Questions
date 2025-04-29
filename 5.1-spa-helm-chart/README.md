# Steps to Integrate Helm in Vite + React Project

1. Create Helm Chart:

```
mkdir -p helm/spa-helm-chart
helm create helm/spa-helm-chart
```

2. Build your Vite app:

```
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

```

3. Push Docker image to your registry

```
docker build -t myregistry.com/my-spa:latest .
docker push myregistry.com/my-spa:latest
```

4. Deploy using Helm:

Navigate to the chart directory and install:

`helm install my-spa ./helm/spa-helm-chart --values ./helm/spa-helm-chart/values.yaml`
