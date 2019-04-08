let Web3 = require('web3')
let web3 = new Web3('http://localhost:8545')

let argv = process.argv;

let account = web3.eth.accounts.privateKeyToAccount(argv[2])
console.log(account.address)
