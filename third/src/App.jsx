import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Error } from './pages/Error';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { Cart } from './pages/products/Cart';
import { Products } from './pages/products/Products';
import { ProductDetails } from './pages/products/ProductDetails';
import { ProductForm } from './pages/products/ProductForm';
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
          <Route path='cart' element={<Cart />} />
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
