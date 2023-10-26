import { useState } from 'react';

const FormLogin = ({handleShow}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <>
        <div className='formLogin'>
        <div className="max-w-[500px] mx-auto">
                <div className="flex flex-col items-center mt-[10vh]">
                    <h1 className="mb-5 text-gray-900 font-mono font-bold text-xl">MidasChest</h1>
                    <button className="flex items-center mb-2 justify-center transition ease-in-out delay-50 px-3 py-2.5 space-x-2 bg-white border border-slate-600 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:ring-opacity-50">
                        <div className='G-google'></div>
                        <span className="text-gray-700 font-medium">Entrar com Google</span>
                    </button>
                    <span className="mb-2 text-gray-900">Ou</span>
                    <form>
                        <input
                            type="text"
                            className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
                            placeholder="E-mail"
                            value={email}
                            onChange={e => setEmail(e.target.value)}/>
                        <input
                            type="password"
                            className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
                            placeholder="Senha"
                            value={password}
                            onChange={e => setPassword(e.target.value)}/>
                        <button className="bg-primary bg-slate-500 hover:bg-slate-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]">
                            Acessar
                        </button>
                    </form>
                    <h6 className="mt-3 title-registreSe-custon" onClick={handleShow}>
                        Registre-se aqui!
                    </h6>
                </div>
            </div>
        </div>
        </>
    );
};
export default FormLogin;
