import Skeleton from "react-loading-skeleton";
import {SkeletonTheme} from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";


const Shimmer = () => {

    return (
        <SkeletonTheme highlightColor='#ffe6cc'>
        <div className='restraunt-list'>
            {Array(12).fill("").map( (e, index) => 
            <div key={index+100} className="card-shimmer">
                
                <Skeleton height={144} width={230}/>
                <h2><Skeleton /> </h2>
                <h3><Skeleton/></h3>
                <p><Skeleton/></p>
                 
            </div>
        )
        }
        </div>
        </SkeletonTheme>);
}

export default Shimmer;