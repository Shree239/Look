import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from 'react-icons/ai';
import { BsFillBagCheckFill, BsFillCartXFill } from 'react-icons/bs';

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  console.log(cart, addToCart, removeFromCart, clearCart, subTotal);
  const togglecart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full');
      ref.current.classList.add('translate-x-0');
    } else if (ref.current.classList.contains('translate-x-0')) {
      ref.current.classList.remove('translate-x-0');
      ref.current.classList.add('translate-x-full');
    }
  };
  const ref = useRef();

  return (
    <div className="flex  flex-col md:flex-row md:justify-start justify-center items-center mb-1 py-2 shadow-md sticky top-0 bg-white z-10">
      <div className="logo mx-5">
        <Link href={'/'}>
          <Image
            className="px-1 rounded-lg"
            width={100}
            height={40}
            src={'/LOOK OPTICAL.png'}
          />
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-4 font-bold md:text-md  ">
          <Link href={'/Men'}>
            <li>Men</li>
          </Link>
          <Link href={'/Women'}>
            <li>Women</li>
          </Link>
          <Link href={'/Kids'}>
            <li>Kids</li>
          </Link>
          <Link href={'/Computer'}>
            <li>Computer Glass</li>
          </Link>
          <Link href={'/Reading Glass'}>
            <li>Reading Glass</li>
          </Link>
        </ul>
      </div>
      <div
        onClick={togglecart}
        className="cursor-pointer cart absolute right-0 top-2 mx-5"
      >
        <Link href={'#'}>
          <AiOutlineShoppingCart className=" m-5 text-5xl" />
        </Link>
      </div>

      <div
        ref={ref}
        className="w-72 h-[100vh] Sidecart absolute top-0 right-0 bg-blue-300 px-2 py-10 transform transition-transform translate-x-full"
      >
        <h2 className="font-bold text-center text-xl">Shopping cart</h2>
        <span
          onClick={togglecart}
          className="absolute top-5 right-3 cursor-pointer text-2xl text-blue-900"
        >
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
                  <div className="w-2/3 font-semibold"> {cart[k].name} </div>
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
        <div className="flex ">
          <Link href={'/Checkout'}>
            <button class="flex mx-3   text-white bg-blue-900 border-0 py-2 px-2   focus:outline-none hover:bg-blue-600 rounded text-sm">
              <BsFillBagCheckFill className="m-1" />
              Checkout
            </button>
          </Link>
          <button
            onClick={clearCart}
            class="flex mx-2  text-white bg-blue-900 border-0 py-2 px-2 focus:outline-none hover:bg-blue-600 rounded text-sm"
          >
            <BsFillCartXFill className="m-1" />
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
