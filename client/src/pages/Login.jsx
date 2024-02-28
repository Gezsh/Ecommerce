import styled from 'styled-components'
import { mobile } from '../responsive'
import { useState } from 'react'
import { login } from '../redux/apiCalls'
import { useDispatch } from 'react-redux'

const Container= styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),
     url(https://t4.ftcdn.net/jpg/01/19/11/55/360_F_119115529_mEnw3lGpLdlDkfLgRcVSbFRuVl6sMDty.jpg) center;
     background-repeat: cover;
`
const Wrapper= styled.div`
   padding :20px;
   width:25%;
    background-color:white;
    ${mobile({width:"75%"})}
`
const Title= styled.h1`
    font-size:24px;
    font-weight:300;
`

const Form= styled.form`
   display:flex;
   flex-direction:column;

   
`
const Button= styled.button`
   width:40%;
   border:none;
   padding:15px 20px;
   background-color:teal;
   color:white;
   cursor:pointer;
   margin:15px 0px;
`
const Input= styled.input`
   flex:1;
   min-width:40%;
   margin:20px 10px 0px 0px;
   padding:10px;
`
const Link=styled.a`
   margin:5px 0px;
   font-size:12px;
   text-decoration:underline;
   cursor:pointer;
`

const Login = () => {
  
   const [userName,setUserName]=useState('')
   const [password,setPassword]=useState('')
   
   const dispatch=useDispatch();

  const handleClick=(e)=>{
       e.preventDefault()
      login( dispatch, {userName,password})
      
  }
  return (
    <Container>
          <Wrapper>
              <Title>SIGN IN</Title>
              <Form>
                     <Input 
                     type="text"
                     placeholder="username"
                     value={userName}
                     onChange={(e)=>setUserName(e.target.value)}

                     />
                     
                     <Input 
                     type="password"
                     placeholder="password"
                     value={password}
                     onChange={(e)=>setPassword(e.target.value)}
                     />
                     <Button onClick={handleClick}>Login</Button>
                     <Link>DO YOU REMEMBER THE PASSWORD?</Link>
                     <Link>CREATE A NEW ACCOUNT</Link>
              </Form>
          </Wrapper>
    </Container>
  )
}

export default Login