import React, { useContext, useEffect, useState } from 'react';
// import '../styles/common.css';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAxiosSecure from '../../../CustomHook/AxiosHook/useAxiosSecure';
import { AuthContext } from '../../../Components/AuthProvider/Authprovider';
import { toast } from 'react-toastify';

const CheckoutForm = ({ modifiedData , setOpenModal, refetch}) => {
  const {price, prevId} = modifiedData
  const { user } = useContext(AuthContext)
  const [AxiosSecure] = useAxiosSecure()
  const [cardErr, setCardErr] = useState('')
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");


  useEffect(() => {
    AxiosSecure.post('/create-payment-intent', { price })
      .then(res => {
        setClientSecret(res.data.clientSecret)
        // console.log(res.data.clientSecret)
      })
    }, [])


    // console.log(clientSecret);


  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('error', error);
      setCardErr(error.message)
    } else {
      console.log('PaymentMethod', paymentMethod);
      setCardErr('')
    }


    const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'unknown',
            name: user?.displayName || 'unknown'
          }
        }
      }
    )

    if (confirmError) {
      console.log(confirmError);
      setCardErr(confirmError.message)
    } else{
      console.log('fine', paymentIntent)
      if(paymentIntent.status === 'succeeded'){
        const paymentInfo = {
          ...modifiedData,
          transactionId: paymentIntent.id,
          date: new Date()
        }

        // set to the my enrolled database
        AxiosSecure.post('/myEnrolled', paymentInfo)
        .then(res => {
          refetch()
          if(res.data.insertedId){
            toast.success('Payment Completed')
            refetch()
          }
          // AxiosSecure.delete(`/booking/${prevId}`)
          // .then(res => {
          //   refetch()
          //   console.log(res.data);
          //   setOpenModal(false)
          // })
          
        })
      }
    }
    


  };

  return (
    <form className='pt-8 flex flex-col justify-between' onSubmit={handleSubmit}>
      <div>
        <CardElement className='border-b-2 border-slate-500'
          options={{ style: { base: { fontSize: '20px', color: 'blue', '::placeholder': { color: '#aab78' }, }, invalid: { color: '#9e2146', }, }, }} />
        {cardErr && <p className='text-red-600 mt-2'>***{cardErr}</p>}
      </div>

      <button type="submit" className='Cbutton ml-auto w-20 mt-5' disabled={!stripe || !clientSecret}>Pay</button>
    </form>
  );
};
export default CheckoutForm;