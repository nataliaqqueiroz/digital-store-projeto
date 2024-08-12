import React from 'react';
import styled from 'styled-components';

const FilterGroupContainer = styled.div`
  margin-bottom: 20px;
  padding-left: 20px;
  padding-top: 10px;
`;

const Title = styled.h3`
  font-size: 14px;
  color:  #474747;
  margin-bottom: 10px;
`;

const OptionLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 14px;
  color: #474747;
`;

const Input = styled.input`
  width: 22px;
  height: 22px;
  margin-right: 10px;
  cursor: pointer;
  appearance: none;
  border: 1px solid #474747;
  border-radius: 3px;
  position: relative;
  outline: none;
  transition: background-color 0.2s, border-color 0.2s;

  &:checked {
    background-color: #c92071;
    border-color: #c92071;
  }

  &:checked::before {
    content: '✓';
    display: block;
    color: white;
    font-size: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 22px;
    text-align: center;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
`;

const FilterGroup = ({ title, inputType, options }) => {
  return (
    <FilterGroupContainer>
      <Title>{title}</Title>
      {options.map((option, index) => (
        <OptionLabel key={index}>
          <Input
            type={inputType}
            value={option.value || option.text}
            name={title}
          />
          {option.text}
        </OptionLabel>
      ))}
    </FilterGroupContainer>
  );
};

export default FilterGroup;
