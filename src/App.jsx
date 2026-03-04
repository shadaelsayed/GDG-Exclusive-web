
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './components/layouts/mainLayout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import ProductDetails from './pages/ProductDetails/ProductDetails'


function App() {

  const router = createBrowserRouter([
{
    path:"/",
    element :<MainLayout/>,
    children :[{
      path:"",
      element:<Home/>
    },
    {
      path: "about" , 
      element:<About/>
    },
    {
      path: "contact" ,
      element: <Contact/>
    },
    {
      path: "productDetails" ,
      element: <ProductDetails/>
    }
  ]

  }
  ]) 

  return (
   <RouterProvider router={router}></RouterProvider>
  )
}

export default App
