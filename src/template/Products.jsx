import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Products = (props) => {
  const history = useNavigate()
    const {_id,name , category, description, price, seller, image, Date } = props.products

    const clickHandler = async () => {
      await axios.delete(`http://localhost:5000/routes/${_id}`).then(res => res.data).then(() => {history('/auction')})
    }
    const handleClick = () => {
      history(`/product/${_id}`)
    }

  return (
    <>
    <section className="text-lime-600 body-font overflow-hidden hover:shadow-2xl border-2 border-lime-100">
  <div className="container px-5 py-24 mx-auto">
    <div className="-my-8 divide-y-2 divide-lime-100">
      <div className="py-8 flex flex-wrap md:flex-nowrap" onClick={handleClick}>
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
         <img src={image} alt={name} className="w-full rounded px-8" />
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-lime-900 title-font mb-2">
            {name}
          </h2>
          <div className="text-30 text-gray-500">Category</div>
          <div className="text-25 px-3 text-black">{category}</div>
          <p className="leading-relaxed">
            {description}
          </p>
          <div className="text-lime-500 inline-flex items-center mt-4">
          <div className="font-bold text-lg">₹ {price}</div>
          </div>
        </div>
        <div className='font-sans'>
        ~{seller}
        </div>
      </div>
      <div className='space-x-6'>
      <button className='bg-lime-400 px-3 py-2 rounded-lg'>
        <Link to={`/auction/${_id}`}>
        Update
        </Link>
      </button>
      <button className='bg-lime-400 px-3 py-2 rounded-lg'>
        <Link to={`/auction/${_id}`} onClick={clickHandler}>
        Delete
        </Link>
      </button>
      </div>
    </div>
  </div>
  <div className='font-serif'>{Date}</div>
</section>


    </>
  )
}

export default Products