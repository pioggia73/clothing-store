import React from 'react';
import {ShopsContext} from '../context/shops';
import styled from 'styled-components';
import {setColors} from '../styles';
//import {media, setRem, setColors} from '../styles';
import Section from '../components/globals/Section';
// ********** components ********* //
import CollectionPreview from '../components/CollectionPreview';
import Title from '../components/globals/Title';

const ShopPage = ({className}) => {

   const {shopsData} = React.useContext(ShopsContext);
  
   return (
      <>
         <Section className={className}>
            <Title title='collections'/>
            <div>
            {shopsData.map(item => (
               <CollectionPreview key={item.id} {...item}/>
            ))}
            </div>
         </Section>
      </>
   )
};

export default styled(ShopPage)`










`;
