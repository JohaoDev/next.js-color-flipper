import type { NextPage } from "next";
import { useState } from "react";
import { useForm } from "react-hook-form";

import Navbar from "../components/navbar.component";
import Seo from "../components/seo.component";

const Home: NextPage = () => {
  const { register, getValues } = useForm();

  const [backgroundColor, setBackgroundColor] = useState("#FFF");
  const [inputType, setInputType] = useState("text");

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
      <Seo
        {...{
          title: "Color selector",
          description: "A simple color selector.",
        }}
      />
      <Navbar functions={{ setInputType }} />

      <main className="mt-12 fixed w-full">
        <div
          className="w-full h-screen align-middle uppercase flex flex-col justify-center items-center transition-all duration-700"
          style={{ backgroundColor }}
        >
          <div className="px-12 py-6 bg-black w-auto rounded-2xl text-3xl my-3 font-bold text-white">
            {inputType == "text" && (
              <div className="flex items-center justify-center">
                <input
                  type="text"
                  id="colorInput"
                  className="px-3 bg-transparent rounded-lg uppercase w-80 text-center outline-none border"
                  placeholder="#F15025"
                  {...register("colorInput", {
                    required: { message: "Required", value: true },
                    onChange() {
                      applyColorToBackground();
                    },
                  })}
                />
              </div>
            )}

            {inputType == "color" && (
              <div className="flex items-center justify-between">
                <input
                  type="color"
                  id="colorInput"
                  className="px-3 bg-transparent rounded-lg uppercase"
                  placeholder="#F15025"
                  {...register("colorInput", {
                    required: { message: "Required", value: true },
                    onChange() {
                      applyColorToBackground();
                    },
                  })}
                />

                <label htmlFor="colorInput">{backgroundColor}</label>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
