require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-verify");

const { privateKeys } = require("./secrets.json");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "sphinx",
  networks: {
    hardhat: {},
    sphinx: {
      url: "https://dapps.shardeum.org",
      chainId: 8081,
      accounts: [privateKeys],
    },
  },
  solidity: {
    //configure solidity version for compilation
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 20000,
  },
  etherscan: {
    apiKey: "6VTDZ6FHTTZ9VI4V8GVXEWUQVNHXGNXH87",
    customChains: [
      {
        network: "sphinx",
        chainId: 8081,
        urls: {
          apiURL: "https://explorer-dapps.shardeum.org/api",
          browserURL: "https://explorer-dapps.shardeum.org"
        }
      }
    ]
  
  }
};