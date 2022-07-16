import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

const Orders = (props) => {
  const {
    _id,
    name,
    category,
    ordersummary,
    price,
    needwithin,
    seller,
    image,
    Date,
  } = props.orders;
  const history = useNavigate();

  const handleClick = () => {
    console.log("hii");
  };

  // const clickHandler = ()=>{
  //   console.log('hii')
  // }

  const handleClickbtn =() => {
    alert(`${name}'s Order Accepted`)
  }
  const clickHandlerdel =async () => {
    await axios.delete(`https://khetibari.herokuapp.com/preorders/${_id}`)
    .then(res => {
      if(res.statusText= 'OK'){
        history('/orders')
        return res.data;
      }
    })
  }
  return (
    <>
      <section className="text-lime-600 body-font overflow-hidden hover:shadow-2xl border-2 border-lime-100">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-lime-100">
            <div
              className="py-8 flex flex-wrap md:flex-nowrap"
              onClick={handleClick}
            >
              <div className="md:w-64 md:mb-0 mb-6 md:flex-shrink-0 flex flex-col">
                <img src={image} alt={name} className="w-full rounded px-8" />
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-lime-900 title-font mb-2">
                  {name}
                </h2>
                <div className="text-30 text-gray-500">Category</div>
                <div className="text-25 px-3 text-black">{category}</div>
                <div className="text-30 text-gray-500">Need Within</div>
                <div className="text-25 px-3 text-black">
                  {needwithin} Months
                </div>
                <p className="leading-relaxed">{ordersummary}</p>
                <div className="text-lime-500 inline-flex items-center mt-4">
                  <div className="font-bold text-lg px-10">₹ {price}</div>
                  <button onClick={handleClickbtn} className="bg-lime-400 px-3 py-2 text-white rounded-lg">Accept Order</button>
                </div>
              </div>
              <div className="font-sans">~{seller}</div>
            </div>
            <div className="space-x-6">
            <Link to={`/orders/${_id}`}>
              <button className="bg-lime-400 px-3 py-2 rounded-lg text-white">
                Update
              </button>
              </Link>
              <Link to={`/${_id}`} onClick={clickHandlerdel}>
              <button className="bg-lime-400 px-3 py-2 rounded-lg text-white">
                Delete
              </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="font-serif">{Date}</div>
      </section>
    </>
  );
};

export default Orders;
