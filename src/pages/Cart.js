import CartCard from "../components/CartCard";
import useTitle from "../hooks/useTitle";


const Cart = () => {
  useTitle("Cart");
  const products = [
    {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png"},
    {"id": 6, "name": "ZEBRONICS Zeb-Thunder Wired", "price": 29, "image": "/assets/images/1006.png"}
  ]
  return (
    <main>
      <section>
        <h1 className="text-xl font-bold mt-5 text-center">Cart Items: {products.length}</h1>
        {products.map((product) =>(
          <CartCard key={product.id} product={product} />
        ))}

      </section>
    </main>
  )
}

export default Cart
