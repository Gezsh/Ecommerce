import styled from 'styled-components'
import Search from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from '../responsive'
//import {addProduct} from '../redux/cartRedux'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

const Container=styled.div`
   height:60px;
   ${mobile({height:"50px"})}
`
const Wrapper=styled.div`
   
   padding: 10px 20px;
   display:flex;
   justify-content:space-between;
   align-items:center;
   ${mobile({padding:"10px 0px"})}
`
 const Left=styled.div`
 display:flex;
 align-items:center;
 flex:1;
 `   
 const Center=styled.div`
 text-align:center;
 flex:1;
 `   
 
 const Right=styled.div`
 display:flex;
 justify-content:flex-end;
 align-items:center;
flex:1;
${mobile({flex:2,justifyContent:"center"})}
 `   
    
 const Language=styled.span`
 font-size:14px;
 cursor:pointer;
 ${mobile({display:"none"})}
 `
 const SearchContainer =styled.div`
 display:flex;
 align-items:center;
 border:0.5px solid lightgray;
 margin-left:25px;
 padding:5px;
 
 `
const Input=styled.input`
    border:none;
    ${mobile({width:"50px"})}

`
const Logo=styled.h1`
font-weight:bold;
${mobile({fontSize:"24px"})}
`
const MenuItem=styled.div`
   font-size:14px;
   cursor:pointer;
   margin-left:25px;
   ${mobile({fontSize:"12px",marginLeft:"10px"})}

`

const Navbar = () => {

   const quantity=useSelector(state=>state.cart.quantity)
   
   

  return (
    <Container>
       <Wrapper>
             <Left>
                <Language>En</Language>
                <SearchContainer>
                    <Input placeholder="Search"/>
                   <Search style={{color:"gray",fontSize:16}}/>
                </SearchContainer>
             </Left>
             <Center><Logo>LAMA.</Logo></Center>
             <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                <Link to ={'/cart'}>
                     <Badge badgeContent={quantity} color="primary">
                         <ShoppingCartOutlined/>
                     </Badge>
                </Link>    
                </MenuItem>

             </Right>
       </Wrapper>
    </Container>
  )
}

export default Navbar






