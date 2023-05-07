import styled from "styled-components";
import BaseTitle from "./components/typography";

export const Title = styled(BaseTitle)`
  font-family: Inter, sans-serif;
  color: ${({theme}) => theme.colors.graphite};

`