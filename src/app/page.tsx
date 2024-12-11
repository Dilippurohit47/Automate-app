import Header from "@/components/header/header";
import HomePage from "@/pages/HomePage";
import React from "react";

const App = () => {
  return (
    <div className="h-screen bg-home-gradient ">
      <Header />
      <HomePage />
    </div>
  );
};

export default App;
