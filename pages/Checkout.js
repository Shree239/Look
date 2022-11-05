import React, { useRef } from 'react';
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from 'react-icons/ai';
import { BsFillBagCheckFill, BsFillCartXFill } from 'react-icons/bs';
import Link from 'next/link';

const Checkout = ({ cart, subTotal, addToCart, removeFromCart }) => {
  return (
    <div className="container m-auto">
      <h1 className="font-bold text-3xl text-center my-3">Checkout</h1>
      <h2 className="txt-xl font-bold my-4">1. Delivery Details</h2>
      <div className="mx-10 flex">
        <div className="px-1 w-1/2 ">
          <div className=" mb-4">
            <label
              htmlfor="name"
              className="leading-7 text-lg font-semibold text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              wtx-context="4FF6D4E5-D66F-4D11-AB9A-1D1E2BB358EE"
            />
          </div>
        </div>

        <div className="px-1 w-1/2">
          <div className=" mb-4">
            <label
              htmlfor="email"
              className="leading-7 text-lg font-semibold text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              wtx-context="4FF6D4E5-D66F-4D11-AB9A-1D1E2BB358EE"
            />
          </div>
        </div>
      </div>
      <div className="flex mx-10">
        <div className="px-1 w-1/2 ">
          <div className=" mb-4">
            <label
              htmlfor="number"
              className="leading-7 text-lg font-semibold text-gray-600"
            >
              Phone
            </label>
            <input
              type="text"
              id="number"
              name="number"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              wtx-context="4FF6D4E5-D66F-4D11-AB9A-1D1E2BB358EE"
            />
          </div>
        </div>

        <div className="px-1 w-1/2 ">
          <div className=" mb-4">
            <label
              htmlfor="number"
              className="leading-7 text-lg font-semibold text-gray-600"
            >
              Address
            </label>
            <input
              name="Address"
              id="address"
              type="Text"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              wtx-context="4FF6D4E5-D66F-4D11-AB9A-1D1E2BB358EE"
            />
          </div>
        </div>
      </div>
      <div className="flex mx-10">
        <div className="px-1 w-1/2 ">
          <div className=" mb-4">
            <label
              htmlfor="City"
              className="leading-7 text-lg font-semibold text-gray-600"
            >
              City
            </label>
            <input
              type="text"
              id="City"
              name="number"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              wtx-context="4FF6D4E5-D66F-4D11-AB9A-1D1E2BB358EE"
            />
          </div>
        </div>

        <div className="px-1 w-1/2 ">
          <div className=" mb-4">
            <label
              htmlfor="number"
              className="leading-7 text-lg font-semibold text-gray-600"
            >
              State
            </label>
            <input
              name="State"
              id="State"
              type="Text"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              wtx-context="4FF6D4E5-D66F-4D11-AB9A-1D1E2BB358EE"
            />
          </div>
        </div>
      </div>

      <div className="flex mx-10">
        <div className="px-1 w-1/2 ">
          <div className=" mb-4">
            <label
              htmlfor="Pincode"
              className="leading-7 text-lg font-semibold text-gray-600"
            >
              Pincode
            </label>
            <input
              type="Pincode"
              id="Pincode"
              name="Pincode"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              wtx-context="4FF6D4E5-D66F-4D11-AB9A-1D1E2BB358EE"
            />
          </div>
        </div>
      </div>
      <h2 className="txt-xl font-bold my-4 mx-10">2. Review Cart Items</h2>
      <div className="Sidecart  bg-blue-300 px-2 py-10 mx-10 rounded-md">
        <span className="absolute top-5 right-3 cursor-pointer text-2xl text-blue-900">
          <AiFillCloseCircle />
        </span>
        <ol className="list-decimal font-semibold px-5 ">
          {Object.keys(cart).length == 0 && (
            <div className="my-4 font-semibold ">Yor cart is empty</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex my-5">
                  <div className=" font-semibold"> {cart[k].name} </div>
                  <div className=" flex items-center justify-center w-1/3  text-lg">
                    <AiOutlineMinusCircle
                      onClick={() => {
                        removeFromCart(k, 1, cart[k].price, cart[k].name);
                      }}
                      className="cursor-pointer text-blue-900"
                    />
                    <span className="mx-2 text-sm ">{cart[k].qty}</span>
                    <AiOutlinePlusCircle
                      onClick={() => {
                        addToCart(k, 1, cart[k].price, cart[k].name);
                      }}
                      className="cursor-pointer text-blue-900"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="font-bold">Subtotal:₹{subTotal}</div>
      </div>

      <div className="mx-8 py-4">
        <Link href={'#'}>
          <button class="flex mx-3   text-white bg-blue-900 border-0 py-2 px-8   focus:outline-none hover:bg-blue-600 rounded text-sm">
            <BsFillBagCheckFill className="m-auto" />
            Pay ₹{subTotal}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
