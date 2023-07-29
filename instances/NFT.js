const { abi } = require('../build/contracts/NFT.json');
const address = "0x29062924bD208fD7a6f1B96bF5f41d78a74C7225";

const NFTContract = (web3) => {
    return new web3.eth.Contract(abi, address);
}

export default NFTContract;