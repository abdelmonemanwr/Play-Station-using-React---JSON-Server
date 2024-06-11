import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { deleteProduct } from '../../api/productAPI';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useLoaderData } from 'react-router-dom';
import { useSnackbar } from '../../components/SnackBarProvider';
export function Products() {
  const response = useLoaderData();
  let [products, setProducts] = useState(response.data);
  const { showSnackbar } = useSnackbar();

  const deleteHandler = async (productId) => {
    try {
      await deleteProduct(productId);
      let filteredList = products.filter((product) => product.id !== productId);
      setProducts(filteredList);
      showSnackbar(`Product deleted successfully!`, 'success');
    } catch (error) {
      console.log(error);
      showSnackbar(`Failed to delete the product!`, 'error');
    }
  };

  return (
    <div className="p-1 text-center mt-5">
      <h1>Our Products</h1>
      <div className="container">
        <div className="row">
          {products && products.map((product) => (
            <div className="col-md-3 d-flex align-items-stretch" key={product.id}>
              <ProductCard product={product} deleteHandler={deleteHandler} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
