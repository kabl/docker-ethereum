web3.personal.unlockAccount(eth.accounts[0], "123456789", 100000000)
web3.personal.unlockAccount(eth.accounts[1], "123456789", 100000000)
web3.personal.unlockAccount(eth.accounts[2], "123456789", 100000000)
web3.personal.unlockAccount(eth.accounts[3], "123456789", 100000000)
web3.personal.unlockAccount(eth.accounts[4], "123456789", 100000000)

miner.start(2);
admin.sleepBlocks(10);
miner.stop();

web3.eth.filter("pending").watch(function() {
   if (eth.mining) return;
   console.log("-- Transactions detected, so starting mining.");
   miner.start(1);
});

web3.eth.filter('latest', function(error, result) {
   if (txpool.status.pending || !eth.mining) return;
   console.log("-- No pending transactions, so stopping mining.");
   miner.stop();
});

if (txpool.status.pending) {
	console.log("-- Pending transactions on startup, so starting mining.");
	miner.start(1);
}

console.log("-- Started on-demand mining. Watching txpool for pending Txs..");

