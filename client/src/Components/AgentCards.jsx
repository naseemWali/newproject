import { FaPhoneAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";


const AgentCards = ({img,name,phone,email}) => {
  return (
    <div className="sm:w-[20rem] w-[90vw]">
    <img src={img} alt="bedroom" className="h-[38vh] w-[20rem] object-cover"/>
    <h2 className="text-2xl sm:text-3xl font-bold text-yellow-500 mb-3 my-8">{name}</h2>
    <h3 className=" font-medium text-gray-600 text-xl sm:text-2xl flex items-center gap-2">
    <FaPhoneAlt/> {phone}</h3>
    <h3 className="font-medium text-gray-600 text-xl sm:text-2xl flex items-center gap-2"><IoMailSharp/> {email}</h3>
    </div>
  )
}

export default AgentCards
