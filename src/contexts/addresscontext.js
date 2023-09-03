import { createContext, useState, useContext, useEffect } from 'react';
import web3 from '../../backend/instances/web3';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [error, setError] = useState('');
    const [address, setAddress] = useState(''); // Defina o valor inicial apropriado aqui

    useEffect(() => {
        const getAddress = async () => {
            try {
                const accounts = await web3.eth.getAccounts();
                setAddress(accounts[0]);
            } catch (err) {
                setError(err.message);
            }
        };
        getAddress();
    }, [address]);

    return <AuthContext.Provider value={{ address, setAddress }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
