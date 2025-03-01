// import AgentCards from "./AgentCards"

import AgentCards from "./AgentCards"

const array=[
    {
        img:'https://images.pexels.com/photos/30004325/pexels-photo-30004325/free-photo-of-professional-business-portrait-in-greenville.jpeg?auto=compress&cs=tinysrgb&w=600',
        name:'Ashley Mason',
        phone:'1-800-7650-986',
        email:'ashley@demolink.org',
    },

    {
        img:'https://images.pexels.com/photos/30004312/pexels-photo-30004312/free-photo-of-professional-headshot-of-smiling-man-in-polo-shirt.jpeg?auto=compress&cs=tinysrgb&w=600',
        name:'Russell Myers',
        phone:'1-800-7650-986',
        email:'russell@demolink.org',
    },

    {
        img:'https://images.pexels.com/photos/30004320/pexels-photo-30004320/free-photo-of-professional-headshot-of-smiling-woman-in-black-top.jpeg?auto=compress&cs=tinysrgb&w=600',
        name:'Shirley Vasquez',
        phone:'1-800-7650-986',
        email:'shirley@demolink.org',
    },

    {
        img:'https://images.pexels.com/photos/30004318/pexels-photo-30004318/free-photo-of-professional-portrait-of-a-man-in-greenville-studio.jpeg?auto=compress&cs=tinysrgb&w=600',
        name:'Terry Sandoval',
        phone:'1-800-7650-986',
        email:'terryy@demolink.org',
    },

]



const RealEstateAgents = () => {
  return (
    <div className="flex flex-col gap-10  justify-center items-center sm:my-28 my-10">
    <h1 className=" text-3xl sm:text-5xl font-bold text-gray-700">Real Estate Agents</h1>
    <div className="grid sm:grid-cols-4  gap-10 sm:gap-8">
        {
            array.map((data,index)=>{
              return(
                <AgentCards key={index} img={data.img} name={data.name} phone={data.phone} email={data.email}/>
              )
            })
        }
    </div>
    <button className="my-10 font-semibold text-lg sm:text-xl text-white bg-yellow-500 px-8 py-5 uppercase">View All Agents</button>
    </div>

    
  )
}

export default RealEstateAgents;
