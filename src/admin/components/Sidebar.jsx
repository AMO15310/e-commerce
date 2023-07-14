import React from "react";
import adminicon from "/admin-icon.png";

export const Sidebar = () => {
  return (
    <div>
      <div className="flex flex-col bg-amber-950 min-h-[90vh]  w-[10rem]">
        <div className="mx-auto p-[1rem] bg-blue-100 h-fit border rounded-full">
          <img
            src={adminicon}
            alt="admin-icon"
            className="w-[50px]  h-[3rem]"
          />
        </div>
        <div className=" text-white flex justify-center mt-3 text-lg">
          Hello, Admin
        </div>
        <div className=" text-white mt-[5rem] text-lg ">
          <div className="mb-[1rem]">Dashboard</div>
          <div className="mb-[1rem]">Customers</div>
          <div className="mb-[1rem]">Category</div>
          <div className="mb-[1rem]">Sizes</div>
          <div className="mb-[1rem]">Product Sizes</div>
          <div className="mb-[1rem]">Products</div>
          <div className="">Orders</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
