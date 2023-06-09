import React from 'react';
import "./Loader.css";
import { Bars } from 'react-loader-spinner';
import { PacmanLoader } from 'react-spinners';


const Loader = () => {
    return (
        <div className='spinner'>
            {/* <PacmanLoader
                color="rgba(30, 20, 50, 1)"
                loading
                size={10}
                speedMultiplier={1}
            /> */}


            <Bars
                height="140"
                width="700"
                color="#1e203e"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default Loader;