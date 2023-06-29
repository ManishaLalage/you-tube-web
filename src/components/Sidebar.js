import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillHome,AiOutlineLike,AiOutlineShopping,AiOutlineTrophy,AiOutlineBulb} from "react-icons/ai";
import {
  MdSubscriptions,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineMusicNote
} from "react-icons/md";
import {FiFilm} from "react-icons/fi"
import {BsStopwatch} from "react-icons/bs"
import { GoHistory,GoHome} from "react-icons/go";
import { RxVideo } from "react-icons/rx";
import {FaRegNewspaper,FaVideo} from "react-icons/fa";
import {SiYoutubegaming} from "react-icons/si";
import {GrHomeRounded} from "react-icons/gr";
// import { useSelector } from "react-redux";
// import {Link} from "react-router-dom"



const Sidebar = () => {
  const isMenuOpen = useSelector((state) => state.toggle_app.isMenuOpen);

  return isMenuOpen ? (
    <div className="shadow-lg bg-fixed my-20 px-1">
      <ul className=" border-b pb-3 mb-3 px-7">
        <li className="flex  pl-2 pr-9 my-2 py-1  hover:bg-gray-100 rounded-md">
          <Link to="/">
            <span className="flex material-symbols-outlined p-1 font-thin hover:font-bold ">
              {/* Home */}
              <AiFillHome size={20}/>   <span className="pl-8"> Home </span>           </span>
          </Link>
        </li>

        <li className="flex pl-2 pr-9 my-2 py-1  hover:bg-gray-100 rounded-md">
            <span className="flex material-symbols-outlined p-1 font-thin hover:font-bold ">
              {/* Home */}
              <FaVideo size={20} />
          <span className="ml-7">Shorts</span>      </span>
        </li>

        <li className="flex  pl-2 pr-9 my-2 py-1  hover:bg-gray-100 rounded-md">
        <span className="flex material-symbols-outlined p-1 font-thin hover:font-bold ">
        <GoHistory size={25} />
          <span className="ml-7">History</span>
           </span>
        </li>

</ul>

<ul className=" border-b pb-3 mb-3 px-7 ">
        <li className="flex pl-2 pr-15 my-2 py-1  hover:bg-gray-100 rounded-md">
            <span className="flex material-symbols-outlined p-1 font-thin hover:font-bold ">
            <RxVideo size={25} />
          <span className="ml-7">Your Videos</span>
           </span>
        </li>

        <li className="flex pl-2 pr-15 my-2 py-1  hover:bg-gray-100 rounded-md">
            <span className="flex material-symbols-outlined p-1 font-thin hover:font-bold ">
            <BsStopwatch size={25} />
          <span className="ml-7">Watch Later</span>
           </span>
        </li>

        <li className="flex pl-2 pr-15 my-2 py-1  hover:bg-gray-100 rounded-md">
            <span className="flex material-symbols-outlined p-1 font-thin hover:font-bold ">
            <AiOutlineLike size={25} />
          <span className="ml-7">Liked Videos</span>
           </span>
        </li>

        <li className="flex pl-2 pr-9 my-2 py-1  hover:bg-gray-100 rounded-md">
            <span className="flex material-symbols-outlined p-1 font-thin hover:font-bold ">
            <FaRegNewspaper size={25} />
          <span className="ml-7">Trending</span>
           </span>
        </li>

        <li className="flex pl-2 pr-9 my-2 py-1  hover:bg-gray-100 rounded-md">
            <span className="flex material-symbols-outlined p-1 font-thin hover:font-bold ">
            <AiOutlineShopping size={25} />
          <span className="ml-7">Shopping</span>
           </span>
        </li>
</ul>

<ul className=" border-b pb-3 mb-3 px-7">

        <li className="flex  pl-2 pr-9 my-2 py-1  hover:bg-gray-100 rounded-md ">
            <span className="flex material-symbols-outlined p-1 font-thin hover:font-bold ">
            <MdOutlineMusicNote size={25} />
          <span className="ml-7">Music</span>
           </span>
        </li>  <li className="flex  pl-2 pr-9 my-2 py-1  hover:bg-gray-100 rounded-md">
            <span className="flex material-symbols-outlined p-1 font-thin hover:font-bold ">
            <FiFilm size={25} />
          <span className="ml-7">Film</span>
           </span>
        </li>  <li className="flex  pl-2 pr-9 my-2 py-1  hover:bg-gray-100 rounded-md">
            <span className="flex material-symbols-outlined p-1 font-thin hover:font-bold ">
            <SiYoutubegaming size={25} />
            <span className="ml-7">Gaming</span>
           </span>
        </li>  <li className="flex  pl-2 pr-9 my-2 py-1  hover:bg-gray-100 rounded-md">
            <span className="flex material-symbols-outlined p-1 font-thin hover:font-bold ">
            <AiOutlineTrophy size={25} />
            <span className="ml-7">Sports</span>
           </span>
        </li>  <li className="flex pl-2 pr-9 my-2 py-1  hover:bg-gray-100 rounded-md">
            <span className="flex material-symbols-outlined p-1 font-thin hover:font-bold ">
            <AiOutlineBulb size={25} />
            <span className="pl-7">Learning</span>
           </span>
        </li>
       </ul>
    </div>
  ) : null;
};

export default Sidebar;
