import { IMG_CDN } from "../config";

export const RestrauntCard = ({
    name,
    cloudinaryImageId,
    cuisines,
    totalRatingsString,
}
) => {
    return(
        <div className="card">
            <img className="product-img" src={IMG_CDN + cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <p>{totalRatingsString} stars</p>
        </div>
    )
};