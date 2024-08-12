import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';


const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  align-items: center;
  gap: 15px;
  padding: 10px;
  margin-left: 100px;
  margin-bottom: 20px;
  padding-bottom: 80px;
  width: 85%;
  height: 80%;
`;

const ProductListing = ({ products }) => {
  return (
    <ProductListContainer>
      {products.map((product, index) => (
          <ProductCard
          key={index}
          name={product.name}
          imagem={product.imagem}
          price={product.price}
          priceDiscount={product.priceDiscount}
          />
      ))}
    </ProductListContainer>
  );
};

export default ProductListing;
