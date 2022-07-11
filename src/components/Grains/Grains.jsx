import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Products from './Products'
import { Link, useNavigate } from "react-router-dom";


const Auction = () => {
  
  const fetechURL = async () =>{
    return await axios.get('/routes').then(res => res.data)
  }
  const [Product, setProduct] = useState()
    useEffect(() => {
      
      fetechURL().then(data => setProduct(data.product))

    },[]);

  return (
    <>
    <div className="flex pb-5 justify-center">
    <Link to='/addProduct' className='px-4 py-3 text-gray-900 rounded-3xl bg-lime-400'>Add Product</Link></div>
      {Product && Product.map((product,i) => (
        <div key={i}>
        <Products products={product}/>
        </div>
      ))}
    </>
  )
}

export default Auction