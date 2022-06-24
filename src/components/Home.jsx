import React from "react";
import img from "../images/farmer_PNG63.png";

const Home = () => {
  return (
    <>
      {/* Hello world */}
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <div className="text-6xl font-robo pb-20 pt-6">
                We provide the best trade solution for Farmer and Buyer.
              </div>
              <button className="px-4 py-3 bg-lime-500 rounded-full font-semibold hover:bg-lime-400">
                Sell your product
              </button>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={img}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
