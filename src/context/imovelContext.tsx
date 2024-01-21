import React, { createContext, useState } from 'react';

const ImovelContext = createContext({
  imovelValue: null,
  vistoriaValue: null,
  setImovel: null,
  setVistoria: null,
});

export const ImovelContextProvider: React.FC = ({ children }: any) => {
  const [setImovel, imovelValue] = useState();
  const [setVistoria, vistoriaValue] = useState();

  return (
    <ImovelContext.Provider
      value={{ imovelValue, vistoriaValue, setImovel, setVistoria }}
    >
      {children}
    </ImovelContext.Provider>
  );
};
