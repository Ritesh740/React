import Layout from './Layout.jsx';
import Home from './Component/Home/Home.jsx';
import About from './Component/About/About.jsx';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
]);
import React from 'react'

export const App = () => {
  return (
    <RouterProvider router={router} />
  
  )
}
