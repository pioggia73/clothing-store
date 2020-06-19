import React from 'react';
import shopsData from '../utils/shopsData';

const ShopsContext = React.createContext();

function ShopsProvider({ children }) {

      return   <ShopsContext.Provider value={{ shopsData }}>
                  {children}
               </ShopsContext.Provider>
};

export { ShopsContext, ShopsProvider };