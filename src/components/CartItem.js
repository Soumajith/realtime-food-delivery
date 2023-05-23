import { IMG_CDN } from "../config";
const CartItem = ({ name, imageId, description, price }) => {
  console.log(name);
  return (
    <div className="border-solid border-2 border-gray-100 ">
      <div className="m-8 h-70">
        <img className="product-img h-30" src={IMG_CDN + imageId} />
        <h2>{name}</h2>
        <h3 className="">{description}</h3>
        <p>Rs {price / 100}</p>
      </div>
    </div>
  );
};

export default CartItem;
