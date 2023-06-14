import React, { useContext, useState } from 'react';
import { Navigate, useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { AuthContext } from './AuthProvider/Authprovider';
import Rating from 'react-rating';
import { FaExpandArrowsAlt, FaRegStar, FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';
import useAxiosSecure from '../CustomHook/AxiosHook/useAxiosSecure';
import Loader from './Loader/Loader';
import { useEffect } from 'react';

const ClassCard = ({ Sdata, refetch }) => {


  const [disable, setDisable] = useState(false)
  const [btnLoad, setBtnLoad] = useState(false)
  const [stateChange, setStateChange] = useState(false)
  const [bookedData, setBookedData] = useState(false)

  const [AxiosSecure] = useAxiosSecure()
  const { user, role } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()




  if (!Sdata) {
    return <Loader></Loader>
  }

  const { _id, classImage, className, instructorName, availableSeat, attendedStudent, feedBack, classStatus, price, classRatings, classView } = Sdata

  const modifiedData = { booked: user?.email, prevId: _id, userEmail: user?.email, classImage, className, instructorName, availableSeat, attendedStudent, feedBack, classStatus, price, classRatings }


  const isDisable = availableSeat === 0 || disable


  // console.log(user);

  const handleBookings = (object) => {

    setDisable(true)
    // console.log(_id);

    if (!user) {
      toast.info('You are to login first')
      return navigate('/login', { state: location })
    } else if (user && role === 'admin' || role === "instructor") {
      return toast.warning('Can not bookes as admin/instructor')
    } else{
      
    }

    setStateChange(!stateChange)
    setBtnLoad(true)
    if (availableSeat === 0) {
      setBtnLoad(false)
      return toast.warning("Can't Book in case of Non-availability of seat")
    }

    AxiosSecure.post('/booking', object)
      .then(res => {


        const updoc = {
          booked: user.email,
          classView: parseInt(classView) + 1
        }
        // update the booked data on classDB
        AxiosSecure.patch(`/class/${_id}`, updoc)
          .then(res => {
            console.log(res.data);


          })

        toast.success('Class Booked')
        console.log(res.data);
        setBtnLoad(false)
      })
      .catch(err => {
        toast.error(err.message)
        setBtnLoad(false)
        console.log(err)
      })

  }

  return (
    <div className={`card group card-compact w-full  border shadow-xl ${availableSeat === 0 ? 'border-red-500 bg-red-200' : 'bg-gradient-to-br from-yellow-200 to-white  border-green-500'}`}>
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

          <div>
            {
              btnLoad ?
                <button className='btn btn-primary'>< FaExpandArrowsAlt className='animate-spin'></FaExpandArrowsAlt></button>
                :

                <button onClick={() => handleBookings(modifiedData)} disabled={isDisable ? true : false} className="btn btn-primary">Book Now</button>
            }
          </div>

        </div>
      </div>
    </div>
  );
};

export default ClassCard;