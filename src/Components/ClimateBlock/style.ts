import styled from "styled-components";

export const ClimateContainer = styled.section`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.colors.backgroundGray};
  border-radius: 0.5rem;
  gap: .5rem;
`

export const ClimateCardContainer = styled.div`
  display: flex;
  width: 20%;
  min-width: 150px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0.5rem;
  background: #fff;
  border-radius: 0.5rem;

  img {
    width: 50px;
    height: 50px;
    margin-bottom: 1rem;
  }

  span{
    text-align: left;
    font-family: Inter, sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: #333;
  }

  h5{
    margin-bottom: 0.5rem;
  }

  div {
    text-align: left;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 1rem;
  }

`