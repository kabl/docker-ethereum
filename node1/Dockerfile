FROM ethereum/client-go

ENV HOST_DIR ./resources
ENV CONTAINER_DIR /root/ethereum

# ===== Exposed Port =====
EXPOSE 3000
EXPOSE 30303
EXPOSE 8545

# ===== Install NodeJs (used by eth-netstats and net-intelligence-api) =====
RUN apt-get update &&\
    apt-get install -y curl git-core &&\
    curl -sL https://deb.nodesource.com/setup_4.x | bash - &&\
    apt-get update &&\
    apt-get install -y nodejs

# ===== Install eth-netstats =====
RUN WS_SECRET=eth-net-stats-secret
RUN cd /root && git clone https://github.com/cubedro/eth-netstats
RUN cd /root/eth-netstats && npm install
RUN cd /root/eth-netstats && npm install -g grunt-cli
RUN cd /root/eth-netstats && grunt

# ===== Install net-intelligence-api ===== 
RUN cd /root &&\
    git clone https://github.com/cubedro/eth-net-intelligence-api &&\
    cd eth-net-intelligence-api &&\
    npm install &&\
    npm install -g pm2

COPY ${HOST_DIR}/app.json /root/eth-net-intelligence-api/app.json

# ===== Install and Setup Geth ===== 
# Geth will init the directory ${CONTAINER_DIR}
COPY ${HOST_DIR}/genesis.json /root/genesis.json
RUN /geth --datadir=${CONTAINER_DIR} init /root/genesis.json

# Now copy our keystore files and the nodekey. We have to do that after geth init. Oterhwise it would be overriden 
COPY  ${HOST_DIR}/keystore/* ${CONTAINER_DIR}/keystore/
COPY  ${HOST_DIR}/nodekey1 /root/nodekey1

COPY  ${HOST_DIR}/start.sh /root/start.sh
RUN chmod +x /root/start.sh

ENTRYPOINT /root/start.sh