import React from 'react';
import {LinksContext} from '../context/links';
import styled from 'styled-components';
import {setRem} from '../styles';
// ********** components ********** //
import Navbar from '../components/Navbar'
import Section from '../components/globals/Section';
import SingleLink from '../components/SingleLink';

const Home = ({className}) => {

   const {linksData} = React.useContext(LinksContext);
   console.log(linksData)
 
   return (
      <>
      <Navbar />
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
      grid-template-rows: repeat(5, ${setRem(250)});
      grid-row-gap: ${setRem(20)};
  }
`;