#!/bin/bash
# This bash script is tight bound to the Dockerfile
set -e

# startup link between netstate and geth
cd /root/eth-net-intelligence-api
pm2 start ./app.json

# startup Geth
geth --datadir=/root/ethereum \
    --verbosity 6 \
    --identity "node2" \
    --rpc \
    --rpcaddr "0.0.0.0" \
    --rpcapi "admin,eth,net,personal,web3,debug" \
    --networkid 999 \
    --nodiscover \
    --maxpeers 10 \
    --rpccorsdomain "*" \
    js /root/addPeer.js