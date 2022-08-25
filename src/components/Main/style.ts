import styled from "@emotion/styled";

export const StyledMain = styled.main`
  background: ${({theme}) => theme.main.background};
  border: ${({theme}) => theme.bodyBorder};
  border-radius: 64px 64px 0px 0px;
  margin-top: -32px;
  padding: 85px 10px;
  display: flex;
  justify-content: center;
`