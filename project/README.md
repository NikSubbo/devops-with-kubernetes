Create cluster: `k3d cluster create -a 2`

1.2. Deploy with `kubectl create deployment todo-app-dep --image=niksubbo/todo-app`

1.4. Deploy with `kubectl apply -f manifests/deployment.yaml`

1.5. `kubectl port-forward <todo-app-pod-name> 3000:5000`

1.6. Create cluster: `k3d cluster create --port 8082:30080@agent:0 -p 8081:80@loadbalancer --agents 2`<br>
Add deployment: `kubectl apply -f manifests/deployment.yaml`<br>
Add service: `kubectl apply -f manifests/service.yaml`<br>
Go to: http://localhost:8082/

1.8. `kubectl apply -f manifests` => http://localhost:8081/

1.12. `k3d cluster create -p 8081:80@loadbalancer --agents 2`<br>
Create the local directory on the node we’re binding to using: `docker exec k3d-k3s-default-agent-0 mkdir -p /tmp/kube`<br>
`kubectl apply -f manifests`<br>
Output: http://localhost:8081/<br>
Run `kubectl delete pod <pod_name>` to verify that image is cached in the persistent volume

1.13. Same as 1.12.

2.2. Same as 1.12.

2.4. `kubectl apply -f manifests/namespace.yaml`<br>
`kubectl apply -f manifests`
