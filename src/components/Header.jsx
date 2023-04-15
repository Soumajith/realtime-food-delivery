import { useState } from "react";
import { Link } from "react-router-dom";
export const Title = () => {
    return <h1>Food Villa</h1>
}

const LoggedInUser = () => {
    // Any API call
    return true;
}
const Header = () => {
    
    const [loggedIn, setLoggedIn] = useState(false);

    return <div className="header">
        <Title/>
        <div className="nav-items">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/cart">Cart</Link></li> 
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