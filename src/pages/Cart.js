import CartCard from "../components/CartCard";
import { useCart } from "../context/CartContext";
import useTitle from "../hooks/useTitle";




const Cart = () => {
  useTitle("Cart");
  const {total,cartList} = useCart();





  return (
    <main>
      <section>
        <h1 className="text-xl font-bold mt-5 text-center">Cart Items: {cartList.length} / ${total}</h1>
        {cartList.map((product) =>(
          <CartCard key={product.id} product={product} />
        ))}

      </section>
    </main>
  )
}

export default Cart
