import { createGlobalStyle } from "styled-components";
import {setColors}  from '../../styles';

const Globals = createGlobalStyle`

      

   * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
   };

   body {
         font-family: 'Open Sans Condensed', sans-serif;
   }
      
   a {
         text-decoration: none;
         color: ${setColors.mainBlack};
      }
   










`;

export default Globals;