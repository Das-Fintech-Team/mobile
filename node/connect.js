'use strict'

const https = require('https')
const Web3 = require('web3')



const token = process.env.TOKEN 

console.log("Using token: " + token);

const nodeUrl = "https://api.dft.one:8545?project=1"
//const nodeUrl = "https://eth.dft.one"
//nodeUrl = 'https://ropsten.infura.io/v3/83f9baf669d145d4844a13c58897bfec'


// Create a Web3 HTTP provider with JWT set
const web3 =  new Web3(new Web3.providers.HttpProvider(nodeUrl, {
 headers: [{
   name: 'Authorization',
   value: `Bearer ${token}`
 }]
}))


// Get Block Number
web3.eth.getBlockNumber().then(data => {
    console.log("getBlockNumber: " + data);
});

// Get Gas Price
web3.eth.getGasPrice().then(data => {
   var price = web3.utils.fromWei(data, 'gwei')
    console.log("getGasPrice (gwei): " + price);
});

// Get Account Balance
const account = "0xf59d6e2afd1cca57b17b53a80f0f9483cb3b3669"

web3.eth.getBalance(account, (err, wei) => {
  var balance = web3.utils.fromWei(wei, 'ether')
  console.log(balance)
})




