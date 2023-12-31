require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");
require('@nomiclabs/hardhat-waffle');
require('@openzeppelin/hardhat-upgrades');
require('dotenv').config();

module.exports = {
  solidity: {
    compilers: [
      {
        version: '0.8.4',
        settings: {
          optimizer: {
            enabled: true,
            runs: 1,
          },
        },
      },
    ],
  },
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${process.env.GOERLI_API_KEY}`,
      accounts: [process.env.ETHERSCAN_PRIVATE_KEY],
      gasPrice: 100000000000
    },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.SEPOLIA_API_KEY}`,
      accounts: [process.env.ETHERSCAN_PRIVATE_KEY],
      gasPrice: 100000000000
    },
    mainnet: {
      url: `https://eth-mainnet.g.alchemy.com/v2/${process.env.MAINNET_API_KEY}`,
      accounts: [process.env.ETHERSCAN_PRIVATE_KEY],
      gasPrice: 100000000000
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
