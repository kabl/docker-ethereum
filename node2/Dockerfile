FROM ethereum/client-go

ENV HOST_DIR ./resources
ENV CONTAINER_DIR /root/ethereum

# ===== Install and Setup Geth ===== 
# Geth will init the directory ${CONTAINER_DIR}
COPY ${HOST_DIR}/genesis.json /root/genesis.json
RUN /geth --datadir=${CONTAINER_DIR} init /root/genesis.json

COPY  ${HOST_DIR}/addPeer.js /root/addPeer.js

ENTRYPOINT /geth --datadir=/root/ethereum \
    --verbosity 6 \
    --identity "node2" \
    --rpc \
    --rpcaddr "0.0.0.0" \
    --rpcapi "admin,eth,net,personal,web3" \
    --networkid 999 \
    --nodiscover \
    --maxpeers 10 \
    js /root/addPeer.js