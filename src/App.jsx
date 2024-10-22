import { useState } from 'react';

export default function App() {
  const images = [
    { src: "/images/pic1.jpg", alt: "Closeup of a human eye" },
    { src: "/images/pic2.jpg", alt: "Rock that looks like a wave" },
    { src: "/images/pic3.jpg", alt: "Purple and white pansies" },
    { src: "/images/pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
    { src: "/images/pic5.jpg", alt: "Large moth on a leaf" }
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);
  const [isDarkened, setIsDarkened] = useState(false);

  const toggleDarken = () => {
    setIsDarkened(prev => !prev);
  };

  return (
    <>
      <h1>Image gallery example</h1>
      <div className="full-img">
        <img
          className="displayed-img"
          src={currentImage.src}
          alt={currentImage.alt}
        />
        <div className="overlay" style={{ backgroundColor: isDarkened ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)' }}></div>
        <button className="dark" onClick={toggleDarken}>
          {isDarkened ? 'Lighten' : 'Darken'}
        </button>
      </div>
      <div className="thumb-bar">
        {images.map((image, index) => (
          <img 
            key={index} 
            src={image.src} 
            alt={image.alt} 
            onClick={() => setCurrentImage(image)} 
          />
        ))}
      </div>
    </>
  );
}