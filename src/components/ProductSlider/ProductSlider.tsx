import React from "react";
// import Slider, { Settings } from "react-slick";

interface Product {
  name: string;
  category: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    name: "Nike Air Max Pulse",
    category: "Women's Shoe",
    price: "₹13,995",
    image: "pro1.png",
  },
  {
    name: "Nike Air Max Pulse",
    category: "Men's Shoe",
    price: "₹13,995",
    image: "pro2.png",
  },
  {
    name: "Nike Air Max 97 SE",
    category: "Men's Shoe",
    price: "₹16,995",
    image: "pro3.png",
  },
];

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const NextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
  <div
    className={`${className} bg-gray-800 text-white rounded-full flex justify-center items-center p-2`}
    style={{
      ...style,
      display: "block",
      right: "10px",
      zIndex: 10,
    }}
    onClick={onClick}
  >
    <svg
      width="49"
      height="48"
      viewBox="0 0 49 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.359375" width="48" height="48" rx="24" fill="#E5E5E5" />
      <g clipPath="url(#clip0_1_83)">
        <path
          d="M20.833 30.9662L27.799 24.0002L20.833 17.0332"
          stroke="#111111"
          strokeWidth="1.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_83">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(12.3594 12)"
          />
        </clipPath>
      </defs>
    </svg>
  </div>
);

const PrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
  <div
    className={`${className} bg-gray-800 text-white rounded-full flex justify-center items-center p-2`}
    style={{
      ...style,
      display: "block",
      left: "10px",
      zIndex: 10,
    }}
    onClick={onClick}
  >
    <svg
      width="49"
      height="48"
      viewBox="0 0 49 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.984375" width="48" height="48" rx="24" fill="#F5F5F5" />
      <g clipPath="url(#clip0_1_79)">
        <path
          d="M28.509 30.9662L21.542 24.0002L28.509 17.0332"
          stroke="#CCCCCC"
          strokeWidth="1.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_79">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(12.9844 12)"
          />
        </clipPath>
      </defs>
    </svg>
  </div>
);

const ProductSlider: React.FC = () => {
  // const settings: Settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   nextArrow: <NextArrow />,
  //   prevArrow: <PrevArrow />,
  //   responsive: [
  //     {
  //       breakpoint: 768, // For small screens
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    <div className="px-6 py-8">
      <h2 className="text-lg font-bold mb-4">Best of Air Max</h2>
      {/* <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="p-4">
            <div className="border rounded-md p-4">
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold text-sm">{product.name}</h3>
              <p className="text-gray-600 text-xs">{product.category}</p>
              <p className="font-bold mt-2">{product.price}</p>
            </div>
          </div>
        ))}
      </Slider> */}
    </div>
  );
};

export default ProductSlider;
