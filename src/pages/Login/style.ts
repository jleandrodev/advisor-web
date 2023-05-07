import styled from "styled-components";
import image from '../../assets/login-left.jpg'

export const LoginImage = styled.div`
  flex: 1;

  & {
    background: url(${image}) no-repeat center;
    background-size: cover;
  }
`

export const LoginContent = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1{
    font-size: 28px;
    color: #252627;
  }

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h2{
      margin-bottom: 24px;
      color: #252627;
    }

    input{
      background: #252627;
      font-family: Inter, sans-serif;
      border-radius: 10px;
      border: 2px solid #252627;
      padding: 1rem;
      font-size: 1rem;
      width: 100%;
      color: ${({theme}) => theme.colors.white};

      & + input {
        margin-top: 0.5rem;
      }
    }
    button{
      background: #8000DB;
      color: #fff;
      font-family: Inter, sans-serif;
      font-size: 18px;
      border-radius: 10px;
      border: none;
      padding: 0 1rem;
      width: 100%;
      height: 56px;
      margin-top: 1rem;
      transition: 0.3s;

      &:hover{
        opacity: 0.7;
      }

    }
    a {
      color: #252627;
      text-decoration: none;
      font-weight: 700;
      display: block;
      margin-top: 22px;
      font-family: Inter, sans-serif;
    }
  }
  

`