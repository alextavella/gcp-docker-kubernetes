## Setup
gcloud auth configure-docker
gcloud container clusters get-credentials [cluster-name] --zone [zone] --project [project-name]

## Docker 

### Local
docker build -t hello .

### Google Cloud
docker tag hello gcr.io/[project-name]/hello
docker push gcr.io/[project-name]/hello

## Kubernetes
kubectl get nodes

### Create Deploy
kubectl create namespace hello
kubectl run hello --image=gcr.io/[project-name]/hello --namespace=hello

### Deployments
kubectl get deployments --namespace=hello

### Pods
kubectl get pods --namespace=hello

## Expose Service
kubectl expose deployment hello --target-port=3000 --port=80 --type-LoadBalancer --namespace=hello

### Get External IP
kubectl get svc --namespace=hello

### Get Config Deployment 
kubectl get deployment hello --namespace hello -o yaml
kubectl edit deployment hello --namespace hello -o yaml