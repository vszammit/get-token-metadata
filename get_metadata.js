// Import necessary modules
const { Alchemy, Network } = require("alchemy-sdk");
require('dotenv').config();

const config = {
  apiKey: process.env.API_KEY,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

const main = async () => {
  // The token address we want to query for metadata
  const tokenAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7"
  
  const metadata = await alchemy.core.getTokenMetadata(tokenAddress);

  console.log("TOKEN METADATA:");
  console.log(metadata);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();

