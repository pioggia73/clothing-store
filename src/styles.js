import { css } from "styled-components";

export const setColors = {
         mainWhite: "#fff",
         mainBlack: "#222",
         mainGrey: "#ececec",
         lightBlue: "#6666ff",
       };

export const setRem = (number = 16) => {
  return `${number / 16}rem`;
};

export const setFlex = ({ x = "center", y = "center" } = {}) => {
  return `display:flex; align-items:${y}; justify-content:${x}`;
};

export const setTransition = ({
  property = "all",
  time = "1s",
  timing = "ease-in-out"
} = {}) => {
  return `transition:${property} ${time} ${timing}`;
};

export const setShadow = ({
  light: "box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75)",
  dark: "box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);",
  darkest: "box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);"
});

const sizes = {
  large: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

