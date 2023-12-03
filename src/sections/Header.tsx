import Nav from "./Nav";

export default function Header() {
  return (
    <header className="w-full h-[538px] md:h-[799px] px-6 md:px-10 bg-[url(../images/mobile/image-header.jpg)] sm:bg-[url(../images/desktop/image-header.jpg)] bg-cover bg-bottom bg-no-repeat text-center">
      <Nav />
      <h1 className="mt-24 md:mt-[120px] font-fraunces font-black text-4xl md:text-6xl uppercase text-white tracking-[0.27em]">
        We are creatives
      </h1>
      <img
        src="./images/icon-arrow-down.svg"
        alt="Arrow Down Icon"
        className="mt-14 md:mt-24 mx-auto"
      />
    </header>
  );
}
