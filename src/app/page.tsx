import ProductSlider from "@/components/ProductSlider/ProductSlider";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-gray-50 text-center p-3">
        <h3 className="text-md text-black font-bold">Hello Nike App</h3>
        <p className="text-sm  text-black">
          Download the app to access everything Nike.{" "}
          <a href="#">Get Your Great</a>
        </p>
      </div>
      <section className="relative bg-white px-6">
        <img src="/home-banner.png" alt="Hero Background" className="w-full" />
        <div className=" inset-0 flex flex-col justify-center items-center text-center mt-10">
          <p className="text-sm mt-2 text-black">First Look</p>
          <h1 className="text-4xl text-black font-bold">NIKE AIR MAX PULSE</h1>
          <p className="text-sm mt-2 text-black">
            Extreme comfort. Hyper durable. Maxed out.
          </p>
          <div className="mt-4 flex space-x-4">
            <button className="bg-black text-white py-2 px-6 rounded">
              Notify Me
            </button>
            <button className="bg-black text-white py-2 px-6 rounded">
              Shop Air Max
            </button>
          </div>
        </div>

        <div className="px-6 mt-10">
          <h2 className="pb-5 text-lg text-black font-bold">Featured</h2>
          <div className="bg-white">
            <img src="featured.png" alt="Image 1" className="w-full" />
          </div>
          <div className="mt-10 text-center">
            <h1 className="text-4xl text-black font-bold">
              STEP INTO WHAT FEELS GOOD
            </h1>
            <p className="text-sm mt-2 text-black">
              Cause everyone should know the feeling of running in that perfect
              pair.
            </p>
            <button className="bg-black text-white py-2 px-6 rounded mt-5">
              Find Your Shoe
            </button>
          </div>
        </div>

        {/* <ProductSlider/> */}

        <div className="px-6 mt-10">
          <h2 className="pb-5 text-lg text-black font-bold">Don't Miss</h2>
          <div className="bg-white">
            <img src="dont.png" alt="Image 1" className="w-full" />
          </div>
          <div className="mt-10 text-center">
            <h1 className="text-4xl text-black font-bold">FLIGHT ESSENTIALS</h1>
            <p className="text-sm mt-2 text-black">
              Your built-to-last, all-week wears—but with style only Jordan
              Brand can deliver.
            </p>
            <button className="bg-black text-white py-2 px-6 rounded mt-5">
              Shop
            </button>
          </div>
        </div>

        <div className="px-6 mt-10">
          <h2 className="pb-5 text-lg text-black font-bold">The Essentials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white">
              <img src="e1.png" alt="Image 1" className="w-full" />
            </div>

            <div className="bg-white">
              <img src="e3.png" alt="Image 2" className="w-full" />
            </div>

            <div className="bg-white">
              <img src="e2.png" alt="Image 3" className="w-full" />
            </div>
          </div>
        </div>

        <br />
        <div className="px-6 py-10 flex justify-evenly">
          <div>
            <h3 className="text-md font-semi text-black mb-4">Icons</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Air Force 1
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Huarache
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Air Max 90
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Air Max 95
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semi text-black mb-4">Shoes</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  All Shoes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Custom Shoes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Jordan Shoes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Running Shoes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semi text-black mb-4">Clothing</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  All Clothing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Modest Wear
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Hoodies & Pullovers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Shirts & Tops
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semi text-black mb-4">Kid's</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Infant & Toddler Shoes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Kids' Shoes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Kids' Jordan Shoes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Kids' Basketball Shoes
                </a>
              </li>
            </ul>
          </div>
        </div>
        <br />
      </section>
    </>
  );
}
