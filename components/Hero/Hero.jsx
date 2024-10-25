import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      {/* BANNER */}
      <div className="relative bg-yellow-50 z-10">
        <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
          <div className="flex items-center flex-wrap px-2 md:px-0">
            <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
              <h1 className="font-bold text-4xl text-yellow-900  md:text-5xl lg:w-10/12">
                Your favorite dishes, right at your door
              </h1>
              <form action="" className="w-full mt-12">
                <div className="relative flex p-1 rounded-full bg-white   border border-yellow-200 shadow-md md:p-2">
                  <div
                    id="categories"
                    className="hidden p-3 rounded-full bg-transparent w-80 relative md:p-4 md:flex justify-between items-center select-none"
                  >
                    <input
                      type="text"
                      name="catName"
                      id="catName"
                      value="FastFood"
                      className="pl-3 w-full bg-white text-base font-medium cursor-pointer "
                      readOnly
                    />
                    <input
                      type="checkbox"
                      name="toggleLstCat"
                      id="toggleLstCat"
                      className="peer hidden outline-none"
                    />
                    <label
                      role="button"
                      htmlFor="toggleLstCat"
                      className="absolute top-0 left-0 w-full h-full"
                    ></label>
                    <span className="min-w-max">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 fill-gray-700 "
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <div
                      id="categorieLst"
                      className="absolute transition-all duration-500 ease-in-out translate-y-10 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-y-1 top-full left-0 w-full bg-white border border-yellow-200 shadow-md rounded-lg py-2"
                    >
                      <ul className="flex flex-col w-full">
                        <li className="cursor-pointer transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2">
                          FastFood
                        </li>
                        <li className="cursor-pointer transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2">
                          Restaurant
                        </li>
                        <li className="cursor-pointer transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2">
                          Marketing
                        </li>
                      </ul>
                    </div>
                  </div>
                  <input
                    placeholder="Your favorite food"
                    className="w-full p-4 rounded-full outline-none bg-transparent "
                    type="text"
                  />
                  <button
                    type="button"
                    title="Start buying"
                    className="ml-auto py-3 px-6 rounded-full text-center transition bg-gradient-to-b from-yellow-200 to-yellow-300 hover:to-red-300 active:from-yellow-400 focus:from-red-400 md:px-12"
                  >
                    <span className="hidden text-yellow-900 font-semibold md:block">
                      Search
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 mx-auto text-yellow-900 md:hidden"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </button>
                </div>
              </form>
              <p className="mt-8 text-gray-700  lg:w-10/12">
                Order food and groceries online from the largest online food
                delivery platform.
              </p>
            </div>
            <div className="hidden md:block md:w-7/12 lg:w-6/12 relative">
              <Image
                src="/images/home/food.webp"
                className="relative w-full"
                alt="food illustration"
                loading="lazy"
                width={850}
                height={700}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
