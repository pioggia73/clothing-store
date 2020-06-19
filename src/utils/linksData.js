import shirt from '../images/shirts.jpg'
import pants from "../images/pants.jpg";
import hats from "../images/hats.jpg";
import women from "../images/women.jpg";
import men from "../images/men.jpg";
import children from "../images/children.jpg"
//import { Children } from 'react';


const linksData = [
  { 
    id: 1, 
    title: "shirts", 
    url: shirt, 
    path: '/shirts' },
  { 
    id: 2, 
    title: "pants", 
    url: pants, 
    path: '/pants' },
  { 
    id: 3, 
    title: "hats", 
    url: hats, 
    path: '/hats' },
  { 
    id: 4, 
    title: "women", 
    url: women, 
    path: '/women'
     },
  { 
    id: 5, 
    title: "men", 
    url: men, 
    path: 'men/'
     }, 
    {
      id: 6,
      title: 'children',
      url: children,
      path: '/children'
    }
];



export default linksData;