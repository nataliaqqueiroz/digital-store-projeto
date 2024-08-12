import React from 'react';
import styled from 'styled-components';
import star from '../assets/star-icon.png';

const BuyBoxContainer = styled.div`
  padding-top: 20px;
  margin-bottom: 30px;
  max-width: 450px;
  height: 600px;
  background-color: #f5f5f5;
`;

const ProductName = styled.h2`
  font-size: 32px;
  color: #1f1f1f;
  margin-bottom: 20px;
`;

const ProductReference = styled.p`
  font-size: 12px;
  color: #666666;
  margin-bottom: 10px;
`;

const ProductStars = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 10px;
`;

const StarsBox = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: #F6AA1C;
  padding: 2px 6px;
  color: #ffffff;
  font-weight: bold;
  margin-right: 5px;
`;

const StarIcon = styled.img`
  margin-left: 6px;
  align-items: center;
`;

const ProductRating = styled.p`
  font-size: 14px;
  color: #8F8F8F;
  margin-bottom: 10px;
  padding-left: 5px;
`;

const ProductPrice = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 10px;
`;

const OriginalPrice = styled.span`
  font-size: 32px;
  color: #474747;
  margin-right: 10px;
  margin-bottom: 10px;
`;

const DiscountPrice = styled.span`
  font-size: 14px;
  color: #CCCCCC;
  text-decoration: line-through;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-size: 14px;
  color: #CCCCCC;
  margin-bottom: 20px;
`;

const BuyButton = styled.button`
  width: 200px;
  background-color: #F6AA1C;
  color: #ffff;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;


  &:hover {
    background-color: #f5bd55;
  }
`;


const BuyBox = ({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) => {
  return (
    <BuyBoxContainer>
      <ProductName>{name}</ProductName>
      <ProductReference>REF {reference}</ProductReference>
      <ProductStars>
        <StarsBox>
          {stars}
          <StarIcon img src={star} alt="star" />
        </StarsBox>
        <ProductRating>({rating} avaliações)</ProductRating>
      </ProductStars>

      <ProductPrice>
        <OriginalPrice hasDiscount={!!priceDiscount}>{`R$ ${price}`}</OriginalPrice>
        {priceDiscount && <DiscountPrice>{`R$ ${priceDiscount}`}</DiscountPrice>}
      </ProductPrice>
      <ProductDescription>{description}</ProductDescription>
      {children}
      <BuyButton>COMPRAR</BuyButton>
    </BuyBoxContainer>
  );
};

export default BuyBox;
