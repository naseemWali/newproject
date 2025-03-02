import { IoMdMailOpen,IoIosCall } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRef, useState,useEffect } from "react";


 const Navbar = () => {
 const [open, setOpen]=useState(false)
 const menuref=useRef(null);

  const handleClickOutside = (event) => {
  if (menuref.current && !menuref.current.contains(event.target)) {
    setOpen(false); // Close the menu when clicked outside
  }
 };

  useEffect(() => {
  // Add event listener to the document to detect clicks outside the menu
  document.addEventListener("mousedown", handleClickOutside);

  // Cleanup event listener when the component unmounts
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

      return (
      <nav className="w-[80vw] mx-auto">
      <div className="flex flex-col sm:flex-row  justify-between sm:items-center  py-2 border-b-2 border-gray-300">
        <ul className="flex gap-3 text-gray-600 text-md">
        <li>Login</li>
        <li>Register</li>
        </ul>
        
        <ul className="flex gap-4 text-gray-800 sm:text-md text-sm">
        <li className="flex items-center justify-center gap-2"> <IoMdMailOpen/> info@realestate.in</li>
        <li className="flex items-center justify-center gap-2"> <IoIosCall/> 18001234567</li>
        </ul>
        </div>
        
       {/* another div of nav */}
        <div className="flex justify-between my-6 items-center">
        <span className="text-2xl font-bold">
          INTENSE <span className="text-sm text-yellow-500">real estate</span>
        </span>
        <GiHamburgerMenu className="text-2xl sm:hidden block" onClick={()=>setOpen(!open)}/>
        
        <ul className="sm:flex gap-6 text-xl uppercase font-bold hidden">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Catalog</li>
          <li className="cursor-pointer">Submit Property</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contacts</li>
        </ul>

        <ul className={`${open ? 'left-0 opacity-100 top-40' : 'left-[-100%] opacity-0 top-40'} flex flex-col text-xl uppercase   gap-7 px-5 py-4 z-3 font-semibold absolute top-12 left-8 bg-white text-center rounded-lg transition-all duration-500 ease-in-out`} ref={menuref}>
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Catalog</li>
          <li className="cursor-pointer">Submit Property</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contacts</li>
        </ul>
        </div>
       
        </nav>
        )
        }

export default Navbar;
