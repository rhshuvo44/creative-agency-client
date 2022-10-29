import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  IoGrid,
  IoHomeOutline,
  IoAlbumsOutline,
  IoCheckmarkCircleOutline,
  IoCalendarOutline,
  IoMenu,
} from "react-icons/io5";
import "./Navbar.css";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="sticky top-0 z-50 h-16 bg-accent flex justify-between items-center shadow-sm px-4 md:px-10">
      <Logo />
      <Links isVisible={isVisible} />
      <Bar isVisible={isVisible} setIsVisible={setIsVisible} />
    </div>
  );
};

const Logo = () => (
  <div className="flex items-center gap-2">
    <IoGrid className="text-secondary text-2xl" />
    <Link to="/" className="text-secondary text-xl font-bold">
      Creative Agency
    </Link>
  </div>
);

const Links = ({ isVisible }) => {
  return (
    <div
      className={`flex flex-col fixed top-[65px] ${
        isVisible ? "left-[0%]" : "left-[-100%]"
      } transition-all delay-200 bottom-0 w-full p-4 gap-2 md:static md:w-auto md:flex md:flex-row md:item-center md:gap-8`}
    >
      <LinkItem to="/" title="Home" Icon={IoHomeOutline} />
      <LinkItem to="/create" title="Create Task" Icon={IoAlbumsOutline} />
      <LinkItem
        to="/completed"
        title="Completed Task"
        Icon={IoCheckmarkCircleOutline}
      />
      <LinkItem to="/calendar" title="Calendar" Icon={IoCalendarOutline} />
      <LinkItem to="/login" title="Login" Icon={IoCalendarOutline} />
    </div>
  );
};

const LinkItem = ({ to, title, Icon }) => (
  <NavLink
    className={({ isActive }) =>
      isActive
        ? "flex items-center gap-2 text-dark font-semibold"
        : "flex items-center gap-2"
    }
    to={to}
  >
    {<Icon />}
    {title}
  </NavLink>
);

const Bar = ({ isVisible, setIsVisible }) => (
  <div className="flex md:hidden">
    <IoMenu
      className="text-primary text-2xl cursor-pointer"
      onClick={() => setIsVisible(!isVisible)}
    />
  </div>
);

export default Navbar;
