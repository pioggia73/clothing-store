import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {setColors, setRem, setTransition} from '../styles';

const SingleLink = ({className, title, url, path, size}) => {
   
   return (
      <article className={className}>

         <div className= {`${size} single-link`}>
            <img src={url} alt='link'/>
            <div className='link-text'>
            <Link to={path}>
            <h4>{title}</h4>
            <span>shop now</span>
            </Link>
            </div>
         </div>   
      </article>
   )
}

export default styled(SingleLink)`

   .single-link {
      width: 100%;
      max-height: ${setRem(240)};
      position: relative;
      overflow: hidden;
     
         &:hover img {
            scale: 1.1;
         }

         &:hover .link-text {
            opacity: .7;
         }

         img {
            width: 100%;
            ${setTransition()};
         }

         
   }   

      .link-text {
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         background: ${setColors.mainWhite};
         opacity: .4;
         padding: ${setRem(16)} ${setRem(32)};
         text-align: center;
         ${setTransition()};
         width: 50%;
        
         h4 {
            text-transform: uppercase;
            font-size: ${setRem(32)};
         }

         span {
            font-size: ${setRem(20)};
            font-weight: bold;
         }
      }
`;

