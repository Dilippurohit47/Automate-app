import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex w-full lg:px-12 fixed lg:py-4 text-white justify-between bg-transparent ">
      <div>
        <Link href="/">
          <h1 className="text-2xl font-semibold">
            Auto
            <span className="text-amber-400 ">Mator</span>
          </h1>
        </Link>
      </div>
      <div>
        <Link href={"/auth"}>
          <Button className="text-white bg-purple-600 px-12 hover:bg-purple-700">
            Login
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
