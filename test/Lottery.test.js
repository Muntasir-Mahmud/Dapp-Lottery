const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new web3(ganache.provider());

const { interface, bytecode } = require('../compile.js');

let lottery;
let accounts;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    lottery = await new web3.eth.contract(JSON.parse(interface))
        .deploy({ data: bytecode })
        .send({ from: accounts[0], gas: '1000000' })
})
