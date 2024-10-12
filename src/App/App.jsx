
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../component/layout/Layout'
import Landing from '../screens/landing/Landing'
import Courses from '../screens/courses/Courses'
import SingIn from '../screens/signIn/signIn'
import React, {useState} from 'react'
import LogIn from '../component/signIn/logIn'
import StepOne from '../screens/register/StepOne'
import StepTwo from '../screens/register/StepTwo'
import StepThree from '../screens/register/StepThree'
// import myRoutes from './Route/Router'


function App() {
  const myRoutes = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:'',
          element:<Landing/>
        },
        {
          path:'courses',
          element:<Courses/>
        },
      ]
    },
    {
      path:'/signIn',
      element:<SingIn/>
    },
    {
      path:'/stepone',
      element:<StepOne/>
    }, 
    {
      path:'/steptwo',
      element:<StepTwo/>
    },     
    {
      path:'/stepthree',
      element:<StepThree/>
    },    
    
  ])


  return (
    <>
      <RouterProvider router={myRoutes}/>
    
    </>
  )
}

export default App
