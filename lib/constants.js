'use strict';


module.exports = {
  BITCOIN_GENESIS_HASH: {
    livenet: 'ca83a9731c2b797de32bc0140535f6a5990410ef3dd05efb2f0fd579c3fc948b',
    regtest: 'ca83a9731c2b797de32bc0140535f6a5990410ef3dd05efb2f0fd579c3fc948b',
    testnet: 'ca83a9731c2b797de32bc0140535f6a5990410ef3dd05efb2f0fd579c3fc948b', //this is testnet3
    testnet5: 'ca83a9731c2b797de32bc0140535f6a5990410ef3dd05efb2f0fd579c3fc948b' //this is testnet5
  },
  DB_PREFIX: new Buffer('ffff', 'hex'),
  PROTOCOL_VERSION: 70015,
};

