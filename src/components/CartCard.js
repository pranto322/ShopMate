

const cartCard = ({product}) => {
    const {name,image,price} = product;
  return (
    <div className=" my-5 flex justify-between items-center border ">
        <img className="w-32 h-24" src={image} alt="pp" />
        <p className="text-xl font-bold">{name}</p>
        <p className="text-xl font-bold">${price}</p>
        <button className="bg-indigo-700 text-white rounded p-2 hover:bg-indigo-950 mr-5">Remove item</button>

      
    </div>
  )
}

export default cartCard
