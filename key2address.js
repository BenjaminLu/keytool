let Web3 = require('web3')
let web3 = new Web3('http://localhost:8545')

let account = web3.eth.accounts.privateKeyToAccount("855572a12d3bfacc7f9bc7004a11c0dd7f5fc58d9c03e40e9c3021cc40df8ade")
console.log(account.address)
