//It's a hack. Only this way it was possible to add the peer. 
//Actually it's node1 to connect. But addPeer only works with IP Addresses
//admin.addPeer("enode://a89fa52e70a017ba650dfb348d55baa8187746f2954c6ea2cd9196d75ee203208d8ae27010d75cee3421aa5f39112b8499499d3168bd686815c826b1e02083dd@172.18.0.2:30303");

web3.eth.filter("pending").watch(function() {
   console.log("-- Transactions detected");
});

function addPeer() {
    console.log("-- Add peer");
    admin.addPeer("enode://a89fa52e70a017ba650dfb348d55baa8187746f2954c6ea2cd9196d75ee203208d8ae27010d75cee3421aa5f39112b8499499d3168bd686815c826b1e02083dd@172.100.0.2:30303");
}

addPeer();
setInterval(addPeer, 60000);