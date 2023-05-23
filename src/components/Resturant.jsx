import { useParams } from "react-router-dom";
import { IMG_CDN } from "../config";
import Shimmer from "./Shimmer";
import useResturant from "../utils/useResturant";
import {getMenu} from "../utils/helper"
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Resturant = () => {
    const { id } = useParams();
    const [resturant, resturantMenu] = useResturant(id);
    let index = 1;
    // const dismenu = getMenu(resturantMenu);
    console.log(resturantMenu);

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        console.log(item);
        dispatch(addItems(item));
    }
    return ( !resturant ? 
        <Shimmer/> :
        <div className="flex gap-10 justify-evenly">
            <div>
                <h1>Resturant id {resturant.id}</h1>
                <h3>{resturant.name}</h3>
                <img src= {IMG_CDN+resturant.cloudinaryImageId} />
                <p>{resturant.city}</p>
                <p>{resturant.locality}</p>
                <p>{resturant.avgRating}</p>
                <p>{resturant.costForTwoMessage}</p>
            </div>

            <div className="">
                <h2 className="text-3xl font-bold">Menu</h2>
                <ul>
                    
                    {resturantMenu?
                        resturantMenu.map((menu) => {
                        // console.log(menu);
                        return  <div className="flex ">
                            {/* console.log(menu?.card?.card?.title) */}
                             <h2 className="text-3xl">{menu?.card?.card?.title}</h2>
                            {menu?.card?.card?.itemCards ? (
                             menu?.card?.card?.itemCards.map( (item) =>
                                {return <div className="flex justify-between py-2 my-2">
                                    {console.log(item?.card?.info?.name)}
                                    <li className="text-lg" key={index++}>{item?.card?.info?.name}</li>
                                    <button className="px-3 py-1 bg-green-200" onClick={() => handleAddItem(item?.card?.info)}>Add</button>
                                </div>}
                            )):null
                            }
                        </div> 
                        // )
                    }): null
                    }
                </ul>
            </div>

        </div>
    )
}

export default Resturant;