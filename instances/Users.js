const { abi } = require('../build/contracts/Users.json');
const contract = '0xE1bC327c933ef3a0085aE314DD549bD2feb16111' // Contrato Publicado
const owner = '0xe782f9D792CC203cC238CbAD56231C239947b2ba' // Contrato Publicado


const users = (web3) => {
    return new web3.eth.Contract(abi, contract);
};

export default users;
