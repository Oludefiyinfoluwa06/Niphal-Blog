import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';

import "bootstrap/dist/css/bootstrap.min.css";

// pages
import AllBlogs from './pages/AllBlogs';
import BlogDetails from './pages/BlogDetails';
import NotFound from './pages/NotFound';

const isProduction = true;

// server url
const PRODUCTION_SERVER_URL = 'https://niphal-blogger-api.vercel.app';
const DEVELOPMENT_SERVER_URL = 'http://localhost:5000';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<AllBlogs server_url={isProduction ? PRODUCTION_SERVER_URL : DEVELOPMENT_SERVER_URL} />} />
      <Route path='/blog/:id' element={<BlogDetails server_url={isProduction ? PRODUCTION_SERVER_URL : DEVELOPMENT_SERVER_URL} />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;