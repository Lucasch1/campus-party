import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import WalletButton from './walletbutton';

const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!isOpen) {
                const currentScrollPos = window.scrollY;
                const scrollingUp = currentScrollPos < prevScrollPos;

                setVisible(scrollingUp || currentScrollPos < 10);
                setPrevScrollPos(currentScrollPos);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, isOpen]);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const [showDrop, setShowDrop] = useState({
        drop1: false,
        drop2: false,
        drop3: false,
        drop4: false,
    });

    const handleDropClick = (drop) => {
        // Verificar o estado atual da div clicada
        const isCurrentlyOpen = showDrop[drop];

        // Fechar todas as divs
        const updatedShowDrop = {
            drop1: false,
            drop2: false,
            drop3: false,
            drop4: false,
        };

        // Abrir a div clicada, se ela estiver fechada
        if (!isCurrentlyOpen) {
            updatedShowDrop[drop] = true;
        }

        // Atualizar o estado
        setShowDrop(updatedShowDrop);
    };

    return (
        <motion.nav>
            <div className="bg-[url(../../public/woodmenu.svg)] bg-contain bg-no-repeat bg-center">
                <div className="flex h-24">
                    <div className="w-full flex items-center justify-between">
                        <Link href="/">
                            {/*<Image src={logo} alt="logo" className="max-h-16 w-auto mr-2" />*/}
                        </Link>
                        <WalletButton />
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
