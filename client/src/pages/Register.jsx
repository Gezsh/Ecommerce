import styled from 'styled-components'
import { mobile } from '../responsive'
import { useState } from 'react'

const Container= styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),
     url(https://t3.ftcdn.net/jpg/03/55/60/70/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg) center;
     background-repeat: cover;
`
const Wrapper= styled.div`
   padding :20px;
   width:40%;
    background-color:white;
    ${mobile({width:"75%"})}
`
const Title= styled.h1`
    font-size:24px;
    font-weight:300;
`
const Agreement= styled.span`
   font-size:12px;
   margin:20px 0px;
`
const Form= styled.form`
   display:flex;
   flex-wrap:wrap;
   
`
const Button= styled.button`
   width:40%;
   border:none;
   padding:15px 20px;
   background-color:teal;
   color:white;
   cursor:pointer;
`
const Input= styled.input`
   flex:1;
   min-width:40%;
   margin:20px 10px 0px 0px;
   padding:10px;
`


const Register = () => {
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [userName,setUserName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')

    const handleClick=(e)=>{
          e.preventDefault()
        
    }

  return (
    <Container>
          <Wrapper>
              <Title>CREATE AN ACCOUNT</Title>
              <Form>
                     <Input
                      placeholder=" first name"
                        tyepe="text"
                        value={firstName}
                        onChange={(e)=>setFirstName(e.target.value)}
                     />
                     <Input 
                     placeholder="last name"
                     type="text"
                     value={lastName}
                     onChange={(e)=>setLastName(e.target.value)}

                     />
                     <Input 
                     placeholder="username"
                     type="text"
                     value={userName}
                     onChange={(e)=>setUserName(e.target.value)}
                     />
                     <Input 
                     placeholder="email"
                     type="text"
                     value={email}
                     onChange={(e)=>setEmail(e.target.value)}
                     />
                     <Input 
                     placeholder="password"
                     type="text"
                     value={password}
                     onChange={(e)=>setPassword(e.target.value)}
                     />
                     <Input 
                     placeholder="confirm password"
                     type="text"
                     value={confirmPassword}
                     onChange={(e)=>setConfirmPassword(e.target.value)}
                     />
                     <Agreement>
                        By creating an account,I consent to the processing of my personal
                        data in accourdance with the <b>PRIVACY POLICY</b>
                     </Agreement>
                     <Button onClick={handleClick}>CREATE</Button>
              </Form>
          </Wrapper>
    </Container>
  )
}

export default Register