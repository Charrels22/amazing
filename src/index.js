import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';/
import './index.css';
import Home from './components/pages/Home/home';
import Login from './components/pages/Login/login';
import Header from './components/header/header';

import { RouterProvider, createBrowserRouter,BrowserRouter, Route, Routes } from 'react-router-dom';


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
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

