import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';/
import './index.css';
import Home from './components/pages/Home/home';
import Login from './components/pages/Login/login';

import { RouterProvider, createBrowserRouter,BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

