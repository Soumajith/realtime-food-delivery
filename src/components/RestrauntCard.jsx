import { IMG_CDN } from "../config";

export const RestrauntCard = ({
    name,
    cloudinaryImageId,
    cuisines,
    totalRatingsString,
}
) => {
    return(
        <div className="border-solid border-2 border-gray-100 ">
            <div className="m-8 h-70">
                <img className="product-img h-60" src={IMG_CDN + cloudinaryImageId}/>
                <h2>{name}</h2>
                <h3 className="">{cuisines.join(", ")}</h3>
                <p>{totalRatingsString} stars</p>
            </div>
        </div>
    )
};