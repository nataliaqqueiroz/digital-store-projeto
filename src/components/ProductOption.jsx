import React, { useState } from 'react';
import styled from 'styled-components';

const OptionContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const OptionItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.shape === 'circle' ? '31px' : '46px')};
  height: ${(props) => (props.shape === 'circle' ? '31px' : '46px')};
  border-radius: ${(props) => (props.shape === 'circle' ? '50%' : props.radius)};
  border: ${(props) => 
    props.isSelected ? `2px solid #C92071` : `2px solid #D3D3D3`};
  font-size: 24px;
  color: ${(props) => (props.type === 'text' ? '#4F4F4F' : 'transparent')};
  background-color: ${(props) => (props.type === 'color' ? props.value : 'transparent')};
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #C92071;
  }
`;

const ProductOption = ({ options, radius, shape, type }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (index) => {
    setSelectedOption(index);
  };

  return (
    <OptionContainer>
      {options.map((option, index) => (
        <OptionItem
          key={index}
          shape={shape}
          type={type}
          radius={radius}
          value={option}
          isSelected={selectedOption === index}
          onClick={() => handleSelect(index)}
        >
          {type === 'text' ? option : ''}
        </OptionItem>
      ))}
    </OptionContainer>
  );
};

export default ProductOption;
