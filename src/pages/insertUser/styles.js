import styled from 'styled-components'

export const Container = styled.div`
justify-content: center;
flex-direction: column;
align-items: center;
display: flex;
height: 100vh;
width: auto;

& > .token {
  position: absolute;
  top: 5px;
  left: 5px;
  padding: 8px 0;
  width: 100px;
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  cursor: pointer;
}
`

export const Form = styled.div`
justify-content: center;
flex-direction: column;
align-items: center;
background: #191919;
display: flex;
height: 75%;
width: 60%;
gap: 25px;
position: relative;

@media (max-width: 820px) {
  width: 90%;
 }

& > section {
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  width: 100%;
  gap: 25px;
}

& > section > label {
  color: ${({theme}) => theme.colors.secondaryText};
  width: 50%;
}

`

export const TextArea = styled.textarea`
color: ${({theme}) => theme.colors.secondaryText};
background: #272626;
padding: 5px 10px;
height: 150px;
outline: none;
border: none;
width: 75%;

&::-webkit-scrollbar {
  display: none;
}

`

export const Logo = styled.div`
background-image: url("../../../public/images/BonfireLogo.svg");
background-repeat: no-repeat;
background-position: center;
background-color: #131313;
border-radius: 50%;
height: 100px;
width: 100px;
`