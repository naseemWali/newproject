
const CategoryItems = ({title ='Unlisted' ,image}) => {
  return (
    <div className="relative rounded-md">
    <img src={image} alt="hello" className="min-w-[60vw] max-h-[20vh] sm:min-w-[20rem] sm:max-h-[15rem] rounded-md object-cover"/>

    <div>
      <h1 className="text-white font-extrabold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10  text-center">{title}</h1>
    </div>
    </div>
  )
}
export default CategoryItems;
