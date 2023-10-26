import { useEffect, useState, useMemo } from 'react';
import web3 from '../../instances/web3';
import {regiterBlockchain} from '../../src/pages/services/web3_services'
import {getUserBlockchain} from '../../src/pages/services/web3_services'


const FormRegister = ({ setLoading }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [passwordHash, setPasswordHash] = useState('');
    const [account, setAccount] = useState('');

    const [menssage, setMessage] = useState();
    const [btnDisable, setBtnDisable] = useState();
    const [formValid, setFormValid] = useState(false);

    const objectUser = useMemo(() => [{
        name: name,
        email: email,
        password: passwordHash,
        account: account
    }], [name, email, passwordHash, account]);


    //Validação formulário RegisterUser
    useEffect(() => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let message = '';
        let formIsValid = true;
    
        if (!name || name.trim().length === 0) {
            message = 'Parece que seu Nome não foi preenchido..';
            formIsValid = false;
        } else if (!email || !emailRegex.test(email)) {
            message = 'Por favor, insira um e-mail válido.';
            formIsValid = false;
        } else if (!password || password.trim().length === 0) {
            message = 'Por favor, insira uma senha.';
            formIsValid = false;
        } else if (!passwordRepeat || passwordRepeat.trim().length === 0) {
            message = 'Por favor, repita a senha.';
            formIsValid = false;
        } else if (password !== passwordRepeat) {
            message = 'Opá, suas senhas não estão iguais...';
            formIsValid = false;
        } else {
            setMessage('Ok, as senhas conferem !')
            const hash = web3.utils.keccak256(password)
            setPasswordHash(hash)
        }

        // Verificação da carteira
        if (formValid) {
            window.ethereum.request({method: 'eth_requestAccounts'}).then(accounts => {
                const account = accounts[0];
                if (account) {
                    setAccount(account);
                } else {
                    message = 'Por favor, conecte sua carteira.';
                    formIsValid = false;
                }
            }).catch(err => {
                console.error(err);
                message = 'Ocorreu um erro ao tentar conectar à carteira.';
                formIsValid = false;
            });
        }
        
        setMessage(message);
        setBtnDisable(!formIsValid);
        setFormValid(formIsValid)

    }, [name, email, password, passwordRepeat, formValid]);
        


    ////Revisão do formulario e registro
    async function registerUser (){
        console.log('objectUser', objectUser)
        
        const result = await getUserBlockchain(email);
        if(result === "User exists"){
            setMessage("E-mail Já cadastrado, defina outro...")
        
        } else {
            setLoading(true);
            const resultTransaction = await regiterBlockchain(objectUser)
            console.log("Cadastro Realizado no MidasChest: ", resultTransaction)
        }
    }


    return (
        <>
            <div className="max-w-[380px] mx-auto">
                <div className="flex flex-col items-center mt-[1vh]">
                <h2 className="text-gray-900 font-mono font-bold text-xl">Registre-se e ganhe um NFT</h2>
                <h3 className=" text-gray-900 font-mono font-bold">MidasChest</h3>
                    <button className="flex items-center mb-2 justify-center transition ease-in-out delay-50 px-3 py-2.5 space-x-2 bg-white border border-slate-600 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:ring-opacity-50">
                    <div className='G-google'></div>
                        <span className="text-gray-700 font-medium">Cadastre-se com Google</span>
                    </button>
                    <span className="mb-2 text-gray-900">Ou</span>
                    <form>
                    <input
                            type="text"
                            className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
                            placeholder="Como prefere ser Chamado ?"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
                            placeholder="Qual seu E-mail preferido ?"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
                            placeholder="Escreva sua Senha..."
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <input
                            type="password"
                            className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
                            placeholder="Escreva sua Senha novamente..."
                            value={passwordRepeat}
                            onChange={e => setPasswordRepeat(e.target.value)}
                        />
                    </form>
                    <button 
                        disabled={btnDisable} 
                        href={null} 
                        onClick={registerUser} 
                        className={`text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px] ${btnDisable ? 'bg-red-500' : 'bg-success bg-slate-500 hover:bg-slate-700'}`}>
                            Cadastrar-se
                    </button>
                    <span>{menssage}</span>
                </div>
            </div>
        </>
    );
};
export default FormRegister;
