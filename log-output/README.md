Create cluster: `k3d cluster create -a 2`

1.1. Deploy with `kubectl create deployment log-output-dep --image=niksubbo/log-output`

1.3. Deploy with `kubectl apply -f manifests/deployment.yaml`

1.7. Create cluster: `k3d cluster create -p 8081:80@loadbalancer --agents 2`<br>
Add deployment, service and ingress: `kubectl apply -f manifests`<br>
Get services and ingresses (optional): `kubectl get svc,ing`<br>
Go to: http://localhost:8081/

1.10. `k3d cluster create -p 8081:80@loadbalancer --agents 2`<br>
`kubectl apply -f manifests`<br>
http://localhost:8081/

1.11. `k3d cluster create -p 8081:80@loadbalancer --agents 2`<br>
Create the local directory on the node we’re binding to using: `docker exec k3d-k3s-default-agent-0 mkdir -p /tmp/kube`<br>
`kubectl apply -f manifests`<br>
`kubectl apply -f manifests/pingpong`<br>
Output: http://localhost:8081/<br>
Increment pingpong count: http://localhost:8081/pingpong

2.1. Same as 1.11.

2.3. `kubectl apply -f manifests/namespace.yaml`<br>
`kubectl apply -f manifests`<br>
`kubectl apply -f manifests/pingpong`<br>