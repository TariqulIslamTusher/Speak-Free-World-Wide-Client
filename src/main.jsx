import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  RouterProvider
} from "react-router-dom";

import Authprovider from './Components/AuthProvider/Authprovider'
import { router } from './router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router}></RouterProvider>
    </Authprovider>
  </React.StrictMode>
)