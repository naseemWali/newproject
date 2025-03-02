
const Contact = () => {
  return (
    <div className="bg-[url('https://images.pexels.com/photos/9967888/pexels-photo-9967888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] w-full  bg-no-repeat bg-center bg-cover  brightness-90 flex  items-center flex-col justify-evenly border-2">
      <h1 className="sm:text-5xl text-3xl text-center font-bold text-white mx-auto mt-32">Get In Touch</h1>

      <form action="" className=" mt-20">
        <div className="grid sm:grid-cols-2 gap-10">
          <input type="text" name="" id="" placeholder="First Name :" className="px-8 py-5 border-white outline-none text-white sm:w-[30vw] rounded-lg font-extrabold border-3" />
          <input type="text" name="" id="" placeholder="Last  Name :" className="px-8 py-5 border-white outline-none text-white sm:w-[30vw] rounded-lg font-extrabold border-3" />
          <input type="text" name="" id="" placeholder="Phone :" className="px-8 py-5 border-white outline-none text-white sm:w-[30vw] rounded-lg font-extrabold border-3" />
          <input type="text" name="" id="" placeholder="Email :" className="px-8 py-5 border-white outline-none text-white sm:w-[30vw] rounded-lg font-extrabold border-3" />
        </div>

        <textarea name="" id="" rows='10' cols='30' placeholder="Message :" className="border-2 border-white px-8 py-5  outline-none text-white sm:w-[65vw] rounded-lg font-extrabold mt-10"></textarea>
      </form>
      <button className="mt-20 font-semibold text-lg sm:text-xl text-white bg-yellow-500 px-8 py-5 uppercase mb-32">send message</button>
      </div>
  )
}
export default Contact;
