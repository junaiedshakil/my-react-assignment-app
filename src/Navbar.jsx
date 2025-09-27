import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="navbar bg-base-100 shadow-sm">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl font-bold">
              CS — Ticket System
            </a>
          </div>
          <div>
            <ul className="flex gap-7 items-center ">
              <li className="hidden md:block">Home</li>
              <li className="hidden md:block">FAQ</li>
              <li className="hidden md:block">Changelog</li>
              <li className="hidden md:block">Blog</li>
              <li className="hidden md:block">Download</li>
              <li className="hidden md:block">Contact</li>
              <button className="btn bg-[#7D44E9] text-white">
                <i className="fa-solid fa-plus text-white"></i> New Ticket
              </button>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
