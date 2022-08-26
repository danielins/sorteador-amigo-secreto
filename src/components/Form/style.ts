import styled from "@emotion/styled";

export const StyledWrapper = styled.div`
  max-width: 750px;
  text-align: center;
`

export const StyledForm = styled.form`
  margin-bottom: 80px;
`

export const Button = styled.button`
  border: ${({theme}) => theme.bodyBorder};
  border-radius: 37.5px;
  box-shadow: 4px 4px 0px #000000;
  cursor: pointer;
  height: 80px;
  padding: 0 40px;
  text-align: center; 
`

export const StyledStartButton = styled(Button)`
  background: ${({theme}) => theme.general.button.background};
  color: ${({theme}) => theme.general.button.color};
  font-size: 20px;
  font-weight: 600;
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

export const StyledSubmitButton = styled(Button)`
  background: ${({theme}) => theme.form.button.background};
  border-radius: 0px 37.5px 37.5px 0px;
  color: ${({theme}) => theme.form.button.color};
  font-size: 16px;
  width: 225px;
  height: 80px;
`