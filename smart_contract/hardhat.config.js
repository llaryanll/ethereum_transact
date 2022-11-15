// https://eth-goerli.g.alchemy.com/v2/H2TNxx0s2IUGUa-n3X0qIYa904Ghatbu
require("@nomiclabs/hardhat-waffle");

module.exports ={
  solidity : '0.8.0',
  networks :{
    goerli :{
      url: 'https://eth-goerli.g.alchemy.com/v2/H2TNxx0s2IUGUa-n3X0qIYa904Ghatbu',
      accounts:['fae3004349a4e2e25be1cf7b2a470f14bfd76cec84917c9d4341096ae4e9cd8b']
    }
  }
}