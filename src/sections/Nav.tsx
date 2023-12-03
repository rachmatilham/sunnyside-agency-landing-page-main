import { useState } from "react";

export default function Nav() {
  const [nav, setNav] = useState<boolean>(false);

  return (
    <nav className="pt-7 md:pt-[34px] flex justify-between items-center relative">
      <img
        src="./images/logo.svg"
        alt="Sunnyside Logo"
        className="md:w-[170px] md:h-[34px]"
      />
      <div
        className="w-8 h-5 bg-contain cursor-pointer bg-[url(../images/icon-hamburger.svg)] md:hidden"
        onClick={() => setNav(!nav)}
      ></div>
      <div
        className={
          "w-full absolute md:relative top-[105px] md:top-0 bg-white md:bg-transparent md:flex md:justify-end md:items-center md:gap-12 before:w-0 before:h-0 before:absolute before:-top-6 before:right-0 before:border-t-[24px] before:border-t-transparent before:border-r-[24px] before:border-r-white md:before:hidden " +
          (nav ? "" : "hidden")
        }
      >
        <a href="#" className="nav-link">
          About
        </a>
        <a href="#" className="nav-link">
          Services
        </a>
        <a href="#" className="nav-link">
          Projects
        </a>
        <button className="w-[140px] h-14 mt-8 mb-10 md:my-0 bg-yellow md:bg-white hover:md:bg-[#6fcfff] hover:md:text-white rounded-full font-fraunces uppercase text-[0.95rem]">
          Contact
        </button>
      </div>
    </nav>
  );
}
