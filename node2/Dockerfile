FROM ethereum/client-go

ENV HOST_DIR ./resources
ENV CONTAINER_DIR /root/ethereum

# ===== Install and Setup Geth ===== 
# Geth will init the directory ${CONTAINER_DIR}
COPY ${HOST_DIR}/genesis.json /root/genesis.json
RUN /geth --datadir=${CONTAINER_DIR} init /root/genesis.json


ENTRYPOINT /geth --datadir=/root/ethereum \
    --verbosity 6 \
    --identity "node2" \
    --rpc \
    --rpcaddr "0.0.0.0" \
    --rpcapi "admin,eth,net,personal,web3" \
    --networkid 999 \
    --nodiscover \
    --maxpeers 10 \
    --bootnodes="enode://a89fa52e70a017ba650dfb348d55baa8187746f2954c6ea2cd9196d75ee203208d8ae27010d75cee3421aa5f39112b8499499d3168bd686815c826b1e02083dd@node1:30303"