import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SigninPage from './auth/signin'
import Home from './home/Home'
import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";
import { ClerkProvider } from '@clerk/clerk-react'
import DahsBoard from './home/dshaboard/DahsBoard'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const resumeRoute = createBrowserRouter([

  {// this is the default path for react router 
    
    element:<App/>,
    /* app will be the default layout inside that we have dashboard 
      create resume and update resume so we add children inside app for routes
      and we will be using <outlet/>
      */
    children: [
      
      {
        path: '/dashboard',
        element: <DahsBoard/>
      }
    ]
    
  },
  {
    path: '/', //default path
    element: <Home />

  },
  {
    path:"auth/signpage",
    element: <SigninPage/>
  }
]
);
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
 < RouterProvider router={resumeRoute}/>
  </ClerkProvider>
  </StrictMode>,
)
