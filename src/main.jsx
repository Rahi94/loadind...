import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Blog from './components/Blog.jsx';
import AuthProvider from './components/AuthProvider.jsx';
import NotFound from './components/NotFound.jsx';
import EstateDetails from './components/EstateDetails.jsx';
import BlogDetails from './components/BlogDetails.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement : <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/blog',
        element: <PrivateRoute> <Blog></Blog> </PrivateRoute>,
        loader : () => fetch('/blogs.json')
      },
      {
        path : '/estate/:id',
        element : <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
        loader : () => fetch('/residents.json')
      },
      {
        path : '/blogs/:id',
        element : <BlogDetails></BlogDetails>,
        loader : () => fetch('/blogs.json')
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
