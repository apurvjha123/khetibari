import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const Addproduct = () => {
  const history = useNavigate()
  const [Detail, setDetail] = useState({
    name : "",
    category : "",
    description : "",
    price : "",
    seller : "",
    image : ""
    
  })
  const handleChange = (event)=>{
    setDetail({
      ...Detail,
      [event.target.name] : event.target.value
  })
    
  }
  const sendData = async ()=>{
    const {name , category, description, price, seller, image }= Detail
    await axios.post('http://localhost:5000/routes',{
      name : String(name),
      category : String(category),
      description:String(description),
      price : Number(price),
      seller : String(seller),
      image : String(image)
    }).then(res => res.data)
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(Detail)
    sendData().then(history('/auction'))
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="text-lime-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-lime-900">
        Add Product
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      Enter the Product Details
      </p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
      <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm font-semibold text-lime-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name" value={Detail.name} onChange={handleChange}
              className="w-full bg-lime-100 bg-opacity-50 rounded border border-lime-300 focus:border-lime-500 focus:bg-white focus:ring-2 focus:ring-lime-200 text-base outline-none text-lime-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="category" className="leading-7 text-sm font-semibold text-lime-600">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category" value={Detail.category} onChange={handleChange}
              className="w-full bg-lime-100 bg-opacity-50 rounded border border-lime-300 focus:border-lime-500 focus:bg-white focus:ring-2 focus:ring-lime-200 text-base outline-none text-lime-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="description" className="leading-7 text-sm font-semibold text-lime-600">
              description
            </label>
            <input
              type="text"
              id="description"
              name="description" value={Detail.description} onChange={handleChange}
              className="w-full bg-lime-100 bg-opacity-50 rounded border border-lime-300 focus:border-lime-500 focus:bg-white focus:ring-2 focus:ring-lime-200 text-base outline-none text-lime-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="price" className="leading-7 text-sm font-semibold text-lime-600">
              Price
            </label>
            <input
              type="text"
              id="price"
              name="price" value={Detail.price} onChange={handleChange}
              className="w-full bg-lime-100 bg-opacity-50 rounded border border-lime-300 focus:border-lime-500 focus:bg-white focus:ring-2 focus:ring-lime-200 text-base outline-none text-lime-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="seller" className="leading-7 text-sm font-semibold text-lime-600">
              Seller
            </label>
            <input
              type="text"
              id="name"
              name="seller" value={Detail.seller} onChange={handleChange}
              className="w-full bg-lime-100 bg-opacity-50 rounded border border-lime-300 focus:border-lime-500 focus:bg-white focus:ring-2 focus:ring-lime-200 text-base outline-none text-lime-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="image" className="leading-7 text-sm font-semibold text-lime-600">
              Image
            </label>
            <input
              type="text"
              id="image"
              name="image" value={Detail.image} onChange={handleChange}
              className="w-full bg-lime-100 bg-opacity-50 rounded border border-lime-300 focus:border-lime-500 focus:bg-white focus:ring-2 focus:ring-lime-200 text-base outline-none text-lime-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-lime-500 border-0 py-2 px-8 focus:outline-none hover:bg-lime-600 rounded text-lg">
            Add Product
          </button>
        </div>
      </div>
    </div>
  </div>
</form>

    </>
  )
}

export default Addproduct