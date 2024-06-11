import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Error, Home, Products, ProductDetails, ProductForm, NotFound } from './pages';
import { SharedLayout } from './layout/SharedLayout';
import { getAllProducts } from './api/productAPI';

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='products' loader={getAllProducts} errorElement={<Error />} element={<Products />} />
          <Route path='products/:id' element={<ProductDetails />} />
					<Route path='products/:id/edit' element={<ProductForm />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
