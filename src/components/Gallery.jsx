import React, { useState } from "react";
import "./Gallery.css";

const images = [
  { src: "public/1.jpg", name: "Espresso" },
  { src: "public/3.jpg", name: "Hot Coffe" },
  { src: "public/2.jpg", name: "Ice coffe & Frappe" },
  { src: "public/4.jpg", name: "Soft Drinks & Mix Soda" },
  { src: "public/5.jpg", name: "Cocktail Fresh" },
  { src: "public/6.jpg", name: "Fresh Juice" },
  { src: "public/7.jpg", name: "Milk Shake" },
  { src: "public/desert.jpg", name: "Desert" },
  { src: "public/8.jpg", name: "Bitro وجبات" },
  { src: "public/9.jpg", name: "Burger Chicken" },
  { src: "public/10.jpg", name: "Bitro مكرونه" },
  { src: "public/11.jpg", name: "Crepe-كريب" },
  { src: "public/12.jpg", name: "Rap Sandwich راب سندوتش" },
  { src: "public/15.jpg", name: "وجبات مكس" },
  { src: "public/16.jpg", name: "صواني الصحاب" },
  { src: "public/shisha.jpg", name: "shisha" },

];

const Gallery = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item" onClick={() => setFullscreenImage(img)}>
            <img src={img.src} alt={img.name} />
            <p>{img.name}</p>
          </div>
        ))}
      </div>

      {fullscreenImage && (
        <div className="fullscreen-overlay" onClick={() => setFullscreenImage(null)}>
          <span className="close-button">&times;</span>
          <img src={fullscreenImage.src} alt={fullscreenImage.name} className="fullscreen-img" />
          <p className="image-caption">{fullscreenImage.name}</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;