import styled from 'styled-components'

export const Container = styled.div`
justify-content: center;
flex-direction: column;
align-items: center;
display: flex;
height: auto;
width: auto;



& > div {
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;

  @media (max-width: 820px) {
     flex-direction: column-reverse;
    
   }
}

`
export const Users = styled.div`
box-sizing: border-box;
flex-direction: column;
background: #191919;
overflow-y: auto;
padding: 30px;
display: flex;
height: 75vh;
width: 30%;

& > label {
  color: ${({theme}) => theme.colors.secondaryText};
  width: 100%;
  margin-bottom: 25px;
}


@media (max-width: 820px) {
  width: 100%;
  
 }

& > div {
  border: 1px solid black;
  height: 100%;
  width: 100%;
  
}

& > p {
  width: 100%;
  border-bottom: 1px solid #000;
  padding: 10px 0;
}
`
export const Form = styled.div`
justify-content: center;
flex-direction: column;
align-items: center;
background: #191919;
display: flex;
height: 75vh;
width: 40%;
gap: 25px;

@media (max-width: 820px) {
  width: 100%;
  height: 50vh;
 }
}

& > section {
  flex-direction: column;
  align-items: center;
  display: flex;
  gap: 25px;
  width: 100%;
  height: 100px;
  
  
}
& > section > label {
  color: ${({theme}) => theme.colors.secondaryText};
  width: 80%;
}

`

export const Input = styled.input`
 text-overflow: ellipsis;
 background: #272626;
 padding-left: 10px;
 box-sizing: border-box;
 outline: none;
 border: none;
width: 80%;
height: 50px;
 color: #fff;
 margin: 0;
 flex: 1;

   &:focus {
     border-color: #4caf50;
   }
`

export const Logo = styled.div`
background-image: url("../../../public/images/BonfireLogo.svg");
background-position: center;
background-repeat: no-repeat;
background-color: #131313;
border-radius: 50%;
width: 100px;
height: 100px;
`