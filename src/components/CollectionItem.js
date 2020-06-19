import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {setRem, setColors, setTransition} from '../styles';

export default function CollectionItem ({ id, name, price, imageUrl})  {

   return (
      <CollectionItemWrapper>
            <div className='collection-item'>
               
                  <div className='image'
                        style={{backgroundImage: `url(${imageUrl})`}}
                  />
                    
                  <div className='collection-footer'>
                     <span className='name'>{name}</span>
                     <span className='price'>${price}</span>
                  </div>
            </div>
      </CollectionItemWrapper>
   )
}

const CollectionItemWrapper = styled.div`

   .collection-item{
      display: flex;
      flex-direction: column;
      height: ${setRem(350)};
      }

   .image {
      width: 100%;
      height: 90%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      margin: ${setRem(20)} 0 ${setRem(5)} 0;

   }

   .collection-footer {
      display: flex;
      height: 10%;
      justify-content: space-between;
      font-size: ${setRem(18)};
   }

  



`;
