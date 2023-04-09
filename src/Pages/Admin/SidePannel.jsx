import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import {
  FaCalendarAlt,
  FaChevronRight,
  FaRegChartBar,
  FaRegSun,
  FaStickyNote,
  FaTachometerAlt,
  FaWrench,
} from "react-icons/fa";

const SidePannel = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className={`absolute z-40 md:relative `}>
      <div
        className={`bg-blue-500 rounded-b-lg relative duration-300 ${
          open ? "px-[5px]" : "px-[25px] z-30"
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
              open ? "hidden" : "block"
            } md:block cursor-pointer`}
          >
            Admin Pannel
          </h1>
        </div>
        <div className="flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3]">
          <FaTachometerAlt color="white" />
          <p
            className={`text-[14px] ${
              open ? "hidden" : "block"
            } leading-[20px] font-bold text-white md:block `}
          >
            Dashboard
          </p>
        </div>
        <div className="pt-[15px] border-b-[1px]  border-[#EDEDED]/[0.3]">
          <p
            className={`text-[12px]  ${
              open ? "hidden" : "block"
            } md:block font-extrabold leading-[16px] text-white/[0.4]`}
          >
            INTERFACE
          </p>
          <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
            <div className="flex items-center gap-[10px]">
              <FaRegSun color="white" />
              <p
                className={`text-[14px]  ${
                  open ? "hidden" : "block"
                } font-normal md:block leading-[20px] text-white`}
              >
                Pages
              </p>
            </div>
            <FaChevronRight
              color="white"
              className={`${open && "hidden"} md:block`}
            />
          </div>
          <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
            <div className="flex items-center gap-[10px]">
              <FaRegChartBar color="white" />
              <p
                className={`text-[14px]  ${
                  open ? "hidden" : "block"
                } font-normal md:block leading-[20px] text-white`}
              >
                Charts
              </p>
            </div>
            <FaChevronRight
              color="white"
              className={`${open && "hidden"} md:block`}
            />
          </div>
        </div>
        <div className="pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]">
          <p
            className={`text-[12px]  ${
              open ? "hidden" : "block"
            } md:block font-extrabold leading-[16px] text-white/[0.4]`}
          >
            ADDONS
          </p>
          <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
            <div className="flex items-center gap-[10px]">
              <FaStickyNote color="white" />
              <p
                className={`text-[14px]  ${
                  open ? "hidden" : "block"
                } font-normal md:block leading-[20px] text-white`}
              >
                Components
              </p>
            </div>
            <FaChevronRight
              color="white"
              className={`${open && "hidden"} md:block`}
            />
          </div>
          <div className="flex items-center justify-between gap-[10px] py-[15px] cursor-pointer">
            <div className="flex items-center gap-[10px]">
              <FaWrench color="white" />
              <p
                className={`text-[14px]  ${
                  open ? "hidden" : "block"
                } font-normal md:block leading-[20px] text-white`}
              >
                Utilities
              </p>
            </div>
            <FaChevronRight
              color="white"
              className={`${open && "hidden"} md:block`}
            />
          </div>
          <div className="flex items-center gap-[10px] pb-[15px]">
            <FaCalendarAlt color="white" />
            <p
              className={`text-[14px]  ${
                open ? "hidden" : "block"
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
