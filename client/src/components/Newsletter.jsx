import styled from 'styled-components'
import SendOutlined from '@mui/icons-material/SendOutlined'
import { mobile } from '../responsive'

const Container =styled.div`
  height:60vh;
  background-color:#fcf5f5;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
`
const Title =styled.h1`
font-size:70px;
margin:10px;
`
const InputContainer =styled.div`
    width:50%;
    height:40px;
    display:flex;
    background-color:white;
    align-items:center;
    justify-content:space-between;
    border:1px solid lightgray;
    ${mobile({width:"80%"})}
`
const Input=styled.input`
    flex:8;
    padding-left:20px;
   height:55%;
   border:none;
`
const Description =styled.div`
font-size:24px;
font-weight:300;
margin-bottom:20px;
${mobile({textAlign:"center"})}
`
const Button =styled.button`
   flex:1;
   border:none;
   background-color:teal;
   color:white;

   &:hover{
       transform:scale(1.1);
       opacity:0.9;
   }
`


const Newsletter = () => {
  return (
    <Container>
         <Title>NewsLetter</Title>
         <Description>Get timley update from your favorite products</Description>
         <InputContainer>
              <Input placeholder="Your email"/>
              <Button>
                <SendOutlined/>
              </Button>
         </InputContainer>
    </Container>
  )
}

export default Newsletter