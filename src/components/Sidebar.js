import React from "react";
import "../styles/Sidebar.scss";
import { LuAlignJustify } from "react-icons/lu";

import { GrHomeRounded } from "react-icons/gr";
import { RiFileCloudFill } from "react-icons/ri";
import { MdGridOn } from "react-icons/md";
import { RiMenuSearchLine } from "react-icons/ri";
import { LuFileSpreadsheet } from "react-icons/lu";
import { FaCirclePlus, FaUsers } from "react-icons/fa6";
import { HiOutlineCodeBracketSquare } from "react-icons/hi2";
import { GoDash } from "react-icons/go";
import { MdGridView } from "react-icons/md";
import { LuFileQuestion } from "react-icons/lu";
import { TbFileLike } from "react-icons/tb";
import { RiArrowUpDownLine } from "react-icons/ri";
import { PiPlusCircleFill } from "react-icons/pi";

const Sidebar = () => (
  <aside className="sidebar">
    <ul className="sidebar_div">
      <li className="sidebar_icon1">
        <LuAlignJustify />
      </li>
      <li className="sidebar_icon2">
        <PiPlusCircleFill />
      </li>
      <li className="sidebar_icon3">
        <GrHomeRounded />
      </li>
      <li className="sidebar_icon4">
        <RiFileCloudFill />
      </li>
      <li className="sidebar_icon5">
        <MdGridOn />
      </li>
      <li className="sidebar_icon6">
        <RiArrowUpDownLine />
      </li>
      <li className="sidebar_icon7">
        <RiMenuSearchLine />
      </li>
      <li className="sidebar_icon8">
        <HiOutlineCodeBracketSquare />
      </li>
      <li className="sidebar_icon9">
        <LuFileSpreadsheet />
      </li>
      <li className="sidebar_icon10">
        <FaUsers />
      </li>
      <li className="sidebar_icon11">
        <GoDash />
      </li>
      <li className="sidebar_icon12">
        <MdGridView />
      </li>
      <li className="sidebar_icon13">
        <LuFileQuestion />
      </li>
      <li className="sidebar_icon14">
        <TbFileLike />
      </li>
    </ul>
  </aside>
);

export default Sidebar;
