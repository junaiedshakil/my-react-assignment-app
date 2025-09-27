import React from "react";

const Bottom = () => {
  return (
    <div className="w-full bg-black mx-auto flex flex-col justify-center items-center p-4 sm:p-6">
      <div className="flex flex-col md:flex-row gap-6 md:gap-12">
        <div className="w-[350px] sm:w-[300px] md:w-[350px] text-gray-400">
          <h2 className="text-2xl sm:text-xl md:text-2xl font-bold text-white my-2.5">
            CS — Ticket System
          </h2>
          <p className="text-sm sm:text-xs md:text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="text-gray-400">
          <h2 className="text-2xl sm:text-xl md:text-2xl font-bold text-white my-2.5">
            Company
          </h2>
          <p className="text-sm sm:text-xs md:text-sm">About Us</p>
          <p className="text-sm sm:text-xs md:text-sm">Our Mission</p>
          <p className="text-sm sm:text-xs md:text-sm">Contact Saled</p>
        </div>
        <div className="text-gray-400">
          <h2 className="text-2xl sm:text-xl md:text-2xl font-bold text-white my-2.5">
            Services
          </h2>
          <p className="text-sm sm:text-xs md:text-sm">Products & Services</p>
          <p className="text-sm sm:text-xs md:text-sm">Customer Stories</p>
          <p className="text-sm sm:text-xs md:text-sm">Download Apps</p>
        </div>
        <div className="text-gray-400">
          <h2 className="text-2xl sm:text-xl md:text-2xl font-bold text-white my-2.5">
            Information
          </h2>
          <p className="text-sm sm:text-xs md:text-sm">Privacy Policy</p>
          <p className="text-sm sm:text-xs md:text-sm">Terms & Conditions</p>
          <p className="text-sm sm:text-xs md:text-sm">Join Us</p>
        </div>
        <div className="text-gray-400">
          <h2 className="text-2xl sm:text-xl md:text-2xl font-bold text-white my-2.5">
            Social Links
          </h2>
          <p className="text-sm sm:text-xs md:text-sm flex items-center">
            <i className="fa-brands fa-x-twitter text-white rounded-[50%] mr-2"></i>
            @CS — Ticket System
          </p>
          <p className="text-sm sm:text-xs md:text-sm flex items-center">
            <i className="fa-brands fa-linkedin text-white rounded-[50%] mr-2"></i>
            @CS — Ticket System
          </p>
          <p className="text-sm sm:text-xs md:text-sm flex items-center">
            <i className="fa-brands fa-facebook text-white rounded-[50%] mr-2"></i>
            @CS — Ticket System
          </p>
          <p className="text-sm sm:text-xs md:text-sm flex items-center">
            <i className="fa-solid fa-envelope text-white rounded-[50%] mr-2"></i>
            support@cst.com
          </p>
        </div>
      </div>

      <div className="h-[30px] max-w-[1440px] w-full text-white mt-4 text-[13px] sm:text-[11px] md:text-[13px] border-t border-gray-400 mx-auto flex justify-center items-center">
        <p>© 2025 CS — Ticket System. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Bottom;
