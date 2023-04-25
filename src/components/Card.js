import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";


const Card = ({product}) => {
    const {id,name,price,image} = product;
    const {cartList,addToCart,removeFromCart} = useCart();

    const [isInCart, setIsInCart] = useState(false);

    useEffect(() =>{
      const productIsInCart = cartList.find(x => x.id === id)
      if(productIsInCart){
        setIsInCart(true);

      }else{
        setIsInCart(false);
      }
    },[cartList,id])
    
    return (
      <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow mt-10 ml-4">
        <img className="rounded-t-lg" src={image} alt={name} />
         <div className="p-5">
          <h5 className=" text-xl font-bold tracking-tight text-gray-900 mb-5">{name}</h5>
          <div className="flex justify-between font-bold">
            <span className="p-2">${price}</span> 
            {isInCart ? (<button onClick = {() => removeFromCart(product)}  className="bg-red-700 text-white rounded p-2 hover:bg-red-800 mr-5">Remove</button>)
              :(<button onClick = {() => addToCart(product)} className="bg-indigo-700 text-white rounded p-2 hover:bg-indigo-950">Add To Cart</button>
            )}
          </div>
        </div>
      </div>

  )
}

export default Card
