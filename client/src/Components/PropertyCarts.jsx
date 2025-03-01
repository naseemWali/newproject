
const PropertyCarts = ({image,title,price,sqft,bedroom,bathrooms,description}) => {

  return (
    <div className="sm:w-[30rem] w-[90vw]">
    <img src={image} alt="bedroom" className="h-[38vh] w-[30rem] object-cover"/>
    <h2 className="text-2xl sm:text-3xl font-bold text-yellow-500 mb-3 my-8">{title}</h2>
    <h3 className=" font-extrabold text-gray-700 text-xl sm:text-2xl">{price}</h3>
    <ul className="flex gap-5 my-3 text-gray-400 sm:text-xl font-medium">
        <li>{sqft}</li> 
        <li>{bedroom}</li> 
        <li>{bathrooms}</li>
    </ul>
    <p className="w-[100%] font-medium text-md sm:text-lg text-gray-700 ">{description}</p>
    </div>
  )
}

export default PropertyCarts;
