import React from 'react';
import "./ProductCard.css";
import { Link } from 'react-router-dom';

const ProductCard = ({ name, imagem, price, priceDiscount }) => {
  return (
    <div className="productCard">
      <Link to="/pagina-produto/1/tenis" style={{ textDecoration: 'none', color: 'inherit' }}>
      <img src={imagem} alt="Tenis" className="product-image" /></Link>
      
      <h5>Tênis</h5>
      <Link to="/pagina-produto/1/tenis" style={{ textDecoration: 'none', color: 'inherit' }}><h2 className="product-name">{name}</h2></Link>
      <div className="product-prices">
        {priceDiscount ? (
          <>
            <span className="product-price-discount">R${priceDiscount.toFixed(2)}</span>
            <span className="product-price-original-price">R${price.toFixed(2)}</span>
          </>
        ) : (
          <span className="product-price">R${price.toFixed(2)}</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;



