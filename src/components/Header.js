import React from "react";
import "../styles/Header.scss";
import { CiSearch } from "react-icons/ci";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { GrAnnounce } from "react-icons/gr";
import { MdNotificationsActive } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => (
  <header className="header">
    <div className="header_name">
      <div className="logo">Techyon</div>
      <div className="user_icon">
        <h4>
          <CiSearch />
        </h4>
        <h4>
          <HiOutlineAdjustmentsHorizontal />
        </h4>
        <h4>
          <GrAnnounce />
        </h4>
        <h4>
          <MdNotificationsActive />
        </h4>
        <h4>
          <IoIosArrowDown />
        </h4>
      </div>
    </div>
  </header>
);

export default Header;
