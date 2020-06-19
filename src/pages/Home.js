import React from 'react';
import {LinksContext} from '../context/links';
import styled from 'styled-components';
import {setRem, media} from '../styles';
// ********** components ********** //
import Section from '../components/globals/Section';
import SingleLink from '../components/SingleLink';

const Home = ({className}) => {
   
   const {linksData} = React.useContext(LinksContext);
 
   return (
      <>
      <Section className = {className}>
         <div className='single-link-container'>
            {linksData.map(item => <SingleLink key={item.id} {...item}/>)}
         </div>
      </Section>
      </>
   )
};

export default styled(Home)`
  
  .single-link-container {
      width: 90%;
      margin: 0 auto;
      display: grid;
      grid-row-gap: ${setRem(20)};
     
      ${media.tablet`

         display: grid;
         grid-template-columns: repeat(3, 1fr);
         grid-gap: ${setRem(20)};
      `}
  } 
`;