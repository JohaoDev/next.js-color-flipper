export default function Navbar() {
  return (
    <nav className="bg-white shadow fixed z-10 mx-auto inset-x-0 top-0 flex flex-wrap justify-between items-center">
      <a
        href="#"
        className="font-extrabold m-3 uppercase inline-flex hover:text-pink-700 transition-all duration-500"
      >
        <svg
          className="h-6 w-6 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            fill="#fff"
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
        Color flipper
      </a>

      {/*
      <div className="bg-white font-semibold z-10 rounded-bl-sm flex absolute top-0 right-0 transition-all duration-500 w-auto px-0 mt-1 items-center mx-1 uppercase">
        <a
          href="#"
          className="mx-2 my-2 border-b-2 border-transparent hover:border-pink-600 hover:text-pink-700 transition-all duration-500 py-1 p-0"
        >
          Project
        </a>
        <a
          href="#"
          className="mx-2 my-2 border-b-2 border-transparent hover:border-pink-600 hover:text-pink-700 transition-all duration-500 py-1 p-0"
        >
          Resource
        </a>
        <a
          href="#"
          className="mx-2 my-2 border-b-2 border-transparent hover:border-pink-600 hover:text-pink-700 transition-all duration-500 py-1 p-0"
        >
          About
        </a>
      </div> */}
    </nav>
  );
}
