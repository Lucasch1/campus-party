import Navbar from '@/components/navbar';
import Roulette from '@/components/roulette';
import AuthLogin from '@/components/authLogin';


const Dashboard = () => {
    return (
      <div className='backgroud-filter'>
        <div className='backgroud-bau'>
            <div className='container-bau'>
              {/*
              <Navbar/>
              <Roulette/>
              */}
              <AuthLogin/>
            </div>
        </div>
      </div>
    );
}
export default Dashboard;