import { useEffect, useState } from 'react';
import { RestrauntCard } from './RestrauntCard';
import Shimmer from './Shimmer';
import NoResult from './NoResult';
import resturantList from '/src/data';
import { Link } from 'react-router-dom';
import useResturantList from '../utils/useResturantList';
import useOnline from '../utils/useOnline'
import {filterData} from '../utils/helper'
 

const Body = () => {
    
    // console.log(allresturants);
    const allresturants = useResturantList();
    
    const [filteredresturants, setFilteredResturant] = useState([]);
    const [searchText, setSearchText] = useState("");

    

    useEffect( () => {
        if(allresturants){
            setFilteredResturant(allresturants);
        }
    },[allresturants]);

    const online = useOnline();

    if(!online) {
        return <h1>Please, Check your internet connection</h1>
    }

    return (
        <>
        
    <div className='search-bar'>
        <input 
            type="text" 
            className='search-input' 
            placeholder='Resturant Name'
            onChange={ (e) => {
                 setSearchText(e.target.value);
                }
            }/>

        <button 
            className='btn' 
            onClick={() => {
                const data = filterData(searchText, allresturants);
                setFilteredResturant(data);
            }
        }>Search</button>

    </div>
    
    
    { (allresturants?.length === 0) ? 
    <Shimmer />
    :
    <div className="restraunt-list">
        
        {(filteredresturants?.length === 0) ? 

        <Shimmer/> : filteredresturants.map( (restraunt) => {
                return <Link  to={"/resturants/" + restraunt.data?.id}> <RestrauntCard {...restraunt.data} key={restraunt?.data?.id}/> </Link>;
            })
        }
    </div>
}
    </>
    )
}

export default Body;