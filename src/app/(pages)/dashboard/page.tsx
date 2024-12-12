import React from "react";
import ServiceBox from "@/components/dashboard/ServiceBox";
import Link from "next/link";
const Dashboard = () => {
  return (
    <div className="h-screen  bg-[#1a1818] w-full px-12 py-20">
      <h1 className="text-4xl font-bold text-gray-500 mb-6">Tools</h1>
      <div className="flex flex-row gap-10">
        <Link href={"/form-fill"}>
          <ServiceBox />
        </Link>
        <ServiceBox />
        <ServiceBox />
      </div>
    </div>
  );
};

export default Dashboard;
