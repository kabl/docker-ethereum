# Ethereum State Dashboard

## Docker


```
# Build the docker container
docker rm eth-netstates
docker build -t eth-netstates .

# Start the docker container
docker run -p 3000:3000 --name eth-netstates eth-netstates

# Exec a new bash in the running container "eth-netstates"
docker exec -it eth-netstates bash

# Open your browser
http://127.0.0.1:3000
```

