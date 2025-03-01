import CategoryItems from "./CategoryItems"

const items=[
  {
    id:1,
    img:'https://images.pexels.com/photos/3457299/pexels-photo-3457299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title:'studio',
   
  },

  {
    id:2,
    img:'https://images.pexels.com/photos/3288104/pexels-photo-3288104.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title:'swimming pool',
  },

  {
    id:3,
    img:'https://images.pexels.com/photos/4112558/pexels-photo-4112558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title:'good design',
  },

  {
    id:4,
    img:'https://images.pexels.com/photos/5472597/pexels-photo-5472597.jpeg?auto=compress&cs=tinysrgb&w=600',
    title:'beautiful structure',
  },
]


const Category = () => {
  return (
    <div className="my-14 mx-auto w-[90vw] flex sm:overflow-hidden overflow-x-scroll gap-3">

      {
        items.map(({id,title,img,type})=> {
          return(
            <CategoryItems title={title} image={img} key={id} type={type}/>
          )
        }
        )  
        }
    </div>
  )
}

export default Category;
