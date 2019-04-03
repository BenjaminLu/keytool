let Web3 = require('web3')
let web3 = new Web3('http://localhost:8545')

web3.eth.getCoinbase().then(console.log)
