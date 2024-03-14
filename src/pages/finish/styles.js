import styled from 'styled-components'

export const Container = styled.div`
justify-content: center;
flex-direction: column;
align-items: center;
height: auto;
display: flex;
width: auto;
`

export const Box = styled.div`
justify-content: center;
box-sizing: border-box;
flex-direction: column;
align-items: center;
background: #191919;
padding: 40px 50px;
display: flex;
height: 75%;
width: 60%;

gap: 25px;

@media (max-width: 820px) {
  width: 90%;
 }

& > h1 {
  font-size: 2rem;
  color: #0499C8;
}

`
export const Users = styled.div`
flex-direction: column;
border: 1px solid black;
min-height: 60vh;
padding: 10px;
display: flex;
height: 70%;
width: 100%;
gap: 10px;

& > p {
  border-bottom: 1px solid #000;
  width: 100%;
  padding: 10px 0;
  
}
`