import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  RouterProvider
} from "react-router-dom";

import Authprovider from './Components/AuthProvider/Authprovider'
import { router } from './router';
import { ToastContainer } from 'react-toastify';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


// Create a client
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <ToastContainer position='top-center'></ToastContainer>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </Authprovider>
  </React.StrictMode>
)
