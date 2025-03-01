import IconCards from "./IconCards"

const ToolsResources = () => {
  return (
    <div className="bg-[url('https://images.pexels.com/photos/6296918/pexels-photo-6296918.jpeg?auto=compress&cs=tinysrgb&w=600')] w-full h-fit bg-no-repeat bg-center bg-cover  brightness-70 flex  items-center flex-col justify-evenly border-2">
      <h1 className="sm:text-5xl text-3xl text-center font-bold text-white mx-auto mt-32">Real Estate Tools And Resources</h1>
      <div className="grid sm:grid-cols-3 gap-10  mb-32 mt-20">
      <IconCards/>
      <IconCards/>
      <IconCards/>
      </div>
    </div>
  )
}

export default ToolsResources
