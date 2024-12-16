import Image from "next/image";
import React from "react";

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image src="/nike12.png" width={324} height={17} alt="nike image" />
        </div>

        {/* Header */}
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-2">
          BECOME A NIKE MEMBER
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Create your Nike Member profile and get first access to the very best
          of Nike products, inspiration and community.
        </p>

        {/* Form */}
        <form>
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-2 mb-4 border rounded-md focus:ring-2 focus:ring-black focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 mb-4 border rounded-md focus:ring-2 focus:ring-black focus:outline-none"
          />
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-2 mb-4 border rounded-md focus:ring-2 focus:ring-black focus:outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-2 mb-4 border rounded-md focus:ring-2 focus:ring-black focus:outline-none"
          />

          {/* Date of Birth */}
          <input
            type="text"
            placeholder="Date of Birth"
            className="w-full px-4 py-2 mb-4 border rounded-md focus:ring-2 focus:ring-black focus:outline-none"
          />

          <p className="text-[#8D8D8D] h-[14px] font-[inter] font-[400] text-[15px] leading-[13.31px] text-center mb-3">Get a Nike Member Reward every year on your Birthday</p>

          {/* Country Dropdown */}
          <select className="w-full px-4 py-2 mb-4 border rounded-md text-gray-600 focus:ring-2 focus:ring-black focus:outline-none">
            <option value="India">India</option>
          </select>

          {/* Gender Selection */}
          <div className="flex justify-between mb-4">
            <button
              type="button"
              className="w-full mr-2 py-2 border rounded-md text-gray-700 hover:bg-gray-100"
            >
              Male
            </button>
            <button
              type="button"
              className="w-full ml-2 py-2 border rounded-md text-gray-700 hover:bg-gray-100"
            >
              Female
            </button>
          </div>

          {/* Newsletter Checkbox */}
          <div className="flex items-center mb-6">
            <input type="checkbox" id="updates" className="w-4 h-4" />
            <label htmlFor="updates" className="ml-2 text-sm text-gray-600">
              Sign up for emails to get updates from Nike on products, offers
              and your Member benefits
            </label>
          </div>

          {/* Agreement Text */}
          <p className="text-center text-xs text-gray-600 mb-4">
            By creating an account, you agree to Nike's{" "}
            <a href="#" className="underline text-gray-800">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="underline text-gray-800">
              Terms of Use
            </a>
            .
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
          >
            JOIN US
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already a Member?{" "}
          <a href="#" className="text-black underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
