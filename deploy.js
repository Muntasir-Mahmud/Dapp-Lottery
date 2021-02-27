const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'wire dawn chest cactus perfect opera feature minute night remove erosion immense',
    'https://rinkeby.infura.io/v3/8875d9fa54664aefafd16aab32f922c6'
);
const web3 = new Web3(provider)

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('The account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode })
        .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deploys to ', result.options.address);
};
deploy();
