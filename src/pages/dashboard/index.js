import Navbar from '@/components/navbar';
import Roulette from '@/components/roulette';
import AuthLogin from '@/components/authLogin';
import {useState} from 'react';


const Dashboard = () => {


  const [loginMidas, setLoginMidas] = useState(false);


    return (
      <>
      <div className='backgroud-filter'>
        <div className='backgroud-bau'>
            <div className='container-bau'>
            {loginMidas ? (
              <>
                <Navbar />
                <Roulette />
              </>
            ) : (
              <AuthLogin setLoginMidas={setLoginMidas} />
            )}
            </div>
        </div>
      </div>
      </>
    );
}
export default Dashboard;