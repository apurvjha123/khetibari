import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Products from '../template/Products'
import { Link } from "react-router-dom";

const fetechURL = async () =>{
  return await axios.get('http://localhost:5000/routes').then(res => res.data)
}
const Auction = () => {
  const [Product, setProduct] = useState()
    useEffect(() => {
      
      fetechURL().then(data => setProduct(data.product))

    },[]);
    console.log(Product)

  return (
    <>
    <Link to='/addProduct' className='underline'>AddProduct</Link>
      {Product && Product.map((product,i) => (
        <div key={i}>
        <Products products={product}/>
        </div>
      ))}
    </>
  )
}

export default Auction