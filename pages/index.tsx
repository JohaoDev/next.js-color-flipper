import type { NextPage } from "next";
import { useState } from "react";
import { useForm } from "react-hook-form";

import Navbar from "../components/navbar.component";

const Home: NextPage = () => {
  const { register, getValues } = useForm();

  const [backgroundColor, setBackgroundColor] = useState("#FFF");

  const applyColorToBackground = () => {
    const colorInput = getValues("colorInput");

    if (colorInput) {
      setBackgroundColor(colorInput);
    } else {
      setBackgroundColor("#FFF");
    }
  };

  return (
    <>
      <Navbar />

      <main className="mt-12 fixed w-full">
        <div
          className="w-full h-screen align-middle uppercase flex flex-col justify-center items-center transition-all duration-700"
          style={{ backgroundColor }}
        >
          <div className="grid grid-cols-3 justify-between px-12 py-6 bg-black max-w-2xl w-full rounded-2xl text-4xl my-3 font-bold text-white">
            <label htmlFor="colorInput" className="text-center col-span-2">
              Background color:
            </label>

            <input
              type="text"
              id="colorInput"
              className="px-3 bg-transparent col-span-1 border-gray-500 border rounded-2xl uppercase"
              placeholder="#F15025"
              {...register("colorInput", {
                required: { message: "Required", value: true },
              })}
            />
          </div>

          <button
            className="transition-all duration-500 px-8 py-3 border-2 font-bold text-center max-w-2xl rounded-2xl text-xl my-3 uppercase bg-black text-white border-black hover:bg-gray-900 hover:border-gray-900"
            onClick={() => applyColorToBackground()}
          >
            Apply color
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
