const { abi } = require('../build/contracts/MyToken.json');
const address = '0x1d2E633013f38e67521Bd125A05FDC22f4394723';

const NFTContract = (web3) => {
    return new web3.eth.Contract(abi, address);
};

export default NFTContract;
