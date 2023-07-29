import '../styles/globals.css';
import React from 'react';
import App from 'next/app';
import LoadingShape from '../components/loading';

import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        const startLoading = () => setLoading(true);
        const stopLoading = () => setLoading(false);

        router.events.on('routeChangeStart', startLoading);
        router.events.on('routeChangeComplete', stopLoading);
        router.events.on('routeChangeError', stopLoading);

        return () => {
            router.events.off('routeChangeStart', startLoading);
            router.events.off('routeChangeComplete', stopLoading);
            router.events.off('routeChangeError', stopLoading);
        };
    }, [router]);

    return (
        <>
            {loading && <LoadingShape color="orange" />}
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
