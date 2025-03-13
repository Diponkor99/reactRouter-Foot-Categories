
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navber from '../Header/Navber/Navber';
import Home from '../Header/Home/Home';

const Web = () => {
    return (
        <div >
            <Navber ></Navber>
            <Home></Home>
            <Outlet></Outlet>
            <Footer className='mt-5'></Footer>
            
        </div>
    );
};

export default Web;