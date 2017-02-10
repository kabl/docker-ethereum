FROM ethereum/client-go

ENV HOST_DIR ./resources
ENV CONTAINER_DIR /root/ethereum

# Geth will init the directory ${CONTAINER_DIR}
COPY ${HOST_DIR}/genesis.json /root/genesis.json
RUN /geth --datadir=${CONTAINER_DIR} init /root/genesis.json

# Now copy our keystore files and the nodekey. We have to do that after geth init. Oterhwise it would be overriden 
COPY  ${HOST_DIR}/keystore/* ${CONTAINER_DIR}/keystore/
COPY  ${HOST_DIR}/nodekey ${CONTAINER_DIR}/nodekey


EXPOSE 30303
EXPOSE 8545

ENTRYPOINT /geth --datadir=${CONTAINER_DIR} \
    --verbosity 6 \
    --identity "node1" \
    --rpc \
    --rpcaddr "0.0.0.0" \
    --rpcapi "admin,eth,net,personal,web3" \
    --networkid 999 \
    --nodiscover \
    --maxpeers 10 \
    --mine \
    --etherbase 4C51098B8f7547476F85ED24deC890f835A841C5 \
    --minerthreads 1