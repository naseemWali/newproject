import { IoMdMailOpen,IoIosCall } from "react-icons/io";


const Navbar = () => {
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
        
        <ul className="flex gap-6 text-xl uppercase font-bold">
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

export default Navbar
