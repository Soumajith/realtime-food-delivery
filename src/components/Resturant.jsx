import { useParams } from "react-router-dom";
import { IMG_CDN } from "../config";
import Shimmer from "./Shimmer";
import useResturant from "../utils/useResturant";
import {getMenu} from "../utils/helper"

const Resturant = () => {
    const { id } = useParams();
    
    const [resturant, resturantMenu] = useResturant(id);
    
    const menu = getMenu(resturantMenu);

    return ( !resturant ? 
        <Shimmer/> :
        <div className="menu">
            <div>
                <h1>Resturant id {resturant.id}</h1>
                <h3>{resturant.name}</h3>
                <img src= {IMG_CDN+resturant.cloudinaryImageId} />
                <p>{resturant.city}</p>
                <p>{resturant.locality}</p>
                <p>{resturant.avgRating}</p>
                <p>{resturant.costForTwoMessage}</p>
            </div>

            <div className="menu-card">
                <h2>Menu</h2>
                <ul>
                    
                    {menu.map((item) => {
                        return <li>{item}</li>
                    })}
                </ul>
            </div>

        </div>
    )
}

export default Resturant;