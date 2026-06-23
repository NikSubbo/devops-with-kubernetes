Create cluster: `k3d cluster create -a 2`

1.2. Deploy with `kubectl create deployment todo-app-dep --image=niksubbo/todo-app`

1.4. Deploy with `kubectl apply -f manifests/deployment.yaml`

1.5. `kubectl port-forward <todo-app-pod-name> 3000:5000`

1.6. Create cluster: `k3d cluster create --port 8082:30080@agent:0 -p 8081:80@loadbalancer --agents 2`<br>
Add deployment: `kubectl apply -f manifests/deployment.yaml`<br>
Add service: `kubectl apply -f manifests/service.yaml`<br>
Go to: http://localhost:8082/
