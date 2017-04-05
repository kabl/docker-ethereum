FROM ethereum/client-go

ENV HOST_DIR ./resources
ENV CONTAINER_DIR /root/ethereum

# ===== Exposed Port =====
# EXPOSE 30303
# EXPOSE 8545

# ===== Install and Setup Geth ===== 
# Geth will init the directory ${CONTAINER_DIR}
COPY ${HOST_DIR}/genesis.json /root/genesis.json
COPY ${HOST_DIR}/mineOnDemand.js /root/mineOnDemand.js

RUN /geth --datadir=${CONTAINER_DIR} init /root/genesis.json

# Now copy our keystore files and the nodekey. We have to do that after geth init. Oterhwise it would be overriden 
COPY  ${HOST_DIR}/keystore/* ${CONTAINER_DIR}/keystore/
COPY  ${HOST_DIR}/nodekey1 /root/nodekey1

#COPY  ${HOST_DIR}/start.sh /root/start.sh
#RUN chmod +x /root/start.sh
ENTRYPOINT /geth --datadir=/root/ethereum \
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
    --minerthreads 0 \
    js /root/mineOnDemand.js
