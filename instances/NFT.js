const { abi } = require('../build/contracts/MyToken.json');
const address = '0xDFaef5379731d6167662c7315F36A8E4da003ADb';

const NFTContract = (web3) => {
    return new web3.eth.Contract(abi, address);
};

export default NFTContract;
