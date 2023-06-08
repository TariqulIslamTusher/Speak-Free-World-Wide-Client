import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

const ParaluxExperience = () => {
    return (
        <div className='container mx-auto'>
            <p className='text-white text-center my-10 font-bold w-8/12 mx-auto md:text-3xl'>Train your long term memory with a method that’s faster and better than traditional rote learning.</p>

            <div className='md:flex gap-5'>

                <div className="card w-full bg-base-100 group hover:shadow-xl">
                    <figure className="p-10 bg-slate-200">
                        <img src="https://6968579.fs1.hubspotusercontent-na1.net/hubfs/6968579/Imported%20images/60dd4cd5525d358246ddf719_Vector%20(1).svg" className="rounded-xl h-16" />
                    </figure>
                    <div className="p-4">
                        <h2 className="text-xl font-bold leading-0 font-mono">Proven memory techniques rooted in science</h2>
                        <p className='group-hover:block hidden'>Learn more, faster, with a learning algorithm developed with the best cognitive science.</p>
                    </div>
                </div>
                

                <div className="card w-full bg-base-100 group hover:shadow-xl">
                    <figure className="p-10 bg-slate-200">
                        <img src="https://6968579.fs1.hubspotusercontent-na1.net/hubfs/6968579/Archive%20-%20Sept%202022/Iconography/Method_TwoTimes.svg" className="rounded-xl h-16" />
                    </figure>
                    <div className="p-4">
                        <h2 className="text-xl font-bold leading-0 font-mono">Twice as fast as learning in a regular classroom setting</h2>
                        <p className='group-hover:block hidden'>Train your long term memory with a method that’s faster and better than traditional rote learning.</p>
                    </div>
                </div>

                <div className="card w-full group bg-base-100 hover:shadow-xl">
                    <figure className="p-10 bg-slate-200">
                        <img src="https://6968579.fs1.hubspotusercontent-na1.net/hubfs/6968579/Archive%20-%20Sept%202022/Iconography/Method_Immerse.svg" className="rounded-xl h-16" />
                    </figure>
                    <div className="p-4">
                        <h2 className="text-xl font-bold leading-0 font-mono">Immersive learning. Learn like you live there.</h2>
                        <p className='group-hover:block hidden'>Cover everything from holiday essentials to longer-term goals</p>
                    </div>
                </div>

                <div className="card w-full bg-base-100 group hover:shadow-xl">
                    <figure className="p-10 bg-slate-200">
                        <img src="https://6968579.fs1.hubspotusercontent-na1.net/hubfs/6968579/Archive%20-%20Sept%202022/Iconography/Method_Goals.svg" className="rounded-xl h-16" />
                    </figure>
                    <div className="p-4">
                        <h2 className="text-xl  font-bold leading-0 font-mono">Cover everything from holiday essentials to longer-term goals</h2>
                        <p className='group-hover:block hidden'>Find the content topics to match what you need: from holiday small talk to meeting your partner’s family.</p>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default ParaluxExperience;