import React, { createContext, useState } from "react";

export const FacilitesGalleryContext = createContext();
const FacilitesGalleryProvider = ({ children }) => {
  const [gallery, setGallery] = useState([
    {
      id: 1,
      src: "https://preview.locotheme.com/grandium-html/assets/img/photo-services-1-2.jpg",
      title: "Sky Bar & Lounge",
    },

    {
      id: 4,
      src: "https://preview.locotheme.com/grandium-html/assets/img/photo-services-4-1.jpg",
      title: "Private Dining",
    },
    {
      id: 2,
      src: "https://preview.locotheme.com/grandium-html/assets/img/photo-services-2-1.jpg",
      title: "Conference & Events",
    },
    {
      id: 5,
      src: "https://preview.locotheme.com/grandium-html/assets/img/photo-services-5-1.jpg",
      title: "Wedding Venue",
    },
    {
      id: 3,
      src: "https://preview.locotheme.com/grandium-html/assets/img/photo-services-3-1.jpg",
      title: "Spa & Beauty Center",
    },
    {
      id: 6,
      src: "https://preview.locotheme.com/grandium-html/assets/img/photo-services-6-1.jpg",
      title: "Swimming Pool",
    },
  ]);

  return (
    <FacilitesGalleryContext.Provider value={{ gallery }}>
      {children}
    </FacilitesGalleryContext.Provider>
  );
};

export default FacilitesGalleryProvider;
