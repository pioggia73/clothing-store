import React from 'react';
import {Link} from 'react-router-dom';
//import {FaShoppingBag} from 'react-icons/fa';
import logo from '../images/logo.png';
import {setRem, setColors} from '../styles';
import styled from 'styled-components';

const Navbar = ({className}) => {
   return (
     <nav className={className}>
       <div className="nav-container">
         <img src={logo} alt="company-logo" />
            <div>
               <ul className="links">
                  <Link to='/' className='link'>shop</Link>
                  <Link to='/' className='link'>contact</Link>
                  <Link to='/' className='link'>sign in</Link> 
               </ul>
            </div>
         </div>
     </nav>
   );
}

export default styled(Navbar)`
  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${setRem(16)} ${setRem(26)};

    img {
      width: ${setRem(40)};
      height: 100%;
    }
  }

  
    .links {
      display: flex;
      font-size: ${setRem(20)};
      text-transform: uppercase;   
    }

    .link {
      margin-left: ${setRem(30)};
      color: ${setColors.mainBlack};
    }
  

 
`;