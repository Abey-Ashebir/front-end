import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import BreadCrum from '../Components/BreadCrum/BreadCrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Description from '../Components/Description/Description';
import RelatedPro from '../Components/RelatedPro/RelatedPro';

const Products = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  
  // Find the product by ID
  const product = all_product.find((e) => e.id === Number(productId));

  // Handle case where product is not found
  if (!product) {
    return (
      <div>
        <h1>Product Not Found</h1>
        <p>The product you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div>
      <BreadCrum product={product} />
      <ProductDisplay product={product}/>
      <Description/>
      <RelatedPro/>
    </div>
  );
};

export default Products;
