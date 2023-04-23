import Card from "../components/Card";
import useTitle from "../hooks/useTitle";
const Home = () => {
  useTitle("Home");
  const products = [
    {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png"},
    {"id": 2, "name": "BOAT Rockerz 450", "price": 49, "image": "/assets/images/1002.png"},
    {"id": 3, "name": "JBL Tune 760NC", "price": 179, "image": "/assets/images/1005.png"},
    {"id": 4, "name": "Logitech H111 Wired", "price": 39, "image": "/assets/images/1004.png"},
    {"id": 5, "name": "Airpods Max Bluetooth Headset", "price": 199, "image": "/assets/images/1005.png"},
    {"id": 6, "name": "ZEBRONICS Zeb-Thunder Wired", "price": 29, "image": "/assets/images/1006.png"}
  ]
  return (
    <main>
      <section>
        <div className="flex justify-start flex-wrap other:justify-evenly">
        {products.map((product) =>(
          <Card key={product.id} product={product} />
        ))}
        </div>
      </section>
    </main>
  )
}

export default Home
