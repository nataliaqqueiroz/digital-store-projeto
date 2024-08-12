import React from 'react';
import Section from "../components/Section";
import collection1 from "../assets/collection-1.png";
import collection2 from "../assets/collection-2.png";
import collection3 from "../assets/collection-3.png";
import collectiondestaque from "../assets/collectiondestaque.png";
import styled from "styled-components";
import ProductListing from "../components/ProductListing";
import Gallery from "../components/Gallery";
import airjordan from "../assets/airjordan.png"

const Gallerypage = styled.div`
background-color: #ededed;
padding: 0;
`;

const Galleryimage = styled.div`

.gallery {
  margin: 0;
  padding: 0;
  padding-left: 0px;
  padding-right: 0px;
  width: 1440px;
}

.main-image img {
  width: 1440px;
  height: 681px;
  border-radius: 4px;
  padding: 0;
  margin: 0;
  padding-left: 25px;
  padding-right: 20px;
}

.navigationgallery {
  display: flex;
  justify-content: space-between;
  align-items: right;
  position: absolute;
  top: 70%;
  width: 96%;
  transform: translateY(-50%);
}

.navigationgallery button {
  background: none;
  border: none;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s ease;

}

.navigationgallery button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.navigationgallery button:hover {
  opacity: 1;
}

.thumbnails {
  display: flex;
  justify-content: center;
  padding-right: 120px;
  margin-top: 10px;
}

.thumbnail {
  width: 80px;
  height: 60px;
  margin: 0 5px;
  border-radius: 4px;
  cursor: pointer;
  transition: border 0.3s ease;
}

.thumbnail.active {
  border: 2px solid #C92071;
}
`;

const images = [
  { src: 'public/home-slide-1.png' },
  { src: 'public/home-slide-2.jpeg' },
  { src: 'public/home-slide-3.jpeg' },
  { src: 'public/home-slide-4.jpeg' },
  { src: 'public/home-slide-5.jpeg' },
];

const GalleryStyled = styled.div`
background-color: #ededed;
padding: 0;
margin: 0;
`;

const StyledSection = styled.div`
  margin-top: 0;
  padding: 0;
  margin-left: 0px;
  display: flex;
  justify-content: center;
  gap: 10px;
  `;

const Collection = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const StyledImage = styled.img`
  border-radius: 15px;
  width: 420px;
`;
const Jordan = styled.div`
  width: 1400px;
  height: 550px;
  padding: 0;
  margin: 0;
`;

const Jordanimg = styled.img`
  width: 1400px;
  height: 550px;
`;
function HomePage() {

  const linkObject = {
    text: 'Ver todos ➔',
    href: '/products'
  };

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
  
  ];

  return (
    <>
    <Gallerypage>
    <Galleryimage>
      <Gallery images={images} className="main-image"/>
    </Galleryimage>
    <GalleryStyled>
    <div>
      <Section
        title="Coleções em destaque" 
        titleAlign="left" 
        />
      <div>
        <StyledSection>
        <StyledImage src={collection1} alt="collection1" />
        <StyledImage src={collection2} alt="collection2" />
        <StyledImage src={collection3} alt="collection3" />
        </StyledSection>
      </div>


      <Section
          title="Coleções em destaque"
          titleAlign="center"
        />
        <Collection>
          <div>
            <img src={collectiondestaque} alt="collectiondestaque" />
          </div>
        </Collection>
        

      <Section
        title="Produtos em Alta" 
        titleAlign="left" 
        link={linkObject}
      />
      <ProductListing products = {productsData}/>
      </div>
      </GalleryStyled>
      </Gallerypage>
      <Jordan>
        <div>
        <Jordanimg src={airjordan} alt="airjordan" />
        </div>
      </Jordan>
    </>
  );
}

export default HomePage;

