import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Add from '@mui/icons-material/Add'
import Remove from '@mui/icons-material/Remove'
import { mobile } from '../responsive'
import {useSelector} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { useState ,useEffect} from 'react'
import { userRequest } from '../requestMethods'
// import {useHistory} from 'react'
const REACT_APP_STRIPE="pk_test_51O511ULhSR2kwORG5dP7VnHdcEG1u817iqgRjgyppCMMcSjvIRakFINSgk9P1eLQatUy1BMMfv5J0rSLNMdnqAmV00D4eAHoir"

const KEY=REACT_APP_STRIPE;

console.log(KEY)
const Container=styled.div``
const Wrapper=styled.div`
  padding : 20px;
  ${mobile({padding:"10px"})}
`

const Title=styled.h1`
    font-weight : 300;
    text-align:center;
`

const Top=styled.div`
    display:flex;
    align-items:center;
    padding :20px;
    justify-content:space-between;
`

const Bottom=styled.div`
   display:flex;
   justify-content:space-between;
   ${mobile({flexDirection:"column"})}
`
const Info=styled.div`
   flex:3;
`

const TopButton=styled.button`
     padding :10px;
     font-weight:600;
     cursor:pointer;
     border:${props=>props.type==="Filled" && "none"};
     background-color:${props=>props.type==="Filled"  ? "black" : "transparent"};
     color:${props=>props.type==="Filled" && "white"};
`

const TopTexts=styled.div`
   ${mobile({display:"none"})}
`

const TopText=styled.span`
   text-decoration:underline;
   cursor:pointer;
   margin:0px 10px;
`

const Product=styled.div`
  display:flex;
  justify-content:space-between;
  ${mobile({flexDirection:"column"})}
`

const ProductDetail=styled.div` 
     flex:2;
    display:flex;
`

const Image=styled.img`
  width:200px;
  height:100%;
`

const Details=styled.div`
   padding:20px;
   display:flex;
   flex-direction:column;
   justify-content:space-around;
   
`

const ProductName=styled.span``
const ProductId=styled.span``
const ProductColor=styled.div`
   width:20px;
   height:20px;
   border-radius:50%;
   background-color:${props=>props.color};
`

const ProductSize=styled.span``
const PriceDetail=styled.div`
   flex:1;
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
`
const ProductAmountContainer=styled.div`
   display:flex;
   align-items:center;
   margin-bottom:2px;
`
const ProductAmount=styled.div`
  font-size:24px;
  margin:5px;
  ${mobile({margin:"5px 15px"})}
`

const ProductPrice=styled.div`
   font-size:30px;
   font-weight:200;
   ${mobile({marginBottom:"20px"})}
`

const Hr=styled.hr`
   background-color:#eee;
   border:none;
   height:1px;
`

const Summary=styled.div`
   flex:1;
   border:0.5px solid lightgray;
   border-radius:10px;
   padding:20px;
   height:50vh;
`
const SummaryTitle=styled.h1`
  font-weight:200;
`
const SummaryItem=styled.div`
   margin:30px 0px;
   display:flex;
   justify-content:space-between;
   
`

const SummaryItemText=styled.span`
    font-weight:${props=>props.type==="total" && "600"};
    font-size:${props=>props.type==="total" && "24px"};
`
const SummaryItemPrice=styled.span``
const Button=styled.button`
  width:100%;
  padding:10px;
  background-color:black;
  color:white;
 
`

const Cart = () => {

   const cart =useSelector(state=>state.cart)
   const [stripeToken,setStripeToken]=useState(null)
   // const history =useHistory()
   const onToken=(token)=>{
      setStripeToken(token);
   }
     console.log(stripeToken)
   
// useEffect(()=>{
//    const makeRequest=async()=>{
//       try{
//          const res=await userRequest("/checkout/payment",{
//             tokenId:stripeToken,
//             amount:cart.total*100,
//             }) 
//          history.push("/success",{data:res.data})
//       }catch(error){
//          console.log(error)
//       }
//    }
//    makeRequest();
// },[stripeToken,cart.total,history])

  return (
    <Container>
        <Announcement/>
         <Navbar/>
             <Wrapper>
                   <Title>YOUR BAG</Title>
                   <Top>

                    <TopButton>CONTINUE SHOPPING</TopButton>
                        <TopTexts>
                              <TopText>Shopping Bag(2)</TopText>
                              <TopText>Your Wishlist(0)</TopText>
                        </TopTexts>
                    <TopButton type="Filled">CHECKOUT NOW</TopButton>
                   </Top>
                   <Bottom>

                       <Info>
                            {cart.products.map(product=>(
                              <Product key={product._id}>
                                   <ProductDetail>
                                          <Image src={product.img}/>
                                          <Details>
                                                 <ProductName><b>Product:</b>{product.title}</ProductName>
                                                 <ProductId><b>ID:</b>{product._id}</ProductId>
                                                 <ProductColor color={product.color}/>
                                                 <ProductSize><b>Size:</b> {product.size}</ProductSize>
                                          </Details>
                                   </ProductDetail>
                                   <PriceDetail>
                                        <ProductAmountContainer>
                                              <Add/>
                                              <ProductAmount>{product.quantity}</ProductAmount>
                                              <Remove/>
                                        </ProductAmountContainer>
                                        <ProductPrice>
                                          $ {product.price*product.quantity}
                                        </ProductPrice>
                                   </PriceDetail>
                            </Product> 
                            ))}

                            <Hr/>
                            
                       </Info>
                       <Summary>
                            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                            <SummaryItem>
                                   <SummaryItemText>Subtotal</SummaryItemText>
                                   <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                   <SummaryItemText>Estimated Shipping</SummaryItemText>
                                   <SummaryItemPrice>$ 5.9</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                   <SummaryItemText>Shipping Discount</SummaryItemText>
                                   <SummaryItemPrice>$ -5.9</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                   <SummaryItemText type="total">Total</SummaryItemText>
                                   <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                            </SummaryItem>

                            <StripeCheckout
                              name="Lama Shop"
                              image="https://avatars.githubusercontent.com/u/1486366?v=4"
                              billingAddress
                              shippingAddress
                              description={`your total is $ ${cart.total}`}
                              amount={cart.total*100}
                              token={onToken}
                              stripeKey={KEY}
                            >
                                 <Button>CHECKOUT NOW</Button>
                            </StripeCheckout>

                               
                           
                            
                       </Summary>
                   </Bottom>
             </Wrapper>
         <Footer/>

    </Container>
  )
}

export default Cart