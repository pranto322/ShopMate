
const Card = ({product}) => {
    const {name,price,image} = product;
  return (
    
<div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow mt-10 ml-4">
    <img className="rounded-t-lg" src={image} alt={name} />

    <div className="p-5">
        <h5 className=" text-xl font-bold tracking-tight text-gray-900 mb-5">{name}</h5>
        <div className="flex justify-between font-bold">
            <span className="p-2">${price}</span> 
            <button className="bg-indigo-700 text-white rounded p-2 hover:bg-indigo-950">Add To Cart</button>
        </div>
    </div>
</div>

  )
}

export default Card
