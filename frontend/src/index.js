import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Router, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Generate from './Pages/generate/Generate';

import {
    createBrowserRouter,
    RouterProvider,
    Route
  } from "react-router-dom";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "/generate",
        element: <Generate/>,
      },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}>
        <Routes>
            <Route path="/" element={<App/>}/>
        </Routes>
    </RouterProvider>
  
);

