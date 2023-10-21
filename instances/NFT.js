const { abi } = require('../build/contracts/MyToken.json');
const { ADDRESS } = process.env


const NFTContract = (web3) => {
    return new web3.eth.Contract(abi, ADDRESS);
};

export default NFTContract;
