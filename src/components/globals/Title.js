import React from "react";
import styled from "styled-components";
import { setRem } from "../../styles";


const Title = ({ className, title, center }) => {
   return <h3 className={className}>{title}</h3>;
};

export default styled(Title)`
  font-size: ${setRem(36)};
  text-transform: capitalize;
  margin-bottom: ${setRem(10)};
  text-align: ${props => (props.center ? "center" : "left")};
`;


export const SmallTitle = styled(Title)`
  font-size: ${setRem(25)};
  text-transform: uppercase;
  margin-bottom: ${setRem(16)};





`