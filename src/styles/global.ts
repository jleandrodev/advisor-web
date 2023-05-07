import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    background: #EBECF0;
  }

  button {
    cursor: pointer;
    border: none;
    background: transparent;
  }

`

export const ColorsTheme = {
  colors: {
    gold: '#bf9368',
    white: '#ffffff',
    graphite: '#333',
    white50: 'rgba(255,255,255, .5)',
    white20: 'rgba(255,255,255, .2)',
    red: '#f55859',
    blue: '#0f81ec',
    green: '#00CC33',
    backgroundGray: '#EBECF0'



  }
  

}


