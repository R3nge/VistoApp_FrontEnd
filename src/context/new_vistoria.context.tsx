// import React, { createContext, useContext, useState, ReactNode } from 'react';

// interface VistoriaContextProps {
//     vistoriaData: any;
//     setVistoria: (data: any) => void;
// }

// const VistoriaContext = createContext<VistoriaContextProps | undefined>(undefined);

// export const VistoriaProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//     const [vistoriaData, setVistoriaData] = useState<any>(null);

//     const setVistoria = (data: any) => {
//         setVistoriaData(data);
//     };

//     return (
//         <VistoriaContext.Provider value={{ vistoriaData, setVistoria }}>
//             {children}
//         </VistoriaContext.Provider>
//     );
// };

// export const useVistoriaContext = (): VistoriaContextProps => {
//     const context = useContext(VistoriaContext);

//     if (!context) {
//         throw new Error('useVistoriaContext must be used within a VistoriaProvider');
//     }

//     return context;
// };

// Importing necessary libraries and components
import React, { createContext, useState } from 'react';

// Creating a context for Vistoria
const VistoriaContext = createContext({});

// Defining the VistoriaProvider component
function VistoriaProvider({ children }: { children: any }) {

    // Using a state variable for VistoriaID
    const [VistoriaID, setVistoriaId] = useState();

    // Rendering the VistoriaProvider component
    return (
        // Providing the context to child components
        <VistoriaContext.Provider value={{ nome: "Teste", sobrenome: "teste2" }}>
            {children} // Rendering child components
        </VistoriaContext.Provider>
    );
}

// Exporting the VistoriaContext and VistoriaProvider
export { VistoriaContext, VistoriaProvider };