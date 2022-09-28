import React from "react";
import Button from "../../components/Button";
import Image from "next/image";

function Navbar() {
  return (
    <div
      className="flex flex-row justify-between mt-[23px] justify-center items-center"
    >
      <div className="flex mr-2.5">
        {/* left part */}
          <Image src="/logo.svg" width={36} height={36}/>
          <p className=" text font-extrabold text-base not-italic ml-2.5 flex items-center">modal.cards</p>
      </div>

      {/* middle part */}
      <div className="flex">
        <div className="navbarText mr-[10px]">Solutions </div>
        <Image src="/down.svg" width={18} height={18}/>
        <div className="navbarText ml-[35px] mr-[30px]">Product Tour</div>
        <div className="navbarText mr-[30px]">Showcase</div>
        <div className="navbarText mr-[371px]">Pricing</div>
      </div>

      {/* rigth part */}
      <div className="flex">
        <button className="navbarText mr-[30px]">Sign in</button>
        <button className="tryBtn w-[121px] h-[36px] text-[#fff]">Try for free</button>
        {/* <Button color="#000" type="empty" title="Sign In" /> */}
        {/* <Button bg="#7D4AEA" color="#fff" type="full" title="Try for free" /> */}
      </div>
    </div>
  );
}

export default Navbar;
