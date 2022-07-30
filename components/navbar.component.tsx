import Image from "next/image";
import FineArtsIcon from "/public/fine-arts.svg";
interface NavbarProps {
  functions: Functions;
}

type Functions = {
  setInputType: (value: string) => void;
};

export default function Navbar({ functions }: NavbarProps) {
  return (
    <nav className="bg-white shadow fixed z-10 mx-auto inset-x-0 top-0 flex flex-wrap justify-between items-center">
      <div className="font-extrabold m-3 uppercase inline-flex hover:text-pink-700 transition-all duration-500">
        <Image src={FineArtsIcon} height={20} width={20} alt="FineArtsIcon" />
        <p className="ml-2">Color selector</p>
      </div>

      <div className="bg-white font-semibold z-10 rounded-bl-sm flex transition-all duration-500 w-auto px-0 items-center mx-1 uppercase">
        <button
          className="mx-2 my-2 border-b-2 border-transparent hover:border-pink-600 hover:text-pink-700 transition-all duration-500 py-1 p-0 uppercase font-bold"
          onClick={() => functions.setInputType("text")}
        >
          Color code
        </button>
        <button
          className="mx-2 my-2 border-b-2 border-transparent hover:border-pink-600 hover:text-pink-700 transition-all duration-500 py-1 p-0 uppercase font-bold"
          onClick={() => functions.setInputType("color")}
        >
          Color palette
        </button>
      </div>
    </nav>
  );
}
