require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install indoor olympic seed curve rare remember social just kitten off gather'; 
let testAccounts = [
"0x735922a67095f07052567da09f651da1804bd8eed139ea7f54f35e580ded9847",
"0xdeb9ef64b369153d03ecbc75d5f57bd0ddaa2736db62ad9dd62779a5500d015e",
"0x52a8326d58712eb8ad2ff69ad069487618f2df51fb2c038649893668e3e6e7b2",
"0x6312b07445468d3e3ef9463085fbe738f56c5c09e0719b3c9100cad0a4309324",
"0xac6e5ba79468292f6b38f1c033aa84ac62700581751923fb707c51a302d47960",
"0xcd2f3c6ee22ce28b67a42250d8df2d6925e6707f11e8e3acc851cce3fe41d06f",
"0x132dc7033c9fb3fba68cda1c4f5b14fb2355aed0a012cb3f542ad69d31c7babc",
"0x9e2ec320e250c5e29330c29bcbbe438ea9a3bd7769ece9e6ffeb0caa2262848a",
"0x786d7bd9b2bcc29e9fa5dac821fc4ff1345554c9b53c881e0e4cf720a49a19a4",
"0x4673bac1826eabca73aea8429f166174ad29d7b9d546b9301f6f237e10f0d89b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

