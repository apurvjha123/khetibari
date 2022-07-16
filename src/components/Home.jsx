import React from "react";
import img from "../images/farmer_PNG63.png";
import { BsCurrencyDollar } from "react-icons/bs";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GiFarmer } from "react-icons/gi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5  mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <div className="text-6xl font-robo pb-20 pt-6 mx-0 lg:pt-32">
                We provide India's best market place for Farmers.
              </div>
              <Link to="/orders">
                <button className="px-4 py-3 bg-lime-500 rounded-full font-semibold hover:bg-lime-400">
                  Become a Seller
                </button>
              </Link>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto object-cover object-center rounded"
              src={img}
            />
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-robo title-font text-center text-gray-900 mb-20">
            Direct interaction with <br />
            our Buyers or seller
          </h1>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-lime-100 text-lime-500 mb-4 flex-shrink-0">
                <VscWorkspaceTrusted />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-semibold mb-2">
                  Trusted
                </h2>
                <p className="leading-relaxed text-base">
                  We deeply verify the Buyer Company and Farmer so that the
                  Trust on our website continue and can use this application
                  safely and is 100% secure.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-lime-100 text-lime-500 mb-4 flex-shrink-0">
                <BsCurrencyDollar />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-semibold mb-2">
                  Best Price
                </h2>
                <p className="leading-relaxed text-base">
                  Because we eliminate the middle man (Broker) and connect our
                  seller direct to Buyer automatic price drop increases
                  massively . So, The Seller get good Amount and Buyer get fresh
                  Grains.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-lime-100 text-lime-500 mb-4 flex-shrink-0">
                <GiFarmer />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-semibold mb-2">
                  Direct buy from Farmers
                </h2>
                <p className="leading-relaxed text-base">
                  The Buyer have to go to mandi and buy the grain which may not
                  be fresh and health . So we directly connect the Buyers to
                  Farmers so that they can buy fresh and good nutrients grain
                  direct from farmer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-lime-700">
                2.7K
              </h2>
              <p className="leading-relaxed">Sellers</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-lime-700">
                18K
              </h2>
              <p className="leading-relaxed">Buyers</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-lime-700">
                300
              </h2>
              <p className="leading-relaxed">Active</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-lime-700">
                4
              </h2>
              <p className="leading-relaxed">category</p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-lime-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-3xl font-robo font-black title-font text-lime-800 mb-12 text-center">
            Testimonials
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-lime-100 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-lime-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                </svg>
                <p className="leading-relaxed mb-6">
                  Selling my Item here just changed my life . Finally , I can
                  earn lot more profit than Mandi. This provide me variety of
                  flexiblity to do diffrent type of farming as well. It gives me
                  three time more profit than so called mandi . Thanks !
                </p>
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-lime-900">
                    Prince Kumar
                  </span>
                  <span className="text-black text-sm">Farmer</span>
                </span>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-lime-100 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-lime-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                </svg>
                <p className="leading-relaxed mb-6">
                  After using this service my company started gaining more
                  profit and now I can easliy expand. This service provide best
                  and cost effective grains directly from farmers.
                </p>

                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-medium text-lime-900">
                    Harsh Ranjan Jha
                  </span>
                  <span className="text-black text-sm">Food Company Owner</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
