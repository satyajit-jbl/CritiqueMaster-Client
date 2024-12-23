import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './router/router.jsx';
import AuthProvider from './component/AuthProvider/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    <ToastContainer></ToastContainer>
    </AuthProvider>
    
  </StrictMode>,
)
