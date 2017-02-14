#!/bin/bash
# This bash script is tight bound to the Dockerfile

set -e

# First startup netstate 
cd /root/eth-netstats
WS_SECRET=eth-net-stats-secret npm start &

# Second startup link between netstate and geth
cd /root/eth-net-intelligence-api
/usr/bin/pm2 start ./app.json

# Third starting geth 
cd /
/geth --datadir=/root/ethereum \
    --verbosity 6 \
    --identity "node1" \
    --nodekey /root/nodekey1 \
    --rpc \
    --rpcaddr "0.0.0.0" \
    --rpcapi "admin,eth,net,personal,web3" \
    --networkid 999 \
    --nodiscover \
    --maxpeers 10 \
    --mine \
    --etherbase 4C51098B8f7547476F85ED24deC890f835A841C5 \
    --minerthreads 1