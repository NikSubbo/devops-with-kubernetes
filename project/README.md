Create cluster: `k3d cluster create -a 2`

1.2. Deploy with `kubectl create deployment todo-app-dep --image=niksubbo/todo-app`

1.4. Deploy with `kubectl apply -f manifests/deployment.yaml`

1.5. `kubectl port-forward <todo-app-pod-name> 3000:5000`
