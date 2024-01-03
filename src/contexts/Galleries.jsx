import React, { createContext, useContext, useState } from "react";

export const GalleriesContext = createContext();
const GalleriesProvider = ({ children }) => {
  const [galleries, setGalleries] = useState([
    {
      id: 1,
      src: "https://preview.locotheme.com/grandium-html/assets/img/photo-gallery-1.jpg",
      category: "ROOMS",
    },
    {
      id: 2,
      src: "https://preview.locotheme.com/grandium-html/assets/img/photo-gallery-6.jpg",
      category: "SKY BAR & LOUNGE",
    },
    {
      id: 3,
      src: "https://preview.locotheme.com/grandium-html/assets/img/photo-gallery-7.jpg",
      category: "SKY BAR & LOUNGE",
    },
    {
      id: 4,
      src: "https://preview.locotheme.com/grandium-html/assets/img/photo-gallery-8.jpg",
      category: "SKY BAR & LOUNGE",
    },
    {
      id: 5,
      src: "https://preview.locotheme.com/grandium-html/assets/img/photo-gallery-9.jpg",
      category: ["SKY BAR & LOUNGE", "RESTAURANT"],
    },
    {
      id: 6,
      src: "https://preview.locotheme.com/grandium-html/assets/img/photo-gallery-2.jpg",
      category: ["ROOMS", "RESTAURANT"],
    },
    {
      id: 7,
      src: "https://preview.locotheme.com/grandium-html/assets/img/photo-gallery-10.jpg",
      category: "CONFERENCE",
    },
    {
      id: 8,
      src: "https://preview.locotheme.com/grandium-html/assets/img/photo-gallery-11.jpg",
      category: ["RESTAURANT", "CONFERENCE"],
    },
    {
      id: 9,
      src: "https://preview.locotheme.com/grandium-html/assets/img/photo-gallery-12.jpg",
      category: ["RESTAURANT", "WEDDING", "CONFERENCE"],
    },
    {
      id: 10,
      src: "https://preview.locotheme.com/grandium-html/assets/img/photo-gallery-13.jpg",
      category: "WEDDING",
    },
    {
      id: 11,
      src: "https://preview.locotheme.com/grandium-html/assets/img/photo-gallery-3.jpg",
      category: "ROOMS",
    },
    {
      id: 12,
      src: "https://preview.locotheme.com/grandium-html/assets/img/photo-gallery-14.jpg",
      category: "WELLNESS & SPA",
    },
    {
      id: 13,
      src: "https://preview.locotheme.com/grandium-html/assets/img/photo-gallery-15.jpg",
      category: "WELLNESS & SPA",
    },
    {
      id: 14,
      src: "https://preview.locotheme.com/grandium-html/assets/img/photo-gallery-16.jpg",
      category: ["WELLNESS & SPA", "WEDDING"],
    },
    {
      id: 15,
      src: "https://preview.locotheme.com/grandium-html/assets/img/photo-gallery-17.jpg",
      category: ["WELLNESS & SPA", "WEDDING"],
    },
    {
      id: 16,
      src: "https://preview.locotheme.com/grandium-html/assets/img/photo-gallery-4.jpg",
      category: "ROOMS",
    },
  ]);

  return (
    <GalleriesContext.Provider value={{ galleries }}>
      {children}
    </GalleriesContext.Provider>
  );
};

export default GalleriesProvider;
