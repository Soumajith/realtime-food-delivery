import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const Title = () => {
    return <h1 className="text-3xl">Food Villa</h1>
}

const LoggedInUser = () => {
    // Any API call
    return true;
}
const Header = () => {
    
    const [loggedIn, setLoggedIn] = useState(false);
    const cartItems = useSelector((store)=> store.cart.items)
    return <div className="flex justify-between p-5">
        <Title/>
        <div>
            <ul className="flex justify-evenly gap-4">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/cart">Cart {cartItems.length}</Link></li> 
            </ul>
        </div>
        <div className="authentication">
            { (loggedIn) ? 
                <button className="log-btn" onClick={ () => setLoggedIn(false)}
                >Logout</button> :
                <button className="log-btn" onClick={() => setLoggedIn(true)}
                >Login</button>
            }
        </div>
    </div>
};

export default Header;