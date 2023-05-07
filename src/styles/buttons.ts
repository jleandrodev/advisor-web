import styled from "styled-components";

export const StyledIconLink = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  

  width: 35px;
  min-width: 35px;
  height: 35;
  color: ${({theme}) => theme.colors.white};
  opacity: 0.8;
  transition: 0.3s;

  &:hover{
    opacity: 1;
  }
  `