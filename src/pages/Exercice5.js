import React, { useState, Fragment, useRef, useEffect } from "react";
import image1 from "./../assets/images/image1.webp";
import image2 from "./../assets/images/image2.webp";
import image3 from "./../assets/images/image3.webp";
import image4 from "./../assets/images/image4.webp";
import image5 from "./../assets/images/image5.webp";
import image6 from "./../assets/images/image6.webp";
import image7 from "./../assets/images/image7.webp";

const images = [
    image1, image2, image3, image4, image5, image6, image7
];

function Exercice5() {

    let exerciceContent5;

    const scrollRef = useRef(null);
    const [fadedIndexes, setFadedIndexes] = useState([]);

    useEffect(() => {
      const handleScroll = () => {

        const container = scrollRef.current; // accès au DOM direct ici scrollRef contient la référence de motion.div
        const children = Array.from(container.children);
  
        let newFadedIndexes = [];
  
        children.forEach((child, index) => {
          const rect = child.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
  
          const visibleWidth =
            Math.min(rect.right, containerRect.right) -
            Math.max(rect.left, containerRect.left);
          const cardWidth = rect.width;
          const visibilityRatio = visibleWidth / cardWidth;
  
          // Appliquer la transparence uniquement si moins de 90% de la carte est visible
          if (visibilityRatio < 0.9) {
            newFadedIndexes.push(index);
          }
        });
  
        setFadedIndexes(newFadedIndexes);
      };
  
      handleScroll();
      if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleScroll);
      }
      return () => {
        if (scrollRef.current) {
          scrollRef.current.removeEventListener("scroll", handleScroll);
        }
      }
    }, []);
    
    
    exerciceContent5 = (
        <div className="horizontal-scroll-container">
        <div ref={scrollRef} className="horizontal-scroll-content">
          {images.map((image, index) => (
            <div
              key={index}
              className={`card ${fadedIndexes.includes(index) ? "faded" : ""}`}
            >
              <img src={image} alt={`Image ${index + 1}`} className="image" />
            </div>
          ))}
        </div>
      </div>
    )

    return exerciceContent5;

}

export default Exercice5;