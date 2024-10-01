
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../component/layout/Layout'
import Landing from '../screens/landing/Landing'
import Courses from '../screens/courses/Courses'
import SingIn from '../screens/signIn/signIn'
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
  ])


  return (
    <>
      <RouterProvider router={myRoutes}/>
      
    </>
  )
}

export default App
