// import { Card, CardContent } from "@/components/ui/card";
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
// import Image from "next/image";

// export function Slider() {
//   const products = [
//     {
//       image: "/e1.png",
//       title: "Nike Air Max Pulse",
//       price: "₹ 13,995",
//       description: "Women's Shoes",
//     },
//     {
//       image: "/e2.png",
//       title: "Nike Air Max Pulse",
//       price: "₹ 13,995",
//       description: "Men's Shoes",
//     },
//     {
//       image: "/e3.png",
//       title: "Nike Air Max 97 SE",
//       price: "₹ 16,995",
//       description: "Men's Shoes",
//     },
//     {
//       image: "/e4.png",
//       title: "Nike Air Max Zoom",
//       price: "₹ 12,995",
//       description: "Men's Shoes",
//     },
//     {
//       image: "/e5.png",
//       title: "Nike Air Max 2022",
//       price: "₹ 15,995",
//       description: "Women's Shoes",
//     },
//   ];

//   return (
//     <div className="w-full bg-white mt-8 px-6 relative">
//       {/* Slider Title */}
//       <h2 className="text-2xl font-bold mb-6 text-gray-900">Best of Air Max</h2>

//       {/* Carousel */}
//       <div className="relative">
//         <Carousel
//           opts={{
//             align: "start",
//           }}
//           className="w-full"
//         >
//           {/* Carousel Arrows */}
//           <div className="absolute top-[-50px] right-10 flex gap-2 z-10">
//             <CarouselPrevious className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 shadow-md">
//               <span className="text-gray-600">{`<`}</span>
//             </CarouselPrevious>
//             <CarouselNext className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 shadow-md">
//               <span className="text-gray-600">{`>`}</span>
//             </CarouselNext>
//           </div>

//           {/* Content */}
//           <CarouselContent className="flex gap-4">
//             {products.map((product, index) => (
//               <CarouselItem
//                 key={index}
//                 className="basis-full md:basis-1/2 lg:basis-1/3"
//               >
//                 <div className="p-2">
//                   <Card className="border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//                     <CardContent className="p-4">
//                       {/* Product Image */}
//                       <div className="relative aspect-square w-full mb-4">
//                         <Image
//                           src={product.image}
//                           alt={product.title}
//                           layout="fill"
//                           objectFit="contain"
//                           className="rounded-md"
//                         />
//                       </div>

//                       {/* Product Info */}
//                       <div className="text-center">
//                         <h3 className="text-lg font-medium text-gray-800">{product.title}</h3>
//                         <p className="text-sm text-gray-500">{product.description}</p>
//                         <p className="text-lg font-semibold text-gray-900 mt-2">{product.price}</p>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//         </Carousel>
//       </div>
//     </div>
//   );
// }
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

export function Slider() {
  const products = [
    {
      image: "/e1.png",
      title: "Nike Air Max Pulse",
      price: "₹ 13,995",
      description: "Women's Shoes",
    },
    {
      image: "/e2.png",
      title: "Nike Air Max Pulse",
      price: "₹ 13,995",
      description: "Men's Shoes",
    },
    {
      image: "/e3.png",
      title: "Nike Air Max 97 SE",
      price: "₹ 16,995",
      description: "Men's Shoes",
    },
    {
      image: "/e1.png",
      title: "Nike Air Max Zoom",
      price: "₹ 12,995",
      description: "Men's Shoes",
    },
    {
      image: "/e2.png",
      title: "Nike Air Max 2022",
      price: "₹ 15,995",
      description: "Women's Shoes",
    },
  ];

  return (
    <div className="w-full bg-white mt-8 px-6 relative">
      {/* Slider Title */}
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Best of Air Max</h2>

      {/* Carousel */}
      <div className="relative">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          {/* Carousel Arrows */}
          <div className="absolute top-[-50px] right-10 flex gap-2 z-10">
            <CarouselPrevious className="bg-gray-200 hover:bg-gray-300 rounded-full p-3 shadow-md">
              <span className="text-gray-600 text-lg font-bold">{`<`}</span>
            </CarouselPrevious>
            <CarouselNext className="bg-gray-200 hover:bg-gray-300 rounded-full p-3 shadow-md">
              <span className="text-gray-600 text-lg font-bold">{`>`}</span>
            </CarouselNext>
          </div>

          {/* Content */}
          <CarouselContent className="flex gap-4">
            {products.map((product, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-2">
                  {/* Removed Border */}
                  <div className="overflow-hidden rounded-none">
                    <div className="relative w-full aspect-square mb-4">
                      <Image
                        src={product.image}
                        alt={product.title}
                        layout="fill"
                        objectFit="contain" /* Ensures full image is visible */
                        className="rounded-none" /* No border or radius */
                      />
                    </div>

                    {/* Product Info */}
                    <div className="text-center">
                      <h3 className="text-lg font-medium text-gray-800">{product.title}</h3>
                      <p className="text-sm text-gray-500">{product.description}</p>
                      <p className="text-lg font-semibold text-gray-900 mt-2">{product.price}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
