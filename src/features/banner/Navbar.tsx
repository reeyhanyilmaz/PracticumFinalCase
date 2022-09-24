import React from "react";
import Button from "../../components/Button";
import Image from "next/image";

function Navbar() {
  return (
    <div
      className="navContainer flex flex-row justify-between mt-6 justify-center items-center"
    >
      <div className="flex mr-2.5">
        {/* left part */}
          <Image src="/logo.svg" width={36} height={36}/>
          <p className=" text font-extrabold text-base not-italic ml-2.5">modal.cards</p>
      </div>

      {/* middle part */}
      <div className="flex">
        <div className="text1">Solutions </div>
        <Image src="/down.svg" width={18} height={18}/>
        <div className="text2">Product Tour</div>
        <div className="text3">Showcase</div>
        <div className="text4">Pricing</div>
      </div>

      {/* rigth part */}
      <div className="flex">
        <button className="text5">Sign in</button>
        <button className="tryBtn">Try for free</button>
        {/* <Button color="#000" type="empty" title="Sign In" /> */}
        {/* <Button bg="#7D4AEA" color="#fff" type="full" title="Try for free" /> */}
      </div>
    </div>
  );
}

export default Navbar;
