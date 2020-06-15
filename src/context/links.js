import React from 'react';
import linksData from '../utils/linksData';


const LinksContext = React.createContext();

function LinksProvider ({children}) {

   

   return <LinksContext.Provider value = {{linksData}}>
   
               {children}

         </LinksContext.Provider>


}

export {LinksContext, LinksProvider};