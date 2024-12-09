// const ProductsList = ({ product:any }) => {
  const ProductsList: React.FC = (product:any) => {
    return (
      <div className="border p-4 rounded-md ">
        <img
          src={product.image}
          alt={product.name}
          className="h-40 w-full object-cover rounded-md mb-4"
        />
        <h3 className="font-semibold text-sm">{product.name}</h3>
        <p className="text-gray-600 text-xs">{product.category}</p>
        <p className="font-bold mt-2">{`MRP: ₹${product.price}`}</p>
      </div>
    );
  };
  
  export default ProductsList;
  