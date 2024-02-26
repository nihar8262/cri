import React from "react";
import "./App.css"
import logo from "./assets/logo.png";
import image1 from "./assets/1.png";
import image2 from "./assets/2.png";
import image3 from "./assets/3.png";
import {IoMdCall} from "react-icons/io"
import {FaFacebook} from "react-icons/fa"
import {HiGlobeAlt} from "react-icons/hi2"

function App() {
  return (
    <div className="bg-gradient-to-b from-white to-yellow-200">
      {/* logo */}
      <div className="w-72 mx-auto" >
        <img src={logo}/>
      </div>

      <div className=" flex-col  md:flex md:flex-row items-center">
        {/* Award */}
        <div className="mx-auto">
          <img src={image1} className="md:w-[52vw] w-[60vw] ml-20 md:ml-0"/>
        </div>
        {/* details */}
        <div className="p-2">
          <h1 className="font-bold ">C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h1>
          <ul className="px-5 pb-3">
            <li>• C.R.I's energy efficient products are well recognized by
               various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li>• C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to
               replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel</li>
          </ul>

         

          {/* image */}
          <div>
            <img src={image2}/>
          </div>

          <div className="pt-2">Government of India has awarded the <span className="font-bold">"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director
             of C.R.1. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State</div>
        </div>
      </div>

      <div className="pt-10 text-center">
        <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION</p>
      </div>

      {/* image */}
      <div className="px-5 md:px-32">
        <img src={image3} className=""/>
      </div>

      <div className="text-center pt-3 pb-2">
        <p>Valves - Pumps - Pipes -IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
      </div>

      <div className="px-5">
        <div className="bg-red-600 h-1 "></div>
      </div>

      <div className="font-bold text-center pt-3">
        <p>C.R.I FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
      </div>
      
      <div className=" text-center pt-3 px-5">
        <p>CHEMICALS & PROCESS <span className="border-r-2 border-red-500   mx-1"></span> POWER <span className="border-r-2 border-red-500  mx-1 "></span>
         WATER & WASTE WATER <span className="border-r-2 border-red-500  mx-1 "></span> OILS & GAS <span className="border-r-2 border-red-500  mx-1 "></span>
          PHARMA <span className="border-r-2 border-red-500  mx-1 "></span> SUGARS & DISTILLERIES <span className="border-r-2 border-red-500  mx-1 "></span>
          PAPER & PULP <span className="border-r-2 border-red-500  mx-1 "></span> MARINE & DEFENCE <span className="border-r-2 border-red-500  mx-1 "></span>
          METAL & MINING <span className="border-r-2 border-red-500  mx-1 "></span> FOOD & BEVERAGE <span className="border-r-2 border-red-500  mx-1 "></span>
          PETROCHEMICAL & REFINERIES <span className="border-r-2 border-red-500  mx-1 "></span> SOLAR BUILDING <span className="border-r-2 border-red-500  mx-1 "></span>
           HVAC <span className="border-r-2 border-red-500  mx-1 "></span> FIRE FIGHTING <span className="border-r-2 border-red-500  mx-1 "></span> AGRICULTURE & RESIDENTIAL</p>
      </div>

      <div className="pt-5 px-3 pb-3">
      <div className="md:flex md:flex-row flex-col md:pl-0 pl-16   md:justify-evenly bg-red-600 py-5 pb-16">
        <div className="flex text-white gap-2">
          <IoMdCall/>
          <p>Toll free <span>1800 200 1234</span></p>
        </div>

        <div className="flex text-white gap-2">
          <FaFacebook/>
          <p>www.facebook.com/cripumps</p>
        </div>

        <div className="flex text-white gap-2">
          <HiGlobeAlt/>
          <p>www.crigroups.com</p>
        </div>
      </div>
      </div>

      
    </div>
  );
}

export default App;
