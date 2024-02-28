import styled from "styled-components"
const Container =styled.div`
   height:30px;
   background-color:teal;
   color:white;
   display:flex;
   align-items:center;
   justify-content:centers;
   fontSize:14px;
   font-Wight:500;
`



const Announcement = () => {
  return (
    <Container>
      
             Super dial! Free shipping on orders over $50
        
    </Container>
  )
}

export default Announcement