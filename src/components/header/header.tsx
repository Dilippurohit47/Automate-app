import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex w-full lg:px-12 fixed lg:py-4 text-white justify-between bg-transparent ">
      <div>
        <h1 className="text-2xl font-semibold">
          Form
          <span className="text-amber-400 ">Fill</span>
        </h1>
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
