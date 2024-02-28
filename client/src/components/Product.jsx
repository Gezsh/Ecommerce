import Search from '@mui/icons-material/Search'
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined'
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Container=styled.div`
       display:flex;
       flex:1;
       margin:5px;
       min-width:280px;
      height:350px;
      align-items:center;
      position:relative;
      justify-content:center;
      background-color:#f5fbfd;
`
const Circle=styled.div`
   width:200px;
   height:200px;
   border-radius:50%;
   position:absolute;
   background-color:white;
`
const Image=styled.img`
width:100%;
height:85%;
z-index:2;

`
const Info=styled.div`
opacity:0;
width:100%;
height:100%;
position:absolute;
background-color:rgba(0,0,0,0.2);
z-index:3;
display:flex;
align-items:center;
justify-content:center;
transition:all 0.5s ease;
cursor:pointer;
 &:hover{
    opacity:1;
 }
`
const Icon=styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px;
    transition:all 0.5s ease;

    &:hover{
        background-color:#e9f5f5;
        transform:scale(1.1);
    }
`

const Product = ({item}) => {
  return (
    <Container>
         <Circle/>
         <Image src={item.img}/>
         <Info>
               <Icon>
                   <ShoppingCartOutlined/>
               </Icon>
               <Icon>
                  <Link to={`/product/${item._id}`}> <Search/> </Link> 
               </Icon>
               <Icon>
                   <FavoriteBorderOutlined/>
               </Icon>
         </Info>
    </Container>
  )
}

export default Product