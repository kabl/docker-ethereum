# Project info

## Usefull Geth commands
```
# docker-compose
docker-compose build
docker-compose up

# Attaching Geth
geth attach http://:8545

# Show ether
web3.fromWei(eth.getBalance(eth.coinbase), "ether")
web3.fromWei(eth.getBalance(eth.accounts[1]), "ether")

# Node info
admin.nodeInfo
```