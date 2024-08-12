import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import FilterGroup from "../components/FilterGroup";
import "./Filtro.css";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import styled from "styled-components";

    const SectionProduct = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    background-color:#e5e5e5;
    width: 100%;
    height: 100%;
    `;

    const Sectiondiv1 = styled.div`
    .filtrar h1{
        padding-top: 20px;
        padding-left: 10px;
    }

    .ordernar{
      padding-top: 10px;
      padding-left: 5px;
    }
    
  `;
    const Sectiondiv2 = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;

  `;

    const ProductListingPage = () => {
    const [selectedOrder, setSelectedOrder] = useState(null);
    const order = [
        { option: 'Maior preço',},
        { option: 'Menor preço'},
    ];
    
    const categories = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];
    const [selectedCategories, setSelectedCategories] = useState([categories[1]]);

    const onCategoryChange = (e) => {
        let _selectedCategories = [...selectedCategories];

        if (e.checked)
            _selectedCategories.push(e.value);
        else
            _selectedCategories = _selectedCategories.filter(category => category.key !== e.value.key);

        setSelectedCategories(_selectedCategories);
    };

    const filterMarca = [
        { text: 'Adiddas', value: 'opt1' },
        { text: 'Lacoste' },
        { text: 'K-Swiss', value: 'opt3' },
        { text: 'Puma' },
        { text: 'Nike' },
      ];
      
      const filterCategoria = [
        { text: 'Esporte e Lazer', value: 'opt1' },
        { text: 'Casual' },
        { text: 'Utilitário', value: 'opt3' },
        { text: 'Corrida' },
      ];

      const filterGenero = [
        { text: 'Masculino', value: 'opt1' },
        { text: 'Feminino' },
        { text: 'Unisex', value: 'opt3' },
      ];

      const productsData = [
        {
          name: 'Lacoste G80 OG Branco',
          imagem: "https://i.pinimg.com/736x/5e/4f/ba/5e4fbad0418293d0a95b5669c6eb2211.jpg",
          price: 799,
          priceDiscount: 900
        },
        {
          name: 'T-Clip Sneakers Women',
          imagem: "https://i.pinimg.com/564x/c0/88/f6/c088f68824c6384f4abc7d013734403b.jpg",
          price: 820,
          priceDiscount: 900
        },
        {
          name: 'Lacoste G80 OG Branco',
          imagem: "https://i.pinimg.com/736x/5e/4f/ba/5e4fbad0418293d0a95b5669c6eb2211.jpg",
          price: 799,
          priceDiscount: 600
        },
        {
          name: 'T-Clip Sneakers Women',
          imagem: "https://i.pinimg.com/564x/c0/88/f6/c088f68824c6384f4abc7d013734403b.jpg",
          price: 900,
        },
        {
          name: 'Lacoste G80 OG Branco',
          imagem: 'https://i.pinimg.com/736x/5e/4f/ba/5e4fbad0418293d0a95b5669c6eb2211.jpg',
          price: 799,
          priceDiscount: 650
        },
        {
          name: 'T-Clip Sneakers Women',
          imagem: "https://i.pinimg.com/564x/c0/88/f6/c088f68824c6384f4abc7d013734403b.jpg",
          price: 900,
          priceDiscount: 800
        },
        {
          name: 'Lacoste G80 OG Branco',
          imagem: "https://i.pinimg.com/736x/5e/4f/ba/5e4fbad0418293d0a95b5669c6eb2211.jpg",
          price: 799,
          priceDiscount: 720
        },
        {
          name: 'T-Clip Sneakers Women',
          imagem: "https://i.pinimg.com/564x/c0/88/f6/c088f68824c6384f4abc7d013734403b.jpg",
          price: 800,
    
        },
        {
          name: 'Lacoste G80 OG Branco',
          imagem: "https://i.pinimg.com/736x/5e/4f/ba/5e4fbad0418293d0a95b5669c6eb2211.jpg",
          price: 799,
        },
        {
          name: 'T-Clip Sneakers Women',
          imagem: "https://i.pinimg.com/564x/c0/88/f6/c088f68824c6384f4abc7d013734403b.jpg",
          price: 820,
          priceDiscount: 900
        },
        {
          name: 'Lacoste G80 OG Branco',
          imagem: "https://i.pinimg.com/736x/5e/4f/ba/5e4fbad0418293d0a95b5669c6eb2211.jpg",
          price: 799,
          priceDiscount: 600
        },
        {
          name: 'T-Clip Sneakers Women',
          imagem: "https://i.pinimg.com/564x/c0/88/f6/c088f68824c6384f4abc7d013734403b.jpg",
          price: 900,
        },
        {
          name: 'Lacoste G80 OG Branco',
          imagem: 'https://i.pinimg.com/736x/5e/4f/ba/5e4fbad0418293d0a95b5669c6eb2211.jpg',
          price: 799,
          priceDiscount: 650
        },
        {
          name: 'T-Clip Sneakers Women',
          imagem: "https://i.pinimg.com/564x/c0/88/f6/c088f68824c6384f4abc7d013734403b.jpg",
          price: 900,
          priceDiscount: 800
        },
        {
          name: 'Lacoste G80 OG Branco',
          imagem: "https://i.pinimg.com/736x/5e/4f/ba/5e4fbad0418293d0a95b5669c6eb2211.jpg",
          price: 799,
          priceDiscount: 720
        },
        {
          name: 'T-Clip Sneakers Women',
          imagem: "https://i.pinimg.com/564x/c0/88/f6/c088f68824c6384f4abc7d013734403b.jpg",
          price: 800,
    
        },
        {
          name: 'Lacoste G80 OG Branco',
          imagem: "https://i.pinimg.com/736x/5e/4f/ba/5e4fbad0418293d0a95b5669c6eb2211.jpg",
          price: 799,
          priceDiscount: 720
        },
        {
          name: 'T-Clip Sneakers Women',
          imagem: "https://i.pinimg.com/564x/c0/88/f6/c088f68824c6384f4abc7d013734403b.jpg",
          price: 800,
    
        },
      
      ];

  return (
    <SectionProduct>
        <Sectiondiv1>
    <div className="ListadeProdutos">
        <div className="mt-6 p-0 mb-3">
            <label className="text-base text-gray-700">Ordenar por:</label> <br />
                <Dropdown value={selectedOrder} onChange={(e) => setSelectedOrder(e.value)} options={order} optionLabel="option" 
                placeholder="Preço" className="ordernar" />
        </div>
        <div className="filtrar">
            <h1>Filtrar por</h1>
            <hr/>
            <div>
            <FilterGroup title="Marca" inputType="checkbox" options={filterMarca} />
            <FilterGroup title="Categoria" inputType="checkbox" options={filterCategoria} />
            <FilterGroup title="Gênero" inputType="checkbox" options={filterGenero} />
            </div>
        </div>
        </div>
        
        </Sectiondiv1>

        <Sectiondiv2>
        <div>
            <Section
                title="Resultados para “Tênis” - 18 produtos" 
                titleAlign="left" 
            />
            <ProductListing products = {productsData}/>
        </div></Sectiondiv2>
    </SectionProduct>
  );
};

export default ProductListingPage;
