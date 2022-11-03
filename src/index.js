import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider, createBrowserRouter,BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';


import Home from './components/pages/Home/home';
import Login from './components/pages/Login/login';
import Header from './components/header/header';
import Profile from './components/pages/profile/profile';
import UserContext from './contexts/user-context';


const root = ReactDOM.createRoot(document.getElementById('root'));

const withHeader = (component) => {
  return(
    <>
    <Header />
    {component}
    </>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: withHeader(<Home />),
  },
  {
    path: "/login",
    element: withHeader(<Login />),
  },
  {
    path: "/profile",
    element: withHeader(<Profile />),
  },
])

const App = () => {
  
  const [logged, setLogged] = useState(false)

  return(
    <React.StrictMode>
      <UserContext.Provider value={{logged, setLogged}}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </React.StrictMode>
  )
}
root.render(
  <App/>
);

