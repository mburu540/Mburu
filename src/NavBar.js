import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../src/images/5aa1041f3af64db795a371c7c5117a31.png";





export const NavBar = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

   const [scrolling, setScrolling] = useState(false);

   const handleScroll = () => {
     if (window.scrollY > 20) {
       setScrolling(true);
     } else {
       setScrolling(false);
     }
   };
   const navbarClasses = scrolling
    ? 'lg:bg-gray-800 lg:text-white shadow-md lg:border lg:rounded-full lg:shadow-xl '
    : 'bg-transparent text-black border-none !important lg:hover:bg-blue-200 ';

 
   useEffect(() => {
     window.addEventListener('scroll', handleScroll);
     return () => {
       window.removeEventListener('scroll', handleScroll);
     };
   }, []);
    return (
       <div className="fixed top-0 left-0 right-0 container flex flex-wrap ">
        <h1 className="hidden sm:block"><span className=" font-qwigley font-bold text-4xl text-teal-500 lg:ml-10 sm:ml-5 md:ml-5 sm:top-0 md:top-0 lg:50 bg-cover bg-center bg-no-repeat rounded-l-2xl" style={containerStyle}>Mburu</span><span className="font-bold text-5xl text-red-700">.</span></h1>
            <nav className={`fixed h-10 top-5 left-0 right-0 flex items-center justify-between ${navbarClasses} p-4 lg:w-1/2   lg:mx-auto from-gray-500 to-gray-700`}>
     
               
               <li className="list-none active:border rounded-full p-1 "><Link to='/'  className="active:bg-white-500 font-bold hover:shadow-2xl cursor:pointer">Home</Link></li>
               <li className="list-none active:border rounded-full p-1"><Link to='/services' className="active:cursor:loading active:bg-white-500 font-bold cursor:pointer">Services</Link></li>
               <li className="list-none active:border rounded-full p-1"><Link to='/about' className="active:bg-white-500 font-bold cursor:pointer">About</Link></li>
               <li className="list-none active:border rounded-full p-1 ">
                <Link to='/contact'  className=" font-bold active:border rounded-full active:bg-blue-500 text-l cursor:pointer">Contact
                </Link></li>
                
            </nav>
         </div>
    )
}