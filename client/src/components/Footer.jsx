import styled from 'styled-components'
import Facebook from '@mui/icons-material/Facebook'
import Instagram from '@mui/icons-material/Instagram'
import Twitter from '@mui/icons-material/Twitter'
import Pinterest from '@mui/icons-material/Pinterest'
import LocationOn from '@mui/icons-material/LocationOn'
import Phone from '@mui/icons-material/Phone'
import Email from '@mui/icons-material/Email'
import { mobile } from '../responsive'
const Container=styled.div`
   display: flex;
   ${mobile({flexDirection:"column"})}
   
`
const Left=styled.div`
   flex:1;
   display:flex;
   flex-direction: column;
   padding : 20px;
`
const Logo=styled.h1`
    
`
const Desc=styled.p`
    margin:20px 0px;
`
const SocialContainers=styled.div`
    display:flex;

`
const SocialIcons=styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
    background-color:#${props=>props.color}
`

const Center=styled.div`
   flex:1;
   padding:20px;
   ${mobile({display:"none"})}
`
const Title=styled.h3`
  margin-bottom:30px;

`

const List=styled.ul`
   margin:0;
   padding:0;
   list-style:none;
   display:flex;
   flex-wrap:wrap;
`
const ListItem=styled.li`
   width:50%;
   margin-bottom:10px;
`

const Right=styled.div`
   flex:1;
   padding:20px;
   display:flex;
   flex-direction:column;
   ${mobile({backgroundColor:"#fff8f8"})}
   
`
const ContactItem=styled.div`
    display:flex;
    margin-bottom:20px;
    align-items:center;
    

`

const Footer = () => {
  return (
    <Container>
         <Left>
              <Logo>LAMA.</Logo>
              <Desc>There are many varations of passanges of lorem Ipsum available,but 
                the majority have suffered alteration in some form , by injected homour,or randomissed words which ,,,,
              </Desc>
              <SocialContainers>
                     <SocialIcons color="3B5999">
                          <Facebook/>
                     </SocialIcons>
                     <SocialIcons color="E4405F">
                          <Instagram/>
                     </SocialIcons>
                     <SocialIcons color="55ACEE">
                          <Twitter/>
                     </SocialIcons>
                     <SocialIcons color="E60023">
                          <Pinterest/>
                     </SocialIcons>
              </SocialContainers>
         </Left>
         <Center>
              <Title>useful links</Title>
              <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Term</ListItem>
              </List>
         </Center>
         <Right>
                <Title>Contact</Title>
                <ContactItem>
                  <LocationOn/>  Addis Ababa, Ethiopia
                </ContactItem>
                <ContactItem>
              <Phone/>  +251921742834
                </ContactItem>
                <ContactItem>
                <Email/>  gezsh@gmail.com
                </ContactItem>
                
         </Right>
    </Container>
  )
}

export default Footer