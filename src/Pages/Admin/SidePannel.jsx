import React, { useState } from "react";
import { BsArrowLeftShort, BsPeople, BsPeopleFill } from "react-icons/bs";
import {
  FaCalendarAlt,
  FaChevronRight,
  FaIndustry,
  FaLanguage,
  FaList,
  FaRegChartBar,
  FaRegSun,
  FaStickyNote,
  FaTachometerAlt,
  FaWrench,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SidePannel = () => {
  const [open, setOpen] = useState(false);
  const [openSublist1, setOpenSublist1] = useState(false);
  const [openSublist2, setOpenSublist2] = useState(false);
  const [openSublist3, setOpenSublist3] = useState(false);
  const [openSublist4, setOpenSublist4] = useState(false);
  const [openSublist5, setOpenSublist5] = useState(false);
  return (
    <div className={`absolute z-40 md:relative `}>
      <div
        className={`bg-blue-500 rounded-b-lg relative duration-300 ${
          open ? "px-[25px] z-30" : "px-[5px]"
        } min-h-screen  md:px-[25px]`}
      >
        <BsArrowLeftShort
          onClick={() => setOpen(!open)}
          className={`bg-white block md:hidden text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${
            open && "rotate-180"
          }`}
        />
        <div className="px-[15px] py-[30px] flex-column items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]">
          <h1
            className={`text-white text-[20px] duration-300 leading-[24px] font-entrabold  ${
              open ? "block" : "hidden"
            } md:block cursor-pointer`}
          >
            Admin Pannel
          </h1>
        </div>
        <div className="flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3]">
          <FaTachometerAlt color="white" />
          <p
            className={`text-[14px] ${
              open ? "block" : "hidden"
            } leading-[20px] font-bold text-white md:block `}
          >
            Dashboard
          </p>
        </div>
        <div className="pt-[15px] border-b-[1px]  border-[#EDEDED]/[0.3]">
          <p
            className={`text-[12px]  ${
              open ? "block" : "hidden"
            } md:block font-extrabold leading-[16px] text-white/[0.4]`}
          >
            INTERFACE
          </p>
          <div>
            <div
              className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer "
              onClick={() => setOpenSublist1(!openSublist1)}
            >
              <div className="flex items-center  gap-[10px]">
                <BsPeopleFill color="white" />
                <p
                  className={`text-[14px]  ${
                    open ? "block" : "hidden"
                  } font-normal md:block leading-[20px] text-white`}
                >
                  Users
                </p>
              </div>
              <FaChevronRight
                color="white"
                className={`${open ? "block" : "hidden"} ${
                  openSublist1 && "rotate-90"
                } md:block`}
              />
            </div>
            <ul
              className={`list-none pl-[1rem] text-sm text-white/[0.8] duration-500 pt-[-30px] ${
                openSublist1 ? "block" : "hidden"
              }`}
            >
              <li className="cursor-pointer hover:font-bold pb-[5px]">
                View Users
              </li>
              <li className="cursor-pointer hover:font-bold pb-[5px]">
                New Users
              </li>
              <li className="cursor-pointer hover:font-bold pb-[5px]">Add</li>
              <li className="cursor-pointer hover:font-bold pb-[5px]">Edit</li>
              <li className="cursor-pointer hover:font-bold">Delete </li>
            </ul>
          </div>
          <div>
            <div
              className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer "
              onClick={() => setOpenSublist2(!openSublist2)}
            >
              <div className="flex items-center gap-[10px]">
                <FaRegChartBar color="white" />
                <p
                  className={`text-[14px]  ${
                    open ? "block" : "hidden"
                  } font-normal md:block leading-[20px] text-white`}
                >
                  Movies
                </p>
              </div>
              <FaChevronRight
                color="white"
                className={`${open ? "block" : "hidden"} ${
                  openSublist2 && "rotate-90"
                } md:block`}
              />
            </div>
            <ul
              className={`list-none pl-[1rem] text-sm text-white/[0.8] duration-500 pt-[-30px] ${
                openSublist2 ? "block" : "hidden"
              }`}
            >
              <li className="cursor-pointer hover:font-bold pb-[5px]">
                View Movies
              </li>
              <li className="cursor-pointer hover:font-bold pb-[5px]">
                New Movies
              </li>
              <li className="cursor-pointer hover:font-bold pb-[5px]">Add</li>
              <li className="cursor-pointer hover:font-bold pb-[5px]">Edit</li>
              <li className="cursor-pointer hover:font-bold">Delete </li>
            </ul>
          </div>
          <div>
            <div
              className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer"
              onClick={() => setOpenSublist3(!openSublist3)}
            >
              <div className="flex items-center gap-[10px]">
                <FaList color="white" />
                <p
                  className={`text-[14px]  ${
                    open ? "block" : "hidden"
                  } font-normal md:block leading-[20px] text-white`}
                >
                  Genre
                </p>
              </div>
              <FaChevronRight
                color="white"
                className={`${open ? "block" : "hidden"} ${
                  openSublist3 && "rotate-90"
                } md:block`}
              />
            </div>
            <ul
              className={`list-none pl-[1rem] text-sm text-white/[0.8] duration-500 pt-[-30px] ${
                openSublist3 ? "block" : "hidden"
              }`}
            >
              <li className="cursor-pointer hover:font-bold pb-[5px]">
                View Genre
              </li>
              <li className="cursor-pointer hover:font-bold pb-[5px]">
                <Link to={"genre"}>Add</Link>{" "}
              </li>
              <li className="cursor-pointer hover:font-bold pb-[5px]">Edit</li>
              <li className="cursor-pointer hover:font-bold">Delete </li>
            </ul>
          </div>
          <div>
            <div
              className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer"
              onClick={() => setOpenSublist4(!openSublist4)}
            >
              <div className="flex items-center gap-[10px]">
                <FaIndustry color="white" />
                <p
                  className={`text-[14px]  ${
                    open ? "block" : "hidden"
                  } font-normal md:block leading-[20px] text-white`}
                >
                  Companies
                </p>
              </div>
              <FaChevronRight
                color="white"
                className={`${open ? "block" : "hidden"} ${
                  openSublist4 && "rotate-90"
                } md:block`}
              />
            </div>
            <ul
              className={`list-none pl-[1rem] text-sm text-white/[0.8] duration-500 pt-[-30px] ${
                openSublist4 ? "block" : "hidden"
              }`}
            >
              <li className="cursor-pointer hover:font-bold pb-[5px]">
                View Companies
              </li>
              <li className="cursor-pointer hover:font-bold pb-[5px]">Add</li>
              <li className="cursor-pointer hover:font-bold pb-[5px]">Edit</li>
              <li className="cursor-pointer hover:font-bold">Delete </li>
            </ul>
          </div>
          <div>
            <div
              className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer"
              onClick={() => setOpenSublist5(!openSublist5)}
            >
              <div className="flex items-center gap-[10px]">
                <FaLanguage color="white" />
                <p
                  className={`text-[14px]  ${
                    open ? "block" : "hidden"
                  } font-normal md:block leading-[20px] text-white`}
                >
                  Languages
                </p>
              </div>
              <FaChevronRight
                color="white"
                className={`${open ? "block" : "hidden"} ${
                  openSublist5 && "rotate-90"
                } md:block`}
              />
            </div>
            <ul
              className={`list-none pl-[1rem] text-sm text-white/[0.8] duration-500 pt-[-30px] ${
                openSublist5 ? "block" : "hidden"
              }`}
            >
              <li className="cursor-pointer hover:font-bold pb-[5px]">
                View Language
              </li>
              <li className="cursor-pointer hover:font-bold pb-[5px]">
                <Link to={"language"}>Add</Link>{" "}
              </li>
              <li className="cursor-pointer hover:font-bold pb-[5px]">Edit</li>
              <li className="cursor-pointer hover:font-bold">Delete </li>
            </ul>
          </div>
        </div>
        <div className="pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]">
          <p
            className={`text-[12px]  ${
              open ? "block" : "hidden"
            } md:block font-extrabold leading-[16px] text-white/[0.4]`}
          >
            ADDONS
          </p>
          <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
            <div className="flex items-center gap-[10px]">
              <FaStickyNote color="white" />
              <p
                className={`text-[14px]  ${
                  open ? "block" : "hidden"
                } font-normal md:block leading-[20px] text-white`}
              >
                Components
              </p>
            </div>
            <FaChevronRight
              color="white"
              className={`${open ? "block" : "hidden"} md:block`}
            />
          </div>
          <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
            <div className="flex items-center gap-[10px]">
              <FaWrench color="white" />
              <p
                className={`text-[14px]  ${
                  open ? "block" : "hidden"
                } font-normal md:block leading-[20px] text-white`}
              >
                Utilities
              </p>
            </div>
            <FaChevronRight
              color="white"
              className={`${open ? "block" : "hidden"} md:block`}
            />
          </div>
          <div className="flex items-center gap-[10px] pb-[15px]">
            <FaCalendarAlt color="white" />
            <p
              className={`text-[14px]  ${
                open ? "block" : "hidden"
              } font-normal md:block leading-[20px] text-white`}
            >
              Tables
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SidePannel;
