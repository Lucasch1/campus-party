const { abi } = require('../build/contracts/NFT.json');
const address = '0xA6Cd9F00ba3d70C54753748F163d9D6108e36237';

const NFTContract = (web3) => {
    return new web3.eth.Contract(abi, address);
};

export default NFTContract;
