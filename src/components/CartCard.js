import { useCart } from "../context/CartContext";

const CartCard = ({product}) => {
    const {name,image,price} = product;
    const {removeFromCart} = useCart();

  return (
    <div className=" my-5  flex justify-between items-center border ">
        <img className="w-32 h-24" src={image} alt="pp" />
        
          <p className="text-xl font-bold">{name}</p>
          <p className="text-xl font-bold">${price}</p>
          <button onClick = {() => removeFromCart(product)}  className="bg-red-700 text-white rounded p-2 hover:bg-red-800 mr-5">Remove</button>


      
    </div>
  )
}

export default CartCard
