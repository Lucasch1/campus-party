import web3 from '../../instances/web3'
export default function Home() {
    const connecWalletHandler = async () => {
        await window.ethereum.request({ method: 'eth_requestAccounts' })
        const accounts = await web3.eth.getAccounts()
        console.log(accounts)
    }
    return (
        <main>
            <h1 className="text-4xl font-bold text-center">Midas Chest</h1>
            <button onClick={connecWalletHandler}>Connect</button>
        </main>
    )
}
