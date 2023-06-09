import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import { useContext } from 'react';
import { AuthContext } from '../Components/AuthProvider/Authprovider';
import Loader from '../Components/Loader/Loader';

const MainLayouts = () => {
    const { user } = useContext(AuthContext)


    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-150px)]'>
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    )
}

export default MainLayouts;