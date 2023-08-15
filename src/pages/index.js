import React from 'react';
import { motion } from 'framer-motion';
import WalletButton from '@/components/walletbutton';
import { useAuth } from '@/contexts/addresscontext';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const LoginPage = () => {
    const router = useRouter();
    //const { address } = useAuth();

    const logeIN = () => {};

    useEffect(() => {
        const storedAddress = localStorage.getItem('userAddress');
        if (storedAddress) {
            console.log('user logged in');
            router.push('/home');
        }
    }, [router]);

    return (
        <div className="flex items-center justify-end h-screen bg-[url(../../public/bg.png)] bg-cover bg-fixed bg-center">
            <div className="fixed inset-0 "></div>

            <motion.div
                onClick={logeIN}
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-black/75 h-full flex flex-col items-center justify-center rounded-l-2xl p-8 shadow-xl z-10 w-1/3 text-white"
            >
                <h1 className="ribe text-5xl font-bold mb-10">MIDAS CHEST</h1>
                <WalletButton />
            </motion.div>
        </div>
    );
};

export default LoginPage;
