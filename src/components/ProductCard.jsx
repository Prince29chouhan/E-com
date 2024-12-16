import { AiFillStar } from "react-icons/ai";

const ProductCard = ({ product }) => {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-200">
      <figure className="h-48 bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain w-full h-full p-2"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg truncate" title={product.title}>
          {product.title}
        </h2>
        <p className="text-gray-600">${product.price}</p>
        <p className="flex items-center">
          <AiFillStar className="text-yellow-400 mr-1" />
          {product.rating.rate} / 5
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-sm">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
