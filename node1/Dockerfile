# Use a fixed version. Sometimes latest is not anymore compatible with the genesis.json. https://hub.docker.com/r/ethereum/client-go/tags/
FROM ethereum/client-go:v1.6.7

ENV HOST_DIR ./resources
ENV CONTAINER_DIR /root/ethereum

# ===== Init Geth and configure the private chain ===== 
COPY ${HOST_DIR}/genesis.json /root/genesis.json
COPY ${HOST_DIR}/mineOnDemand.js /root/mineOnDemand.js

RUN geth --datadir=${CONTAINER_DIR} --etherbase 4C51098B8f7547476F85ED24deC890f835A841C5 init /root/genesis.json

COPY  ${HOST_DIR}/keystore/* ${CONTAINER_DIR}/keystore/
COPY  ${HOST_DIR}/nodekey1 /root/nodekey1

# ===== Start Geth ===== 
ENTRYPOINT geth --datadir=/root/ethereum \
    --verbosity 6 \
    --identity "node1" \
    --nodekey /root/nodekey1 \
    --rpc \
    --rpcaddr "0.0.0.0" \
    --rpcapi "admin,eth,net,personal,web3,debug" \
    --networkid 999 \
    --nodiscover \
    --maxpeers 10 \
    --mine \
    --rpccorsdomain "*" \
    --etherbase 4C51098B8f7547476F85ED24deC890f835A841C5 \
    js /root/mineOnDemand.js
    #--minerthreads 1 