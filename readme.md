# Project info

## Docker-compose 
```bash
# Start the Node
docker-compose build
docker-compose up

# Start stop without rebuilding
docker-compose stop
docker-compose start
```

## Usefull Geth commands
```bash
# Connect to the containers shell
docker exec -it node1 sh

# Geth
geth attach http://:8545

# all commands available. Such as miner.
geth attach ipc:/root/ethereum/geth.ipc

admin.addPeer("enode://a89fa52e70a017ba650dfb348d55baa8187746f2954c6ea2cd9196d75ee203208d8ae27010d75cee3421aa5f39112b8499499d3168bd686815c826b1e02083dd@172.18.0.2:30303");


## Show ether
web3.fromWei(eth.getBalance(eth.coinbase), "ether")
web3.fromWei(eth.getBalance(eth.accounts[1]), "ether")

## Node info
admin.nodeInfo

# Ethereum network state
http://localhost:3000/
```

## Issues
If the node2 shouldn't connect the configured IP address in the "/node2/addPeer.js". The IP address of Node can be determined with:
 ```bash
# Ccheck if the peer node1 is connected
docker exec -it node2 sh
geth attach ipc:/root/ethereum/geth.ipc
admin.peers # if this command returns an empty list then node2 is not connected to node1. I
exit. 
```

```bash
# Determine the IP of node1
docker exec -it node2 sh
getent hosts node1 | awk '{ print $1 }'
```