require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena fog sugar noodle ribbon remain unusual hunt bread blue still'; 
let testAccounts = [
"0x17bd1a7dd15690ea71eadd0ee11f3b2c683b56996d67c1e9c1170f742ceb33a8",
"0xfa9954070c6d539cf2cd1aa1d1a69c000a50f095e58f9cf74df5ad5dc4918d9d",
"0xbacbee9b504a8b5966eaf379cee7ebbc1adddec36e08604730f8341d6107059e",
"0xd4d9f9c61bf4848a26fd1f07a4859687ee496134c13652ba97ec53ab1f0109f5",
"0x9616262cdcbff3847008d250f0b9fb0cc0a090c3385f958a27709cd56984dd10",
"0xdc280a5fbf8e245baccb1d983581ef05dae082c1822191cbe849600f796733d1",
"0xfbcf5fc769b315faae5c1c6f86152d14d8c971885132cb6e5d97881030fa6f14",
"0x46e4a55e442adfecc29f66128b803d2f6363c59e46828d6e8fb338beb2f38e85",
"0x503ed41ed51a52ce6a826e0081348b7fb5adf45bd6d6a5874f44d967f8ba4715",
"0x2e9e376a81825a3a24e6c403aa724a58eab0dd6c1ad1ef0642d022d8857f39b0"
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

