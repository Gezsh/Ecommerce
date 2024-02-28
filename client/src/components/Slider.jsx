import styled from "styled-components"
import ArrowLeftOutlined from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlined from '@mui/icons-material/ArrowRightOutlined';
import {sliderItems} from '../data'
import { useState } from "react";
import { mobile } from "../responsive";
//import MenuItem from '@mui/material/MenuItem'
const Container=styled.div`
width:100%;
height:100vh;
display:flex;
position:relative;
overflow:hidden;
${mobile({display:"none"})};
`
const Arrow=styled.div`
width:50px;
height:50px;
background-color: #fff7f7;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
margin:auto;
cursor:pointer;
opacity:0.5;
z-index:2;
left:${props=>props.direction==="left" && "10px"};
right:${props=>props.direction==="right" && "10px"};
`

const Wrapper=styled.div`
display:flex;
justify-content:center;
 height:100%;
 transition:all 1.5s ease;
 transform:translateX(${props=>props.slideIndex * (-100)}vw);

`
const Slide=styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  align-items:center;
  background-color:#${props=>props.bg}
  
`
const ImgContainer=styled.div`
flex:1;
height:100%;
margin-left:10px;
`
const InfoContainer=styled.div`
flex:1`

const Image=styled.img`
background-color:transparent;
margin-left:20px;
height:80%;
`
const Title=styled.h1`
font-size:70px;

`
const Desc=styled.p`
margin:50px 0px;
font-size:20px;
font-weight:500;
letter-spacing:3px;
`
const Button=styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
cursor:pointer;
`

const Slider = () => {
    const [slideIndex,setSlideIndex]=useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
          setSlideIndex((slideIndex) => (slideIndex > 0 ? slideIndex - 1 : 2));
        } else {
          setSlideIndex((slideIndex) => (slideIndex < 2 ? slideIndex + 1 : 0));
        }
      }
      
    console.log(sliderItems)
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
              <ArrowLeftOutlined />   
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item)=>(
                <Slide bg={item.bg} key={item.id}>
                <ImgContainer>
                    <Image src={item.img}/>
                </ImgContainer>
                <InfoContainer>
                     <Title>{item.title}</Title>
                     <Desc>{item.desc}</Desc>
                     <Button>SHOP NOW</Button>
                 </InfoContainer>   
 
             </Slide>
            ))}
               
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
              <ArrowRightOutlined />   
        </Arrow>
    </Container>
  )
}

export default Slider