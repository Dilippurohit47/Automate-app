import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <nav className="flex w-full lg:px-12 lg:py-4 text-white justify-between ">
      <div>
        <h1 className="text-2xl font-semibold">
          Form
          <span className="text-amber-400 ">Fill</span>
        </h1>
      </div>
      <div>
        <Button className="text-white bg-purple-600 px-12 hover:bg-purple-700">
          Login
        </Button>
      </div>
    </nav>
  );
};

export default Header;
