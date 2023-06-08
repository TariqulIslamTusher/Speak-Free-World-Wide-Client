import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const MainLayouts = () => (
    <div>
        <Navbar></Navbar>
        <div className='min-h-[calc(100vh-150px)]'>
            <Outlet></Outlet>
        </div>
        <Footer />
    </div>
);

export default MainLayouts;