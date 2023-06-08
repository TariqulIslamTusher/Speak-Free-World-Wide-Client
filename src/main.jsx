import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  RouterProvider
} from "react-router-dom";

import Authprovider from './Components/AuthProvider/Authprovider'
import { router } from './router';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <ToastContainer></ToastContainer>
      <RouterProvider router={router}></RouterProvider>
    </Authprovider>
  </React.StrictMode>
)
