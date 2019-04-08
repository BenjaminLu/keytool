let Web3 = require('web3')
let web3 = new Web3('http://localhost:8545')

let account = web3.eth.accounts.create()
console.log(account.privateKey)