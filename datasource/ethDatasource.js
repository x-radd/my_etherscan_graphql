// Importing the RESTDataSource class from the "apollo-datasource-rest" package
const { RESTDataSource } = require("apollo-datasource-rest");

// Vitalik's Ethereum Address
const eth_address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

// Class EtherDataSource extends the RESTDataSource class
class EtherDataSource extends RESTDataSource {
  constructor() {
    super();
    // Setting the base URL for the Etherscan API
    this.baseURL = "https://api.etherscan.io/api";
  }

  // Method to get the balance of Ether by address
  async etherBalanceByAddress() {
    return this.get(
      `?module=account&action=balance&address=${eth_address}&tag=latest&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Method to get the total supply of Ether
  async totalSupplyOfEther() {
    return this.get(
      `?module=stats&action=ethsupply&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Method to get the latest price of Ethereum
  async getLatestEthereumPrice() {
    return this.get(
      `?module=stats&action=ethprice&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Method to get the block confirmation time
  async getBlockConfirmationTime() {
    return this.get(
      `?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=${process.env.ETHERSCAN_API}`
    );
  }
}

// Exporting the EtherDataSource class
module.exports = EtherDataSource;
