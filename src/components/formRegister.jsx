import { useEffect, useState } from 'react';


const FormLogin = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const [menssage, setMessage] = useState();

    const objectUser = [
        {
            name: name,
            email: email,
            password: password
        }
    ]

    useEffect(() => {
        if (password == passwordRepeat){
            setMessage('Ok, as senhas conferem !')
            
        }else{
            setMessage('Opá, suas senhas não estão iguais...')
        }
    }, [password, passwordRepeat]);

    const mintRegister = async () => {
        console.log('Registrado')
        console.log('object_user: ', objectUser)    

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
                    <button href={null} onClick={mintRegister} className="bg-success bg-slate-500 hover:bg-slate-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]">
                            Cadastrar-se
                    </button>
                    <span>{menssage}</span>
                </div>
            </div>
        </>
    );
};
export default FormLogin;
