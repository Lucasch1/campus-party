const { abi } = require('../build/contracts/NFT.json');
const address = "";

const NFTContract = (web3) => {
    new web3.eth.Contract(abi, address);
}

export default NFTContract;