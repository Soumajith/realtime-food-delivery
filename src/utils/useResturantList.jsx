import { useState, useEffect } from "react";
import resturantList from '../data.js';
import { RESTURANT_URL } from '../config.js';
const useResturantList = () => {

    // Creating a local state variabe(mainly used in react)

    const [allresturants, setAllResturant] = useState([]);
    // Creatinig a local variable (not used )
    // const searchTxt = "KFC";

    useEffect(() => {
        getResturant();
    }, []);

    async function getResturant() {
        try {
            const response = await fetch(RESTURANT_URL);
            const restData = await response.json();
            setAllResturant(restData.data?.cards[2]?.data?.data?.cards);
        }
        catch (e) {
            console.log(e);
        }
        // setAllResturant(resturantList);
    }

    if (allresturants.length !== 0) {
        return allresturants;
    }

}

export default useResturantList;