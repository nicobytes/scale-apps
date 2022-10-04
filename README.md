## 1. Clone

```sh
git clone git@github.com:nicobytes/scale-apps.git
docker-compose build
docker-compose up
docker-compose ps
```

## 2. Push

https://hub.docker.com/

```yml
version: '3.3'
services:
  flask:
    image: 'nicobytes/api-flask:latest' # 👈
    build:
      context: ./flask_app
      dockerfile: Dockerfile
    ports:
      - '8888:8888'
  express:
    image: 'nicobytes/api-express:latest' # 👈
    build:
      context: ./express_app
      dockerfile: Dockerfile
    ports:
      - '3000:3000'
```


```sh
docker-compose build
docker-compose images
docker-compose push
```

https://hub.docker.com/

## 3. Create nodes

https://www.digitalocean.com/
https://cloud.digitalocean.com/projects


## 4. Install Docker

https://docs.docker.com/engine/install/ubuntu/

```sh
ssh root@IP

apt-get update

apt-get upgrade -y

apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

mkdir -p /etc/apt/keyrings

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null


apt-get update

apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin

apt-cache madison docker-ce

apt-get install docker-ce=5:20.10.18~3-0~ubuntu-jammy docker-ce-cli=5:20.10.18~3-0~ubuntu-jammy containerd.io docker-compose-plugin

service docker start

docker run hello-world
```

## 5. Init Swarm

```sh
docker swarm init --advertise-addr
docker swarm join-token manager
docker swarm join-token worker
```

## 6. Create visualizer

```
docker service create \
--name=viz \
--publish=8080:8080/tcp \
--constraint=node.role==manager \
--mount=type=bind,src=/var/run/docker.sock,dst=/var/run/docker.sock \
dockersamples/visualizer

docker service ls
```

http://IP:8080/

## 7. Join nodes

```sh
docker swarm join-token worker
```

## 8. Build and Deploy

```sh
vim stack.yml
cat stack.yml
docker stack deploy -c stack.yml my-stack
docker service ls
```

## 9. Scale service

```
docker service scale my-stack_express=2
docker service scale my-stack_flask=2
```

## 10. Load balancer

## 11. Down

