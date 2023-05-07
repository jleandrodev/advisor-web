import styled from "styled-components";

export const SidebarContainer = styled.div`
font-family: Inter, sans-serif;
  background: #252627;
  width: 370px;
  color: #fff;
  max-width: 250px;
  height: 100%;
  box-shadow: 5px 0 15px rgba(0, 0, 0, 0.5);

  a{
    text-decoration: none;
    color: ${({theme}) => theme.colors.white};
    opacity: 0.8;
    &:hover{
      opacity: 1;
    }
  }
`

export const SidebarHeader = styled.header`
  display: flex;
  border-bottom: 2px solid ${({theme}) => theme.colors.white20};
  padding: 20px;
  
  
`


export const SidebarLinks = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  opacity: 0.8;
  transition: 0.3s;

  &:hover{
    opacity: 1;
    background: ${({theme}) => theme.colors.white20};
  }
`