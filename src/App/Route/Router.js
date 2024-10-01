import { createBrowserRouter } from 'react-router-dom'
import Layout from '../../component/layout/Layout'
import Landing from '../../screens/landing/Landing'
import Courses from '../../screens/courses/Courses'

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

  ])

  export default myRoutes 
