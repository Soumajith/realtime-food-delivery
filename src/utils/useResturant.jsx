import { useEffect, useState } from "react";
import {RESTURANT_DETAILS_URL} from "../config";

const useResturant = (id) => {

    const [resturant, setResturant] = useState(null);
    const [resturantMenu, setResturantMenu] = useState(null);

    useEffect( () => {
        getResturantDetails();
    },[]);

    async function getResturantDetails(){
        try{
        const response = await fetch(RESTURANT_DETAILS_URL+id);
        
        const result = await response.json();
    
        setResturantMenu(result?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        console.log("api call");
        setResturant(result?.data?.cards[0]?.card?.card?.info);
    }
    catch(e){
        console.log(e);
    }
    }


    return [resturant, resturantMenu];
}

export default useResturant;