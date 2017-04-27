# Project info

## Docker-compose 
```
# Start the Node
docker-compose build
docker-compose up
```

## Usefull Geth commands
```
# Connect to the containers bash
docker exec -it node1 bash

# Geth
geth attach http://:8545

# all commands available. Such as miner.
/geth attach ipc:/root/ethereum/geth.ipc

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
- [ ] node2 does not connect to node1. bootnodes not working in node2. IP Address required. Hostname is not working
