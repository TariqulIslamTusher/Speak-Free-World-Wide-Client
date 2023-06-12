import React, { useState } from 'react';
import Rating from 'react-rating';
import { FaExpandArrowsAlt, FaRegStar, FaStar } from 'react-icons/fa';
import useAxiosSecure from '../../../CustomHook/AxiosHook/useAxiosSecure';
import Loader from '../../../Components/Loader/Loader';
import Swal from 'sweetalert2';

const MySelectedClassCard = ({ Sdata, refetch }) => {
    const [openModal, setOpenModal] = useState(false)


    const [AxiosSecure] = useAxiosSecure()
    const [btnLoad, setBtnLoad] = useState(false)
    if (!Sdata) {
        return <Loader></Loader>
    }


    const { _id, classImage, className, instructorName, availableSeat, attendedStudent, feedBack, classStatus, price, classRatings } = Sdata


    // Pay your Class 
    const handlePayNow = () => {
        // setBtnLoad(true)
        setOpenModal(true)


        // Swal.fire({
        //     title: 'Are you sure to Pay?',
        //     text: "You will charge as the price mentioned",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#059305',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Pay Now'
        // }).then((result) => {
        //     if (result.isConfirmed) {
        //         setBtnLoad(false)
        //         Swal.fire(
        //             'Payment Success!',
        //             'Your file has been deleted.',
        //             'success'
        //         )
        //     } else {
        //         setBtnLoad(false)
        //     }
        // })
    }





    return (
        <>
            <div className='card group card-compact w-full border shadow-xl bg-gradient-to-br from-yellow-200 to-white  border-green-500'>
                <figure><img className='h-60 w-full object-cover object-center group-hover:scale-110 transition-all duration-150 ' src={classImage} alt="classImage" /></figure>
                <div className="card-body">
                    <div className="flex justify-between items-center border-b-2 border-yellow-700 pb-3">
                        <h2 className="card-title text-2xl font-bold">{className}</h2>
                        <div className='flex items-center justify-between gap-3'>
                            <Rating
                                className='text-2xl text-yellow-500 md:ml-auto'
                                placeholderRating={parseInt(classRatings)}
                                readonly
                                emptySymbol={<FaRegStar></FaRegStar>}
                                fullSymbol={<FaStar></FaStar>}
                                placeholderSymbol={<FaStar></FaStar>}
                            ></Rating>
                        </div>
                    </div>

                    <p className='text-xl font-bold'>Instructor: {instructorName}</p>
                    <div className='leading-0'>
                        <p className='text-lg'><span className='font-bold'>Available Seat:</span> {availableSeat}</p>
                        <p className='text-lg'><span className='font-bold'>Attended Students:</span> {attendedStudent}</p>
                        <p className='text-lg'><span className='font-bold'>Price:</span> {price}</p>

                    </div>

                    <div className="flex justify-between items-center">
                        {
                            btnLoad ?
                                <button className='Cbutton w-full'>< FaExpandArrowsAlt className='animate-spin'></FaExpandArrowsAlt></button>
                                :
                                <button onClick={() => setOpenModal(true)} className="Cbutton w-full">Pay Now</button>
                        }
                    </div>
                </div >
            </div >
                    
                    
                    
                      {/* Modal for payment */}
            <div className={`${openModal ? 'fixed' : 'hidden'} inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-20`}>
                <div className="bg-white w-1/2 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold">Pay By Debit/ Credit Card</h2>
                        <button
                            className="text-gray-600 hover:text-gray-800"
                            onClick={() => setOpenModal(false)}
                        >
                            Close
                        </button>
                    </div>
                    <div></div>
                </div>
            </div>
        </>
    );
};

export default MySelectedClassCard;