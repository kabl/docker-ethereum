# Use a fixed version. Sometimes latest is not anymore compatible with the genesis.json. https://hub.docker.com/r/ethereum/client-go/tags/
FROM ethereum/client-go:v1.6.7

ENV HOST_DIR ./resources
ENV CONTAINER_DIR /root/ethereum

# ===== Install net-intelligence-api ===== 
RUN apk update
RUN apk add curl
RUN apk add git
RUN apk add bash bash-doc bash-completion
RUN apk add nodejs

RUN cd /root &&\
    git clone https://github.com/cubedro/eth-net-intelligence-api &&\
    cd eth-net-intelligence-api &&\
    npm install &&\
    npm install -g pm2

COPY ${HOST_DIR}/app.json /root/eth-net-intelligence-api/app.json
COPY ${HOST_DIR}/start.sh /root/start.sh


# ===== Install and Setup Geth ===== 
# Geth will init the directory ${CONTAINER_DIR}
COPY ${HOST_DIR}/genesis.json /root/genesis.json
RUN geth --datadir=${CONTAINER_DIR} init /root/genesis.json

COPY  ${HOST_DIR}/addPeer.js /root/addPeer.js

RUN chmod +x /root/start.sh
ENTRYPOINT /root/start.sh