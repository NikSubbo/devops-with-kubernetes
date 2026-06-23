1.9. Create cluster: `k3d cluster create -p 8081:80@loadbalancer --agents 2`<br>
`kubectl apply -f log-output/manifests/ingress.yaml`<br>
`kubectl apply -f ping-pong/manifests/`<br>
Go to http://localhost:8081/pingpong
