import React from 'react';
import styled from 'styled-components';
import {setRem, setColors, media} from '../styles';
// *********** components **********//
import CollectionItem from './CollectionItem';

export default function CollectionPreview ({ title, items}) {
   return (
      <CollectionPreviewWrapper>
         <div className= 'collection-preview'>
            <h2>{title}</h2>
            <div className='preview'>
               {items.filter((item, index) => index < 4).map(({id, ...item}) => (
                  <CollectionItem key={id} {...item} />
                  ))}
            </div>
         </div>
      </CollectionPreviewWrapper>
   )
}

const CollectionPreviewWrapper = styled.div`

   .collection-preview {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
   }

   .preview {
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
     grid-gap: ${setRem(32)}; 
     margin-bottom: ${setRem(32)};
   }

`;
