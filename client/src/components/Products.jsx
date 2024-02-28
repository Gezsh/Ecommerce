import styled from 'styled-components'
// import {popularProducts} from '../data'
import Product from './Product'
import {useEffect,useState} from 'react'
import axios from 'axios'
const Container=styled.div`
    padding=20px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`

const Products = ({cat,filters,sort}) => {
  
  const [products,setProducts]=useState([])
   const [filteredProducts,setFilteredProducts]=useState([])

  useEffect(()=>{
    axios.get(cat ?`http://localhost:3000/api/product?category=${cat} ` : "http://localhost:3000/api/product").then(({data})=>{setProducts(data)
  console.log(data)
  }).catch((err)=>console.log(err))
          
      
  //  const getProducts=async ()=>{
    
  //   try{
  //         const res=await axios.get(cat ?`http://localhost:3000/api/product?category=${cat} ` : "http://localhost:3000/api/product")
  //         setProducts(res.data)
  //         console.log(products)
          
  //   }catch(err){
  //     console.log(err).catch()
  //   }
  
  //  }
  //    getProducts();

  },[cat])

  useEffect(() => {
    
    if (cat) {
      
      const newFilteredProducts = products.filter((item) =>
        Object.entries(filters).some(([key, value]) =>
          item[key].includes(value)
        )
      );
  
      // Log the newFilteredProducts
  
      // Set the state with the newFilteredProducts
      setFilteredProducts(newFilteredProducts);
    }
  }, [products, cat, filters]);
  
useEffect(()=>{
        if(sort==="newest"){
              setFilteredProducts(prev=>
                  [...prev].sort((a,b)=>a.createdAt - b.createdAt))
        }else if((sort==="asc")){
          setFilteredProducts((prev)=>
          [...prev].sort((a,b)=>a.price - b.price ))
        }else {
              setFilteredProducts((prev)=>[...prev].sort((a,b)=>b.price -a.price))
        }
},[sort])
     
    
  return (
    <Container>
        {cat ? filteredProducts.map((item)=>(
             <Product item={item} key={item.id}/>
         )) : products.map((item)=>(
          <Product item={item} key={item.id}/>
      ))}
    </Container>
  )
}


export default Products