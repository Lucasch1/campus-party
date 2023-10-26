const { abi } = require('../build/contracts/Users.json');
const contract = '0x8d2ADdd49E49890E2E3F50d61909d36ea714C8c8' // Contrato Publicado
const owner = '0xe782f9D792CC203cC238CbAD56231C239947b2ba' // Contrato Publicado


const users = (web3) => {
    return new web3.eth.Contract(abi, contract);
};

export default users;
