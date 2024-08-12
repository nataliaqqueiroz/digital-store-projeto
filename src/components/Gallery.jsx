import React, { useState } from 'react';
import leftarrow from '../assets/arrow-left.svg';
import rightarrow from '../assets/arrow-right.svg';
import "./Gallery.css";


const Gallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const renderThumbnails = () => {
    return images.map((image, index) => (
      <img
        key={index}
        src={image.src}
        alt={`Thumbnail ${index + 1}`}
        className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
        onClick={() => setCurrentIndex(index)}
      />
    ));
  };

  return (
    <div className="gallerycontainer">
      <div className= "gallery">
          <div className='main-image'>
        <img src={images[currentIndex].src} alt={`Imagem ${currentIndex + 1}`} />
      </div>
      </div>
      <div className="navigationgallery">
        <button className="prev" onClick={prevImage} disabled={currentIndex === 0}>
          <img src={leftarrow} alt="Anterior" />
        </button>

        <button className="next" onClick={nextImage} disabled={currentIndex === images.length - 1}>
          <img src={rightarrow} alt="Próximo" />
        </button>
      </div>

      <div className="thumbnails">
        {renderThumbnails()}
      </div>

    </div>
  );
};

export default Gallery;

