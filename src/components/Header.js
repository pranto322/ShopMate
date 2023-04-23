import { Link, NavLink } from "react-router-dom"
import Logo from "../assets/images/logo new.png"



const Header = () => {
  return (
    <header>
        <div className="flex justify-between items-center text-xl font-mono border-b-2 border-slate-200 rounded-md">
            <Link className="flex items-center ml-6" to="/">
                <img className="w-20" src={Logo} alt="Assign Logo"  />
                <span>ShopNow</span>
            </Link>

            <nav >
                <NavLink className="mr-3 hover:bg-stone-200 rounded p-2" to={"/"}>Home</NavLink>
                <NavLink className= "hover:bg-stone-200 rounded p-2" to = {"/cart"}>Cart</NavLink>
            </nav>
            <Link  to={"/cart"}>
                <span className= "hover:bg-stone-200 rounded p-2 mr-6">Cart :2</span>
            </Link>


        </div>
      
    </header>
  )
}

export default Header
