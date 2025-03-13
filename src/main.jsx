import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Errorpage from './Components/ErrorPage/Errorpage.jsx';
import Web from './Components/WebPage/Web.jsx';
import Racipe from './Components/Header/Racipe/Racipe.jsx';
import About from './Components/Header/about/About.jsx';
import Contact from './Components/Header/Contact/Contact.jsx';

const Router=createBrowserRouter([
  {
    path:'/',
    errorElement:<Errorpage></Errorpage>,
    element:<Web></Web>,
    children:[
      {
      path:'/racipe',
      loader:()=>fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
      element:<Racipe></Racipe>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/Contact',
        element:<Contact></Contact>
      }
  ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router}></RouterProvider>
  </StrictMode>,
)
