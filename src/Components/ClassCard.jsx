import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider/Authprovider';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';
import useAxiosSecure from '../CustomHook/AxiosHook/useAxiosSecure';
import Loader from './Loader/Loader';

const ClassCard = ({ Sdata, refetch }) => {
  const [disable, setDisable] = useState(false)
  const [AxiosSecure] = useAxiosSecure()
  const { user, role } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  if (!Sdata) {
    return <Loader></Loader>
  }

  const { _id, classImage, className, instructorName, availableSeat, attendedStudent, feedBack, classStatus, price, classRatings } = Sdata

  
  
  const handleBookings = (id) => {
    if(availableSeat === 0){
      return toast.warning("Can't Book in case of Non-availability of seat")

    }
   
    if (!user) {
      navigate('/login')
      location.state = { pathname: location.pathname }
    }

    const bookData ={
      email: user.email, prevId : id, 
      className, classImage, instructorName, availableSeat, price, 
    }
    // console.log(bookData);
    AxiosSecure.post('/booking', bookData)
    .then(res => {
      // setDisable(true)
      console.log(res.data);
      // Handle the response here
    })
    .catch(error => {
      console.error(error);
      // Handle the error here
    });



  }

  return (
    <div className={`card group card-compact w-full  border shadow-xl ${availableSeat=== 0 ? 'border-red-500 bg-red-200' : 'bg-gradient-to-br from-yellow-200 to-white  border-green-500'}`}>
      <figure><img className='h-60 w-full object-cover object-center group-hover:scale-110 transition-all duration-150 ' src={classImage} alt="classImage" /></figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold border-b-2 border-yellow-700 pb-3">{className}</h2>
        <p className='text-xl font-bold'>Instructor: {instructorName}</p>
        <div className='leading-0'>
          <p className='text-lg'><span className='font-bold'>Available Seat:</span> {availableSeat}</p>
          <p className='text-lg'><span className='font-bold'>Attended Students:</span> {attendedStudent}</p>
          <p className='text-lg'><span className='font-bold'>Price:</span> {price}</p>
        </div>

        <div className="flex justify-between items-center">
          <div className='flex items-center justify-between gap-3'>
            <Rating
              className='text-2xl text-yellow-500 md:ml-auto'
              placeholderRating={parseInt(classRatings)}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              fullSymbol={<FaStar></FaStar>}
              placeholderSymbol={<FaStar></FaStar>}
            ></Rating>
            <span className='text-xl font-bold'>{classRatings}</span>
          </div>
          <button  onClick={() => handleBookings(_id)} disabled={role !== 'user' ? true : false} className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;