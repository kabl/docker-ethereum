FROM ethereum/client-go

ENV datadir /root/ethereum

COPY ./resources/* /root/

RUN /geth --datadir=${datadir} init /root/genesis.json

EXPOSE 30303
EXPOSE 8545

ENTRYPOINT /geth --datadir=${datadir} \
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