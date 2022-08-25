import styled from "@emotion/styled";

export const StyledForm = styled.form`
  text-align: center;
`

export const StyledInputField = styled.input`
  &[type=text]{
    width: 500px;
    height: 80px;
    border: ${({theme}) => theme.bodyBorder};
    border-right: none;
    box-shadow: 4px 4px 0px #000000;
    border-radius: 37.5px 0px 0px 37.5px;
    padding-left: 50px;
    outline: none;
    text-align: left;
  }
`

export const StyledSubmitButton = styled.button`
  background: ${({theme}) => theme.form.button.background};
  border-radius: 0px 37.5px 37.5px 0px;
  border: ${({theme}) => theme.bodyBorder};
  box-shadow: 4px 4px 0px #000000;
  color: ${({theme}) => theme.form.button.color};
  cursor: pointer;
  font-size: 16px;
  width: 225px;
  height: 80px;
  text-align: center;
`