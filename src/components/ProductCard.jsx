import { useState } from "react";



// ProductCard shows one product
const ProductCard = ({ product, onAddToCart }) => {

  const [justAdded, setJustAdded] = useState(false);

  const handleBuyNow = () => {
    onAddToCart(product);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
    }, 2000);
  };

  const getTagStyle = (tagType) => {
    if (tagType === "best-seller") return "bg-yellow-100 text-yellow-700";
    if (tagType === "popular") return "bg-blue-100 text-blue-700";
    if (tagType === "new") return "bg-green-100 text-green-700";
    return "bg-gray-100 text-gray-600";
  };

  return (
    <div className="bg-white border border-gray-100 rounded-[18px] p-8 flex flex-col hover:shadow-lg transition-shadow relative">

      {/* icon on left side ; tag on right side*/}
      <div className="flex items-center justify-between mb-6">
        <div className=" flex items-center justify-center text-xl">
          <img className="w-13 h-13 object-contain" src={product.icon} alt="" />
        </div>
        {product.tag && (
          <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${getTagStyle(product.tagType)}`}>
            {product.tag}
          </span>
        )}
      </div>

      <h3 className="font-bold text-[#101727] text-xl mb-2">{product.name}</h3>
      <p className="text-[#627382] text-sm leading-relaxed mb-4">{product.description}</p>

      <div className="mb-4">
        <span className="text-2xl font-extrabold text-[#101727]">${product.price}</span>
        <span className="text-sm text-[#627382] capitalize">/{product.period}</span>
      </div>

      <ul className="space-y-2 mb-6">
        {product.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-[#627382]">
            <span className="text-green-500 font-bold">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={handleBuyNow}
        className={`mt-auto w-full py-3 rounded-full text-sm font-semibold transition-colors ${justAdded
            ? "bg-green-500 text-white"
            : "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white hover:bg-[#3b27db]"
          }`}
      >
        {justAdded ? "✓ Added to Cart" : "Buy Now"}
      </button>

    </div>
  );
};

export default ProductCard;
