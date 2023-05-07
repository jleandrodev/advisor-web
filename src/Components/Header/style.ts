import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 0.6rem;
  background: linear-gradient(90deg, rgba(88,139,255,1) 27%, rgba(128,0,219,1) 87%);
  margin: 0.5rem;
  border-radius: 8px;

  .userMenu{
    display: flex;
    align-items: center;
    gap: 1rem;

    img{
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }
    button {
      
      font-size: 12px;
      text-transform: uppercase;
      font-weight: 700;
      border-radius: 5px;
      width: 40px;
      height: 40px;
      transition: 0.3s;

    }
  }
`

export const HeaderForm = styled.form`
  display: inline-flex;
  gap: 1rem;
  align-items: center;
  padding: 0 1rem;
  height: 48px;
  background: ${({theme}) => theme.colors.white20};
  border-radius: 8px;

  input{
    font-family: 'Inter', sans-serif;
    background-color: transparent;
    font-size: 16px;
    border: none;
    outline: none;
    font-weight: 700;
    color: ${({theme}) => theme.colors.white};
    width: 100%;
    max-width: 373px;

    &::placeholder {
      color: ${({theme}) => theme.colors.white};
      opacity: 0.7;
    }
  }


`