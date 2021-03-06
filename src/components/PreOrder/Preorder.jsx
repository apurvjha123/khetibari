import React, {useState, useEffect} from 'react'
import Orders from './Orders'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Preorder = () => {

    const fetechURL = async () =>{
        return await axios.get('https://khetibari.herokuapp.com/preorders').then(res => res.data)
      }
      const [orders, setorders] = useState()
        useEffect(() => {
          
          fetechURL().then(data => setorders(data.preorder))
    
        },[]);
  return (
    <>
    <div className="flex pb-5 justify-center">
    <Link to='/addOrder' className='px-4 py-3 text-gray-900 rounded-3xl bg-lime-400'>Add Order</Link></div>
      {orders && orders.map((order,i) => (
        <div key={i}>
        <Orders orders={order}/>
        </div>
      ))}
    </>
  )
}

export default Preorder