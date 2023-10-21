const { abi } = require('../build/contracts/Users.json');
const contract = '0x94264efbb8b1799ef4db85ef418077c012aab701' // Contrato Publicado


const users = (web3) => {
    return new web3.eth.Contract(abi, contract);
};

export default users;
