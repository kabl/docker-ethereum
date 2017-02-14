#!/bin/bash
# This bash script is tight bound to the Dockerfile

set -e

# startup link between netstate and geth
cd /root/eth-net-intelligence-api
pm2 start ./app.json

# startup netstate 
cd /root/eth-netstats
WS_SECRET=eth-net-stats-secret npm start