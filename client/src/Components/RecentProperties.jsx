import PropertyCarts from "./PropertyCarts"

const array=[
    {
        image: 'https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Studio Luxe',
        price: '$1500/mon',
        sqft: '800 sq ft',
        bedroom: '2 bedrooms',
        bathrooms: '1 bathroom',
        description: 'A modern studio apartment with a beautiful view of the city skyline. Perfect for solo living or a couple.',
      },
      {
        image: 'https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Sunny Beach House',
        price: '$3500/mon',
        sqft: '2500 sq ft',
        bedroom: '5 bedrooms',
        bathrooms: '4 bathrooms',
        description: 'A spacious beachfront house with plenty of outdoor space, perfect for family vacations or large gatherings.',
      },
      {
        image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Mountain Retreat',
        price: '$1800/mon',
        sqft: '1500 sq ft',
        bedroom: '3 bedrooms',
        bathrooms: '2 bathrooms',
        description: 'Nestled in the mountains, this cozy retreat offers peace and tranquility, perfect for nature lovers.',
      },
      {
        image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Urban Loft',
        price: '$2000/mon',
        sqft: '1200 sq ft',
        bedroom: '3 bedrooms',
        bathrooms: '2 bathrooms',
        description: 'This trendy loft in the heart of the city features an open floor plan and modern finishes.',
      },
      {
        image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Garden Villa',
        price: '$2500/mon',
        sqft: '2200 sq ft',
        bedroom: '4 bedrooms',
        bathrooms: '3 bathrooms',
        description: 'This charming villa surrounded by lush gardens provides a serene living experience.',
      },
      {
        image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Modern Penthouse',
        price: '$4000/mon',
        sqft: '3000 sq ft',
        bedroom: '5 bedrooms',
        bathrooms: '5 bathrooms',
        description: 'Luxury penthouse with a panoramic city view, high-end finishes, and state-of-the-art amenities.',
      },
]




const RecentProperties = () => {
  return (
    <div className="flex flex-col gap-10  justify-center items-center sm:my-28 my-10">
      <h1 className=" text-3xl sm:text-5xl font-bold text-gray-700">Recent Properties</h1>

      <div className="grid sm:grid-cols-3 gap-6">
        {
            array.map((data,index)=> {
                return (
                    <PropertyCarts key={index} image={data.image} title={data.title} price={data.price} sqft={data.sqft} bedroom={data.bedroom} bathrooms={data.bathrooms} description={data.description}/> 
                )
            }
            )
        }
      </div>
      <button className="my-10 font-semibold text-lg sm:text-xl text-white bg-yellow-500 px-8 py-5 uppercase">View All properties</button>
    </div>
  )
}
export default RecentProperties;
