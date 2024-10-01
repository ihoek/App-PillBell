import React, { createContext, useState } from 'react';

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [photoUri, setPhotoUri] = useState(null);

  return (
    <ImageContext.Provider value={{ photoUri, setPhotoUri }}>
      {children}
    </ImageContext.Provider>
  );
};
