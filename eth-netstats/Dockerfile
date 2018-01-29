FROM node:9.4.0

ENV HOST_DIR ./resources
ENV CONTAINER_DIR /root/ethereum

# ===== Exposed Port =====
EXPOSE 3000

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


COPY  ${HOST_DIR}/start.sh /root/start.sh
RUN chmod +x /root/start.sh

ENTRYPOINT /root/start.sh