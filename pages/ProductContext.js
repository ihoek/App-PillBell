import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productInfo, setProductInfo] = useState({
    name: '',
    expirationDate: '',
    warning: '',
    consumed: '',
  });

  return (
    <ProductContext.Provider value={{ productInfo, setProductInfo }}>
      {children}
    </ProductContext.Provider>
  );
};
