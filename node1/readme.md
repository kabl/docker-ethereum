# Node 1
This is the "main" node. Configured with mine on demand. 
You may run this container by itself.

## Docker

```bash
# Clean up (in case of development)
docker rm node1
docker rmi <image>

# Build the new docker image from the Dockerfile
docker build --pull --tag node1:20170831 .

# Start the docker container
# First time start will generate the DAG. This may use few minutes.
docker run -p 30303:30303 -p 8545:8545 --name node1 node1:20170831

# Exec a new shell in the running container "node1"
docker exec -it node1 sh

# Attach to the geth console (run the command inside the container)
geth attach ipc:/root/ethereum/geth.ipc
# Or if geth is installed on the host
geth attach http://:8545
```

## Play around
Inside the geth console

```bash
admin.nodeInfo
eth.blockNumber

web3.fromWei(eth.getBalance(eth.accounts[0]), "ether")
personal.unlockAccount(eth.accounts[0], "123456789", 100000)

// Send 1 Ether from account 0 to account 1. 
web3.fromWei(eth.getBalance(eth.accounts[1]), "ether")
eth.sendTransaction({from:eth.accounts[0], to:eth.accounts[1], value: web3.toWei(1, "ether")})
web3.fromWei(eth.getBalance(eth.accounts[1]), "ether")
```

## Wallets

Generated with: https://www.myetherwallet.com/

### Wallet1
```
Password:       123456789  
Private Key:    b73bd2b44b2784cdb6adc653d91469876b2ca6d9a912a9035621f60ee915ced7  
Address:        0x4C51098B8f7547476F85ED24deC890f835A841C5  
File:           UTC--2017-02-10T17-55-43.688Z--4c51098b8f7547476f85ed24dec890f835a841c5  
```
### Wallet2
```
Password:       123456789  
Private Key:    f74e5e51fc9bf5df3bae02f2156176552eabcf399b5f4c06cafbfa286195ba3b  
Address:        0xD70DfB9DA59425b1bC83CCE251D81c336Ff89F1A  
File:           UTC--2017-02-10T18-01-10.545Z--d70dfb9da59425b1bc83cce251d81c336ff89f1a  
```
### Wallet3
```
Password:       123456789  
Private Key:    38933d2b0094c84620bd4eeb63ba5af7d2caa3cea1bb8d3d0697d93fe3298faa  
Address:        0xFf482ac7eB8e34120e3Af2cda0dc4C3f6Ee7Cc09  
File:           UTC--2017-02-10T18-03-43.683Z--ff482ac7eb8e34120e3af2cda0dc4c3f6ee7cc09  
```
### Wallet4
```
Password:       123456789  
Private Key:    7b48333e83f711ddd3c5f6559d70fd1e4796566690f93a7968b7dc5ae2e5460e  
Address:        0xcbd6d7a6f2c1f809960ad5e45f382077affcd84d  
File:           UTC--2018-02-06T09-23-28.330Z--cbd6d7a6f2c1f809960ad5e45f382077affcd84d 
```
### Wallet5
```
Password:       123456789  
Private Key:    585de2f6c37fde2510958070ff00245da61800dcec519d493d01d3850ccf2326  
Address:        0x0e0c11b69a8076f742803fb93a6f99d92799c725  
File:           UTC--2018-02-06T09-26-00.001Z--0e0c11b69a8076f742803fb93a6f99d92799c725 
```

## Ethereum internal
The nodekey1 file:

```
# the nodekey1
5a75e9bd3a0503086d0ca54c51ffa8bd83f00cadc2da47f11bd0dd5a2eb77429
# matches the node id: 
a89fa52e70a017ba650dfb348d55baa8187746f2954c6ea2cd9196d75ee203208d8ae27010d75cee3421aa5f39112b8499499d3168bd686815c826b1e02083dd
```