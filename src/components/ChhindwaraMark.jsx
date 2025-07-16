import React from "react";
import { BsGearWide } from "react-icons/bs";

const ChhindwaraMark = ({
  gearSize = "text-5xl",
  spin = true,
  className = "",
}) => {
  return (
    <div className={`flex flex-col items-center space-y-2 ${className}`}>
      {/* Gear Icon */}
      <div className="relative">
        <BsGearWide
          className={`${gearSize} text-[#E9D700] drop-shadow-md ${
            spin
              ? "animate-[spin_6s_linear_infinite] hover:animate-[spin_1.5s_linear_infinite]"
              : ""
          }`}
        />
      </div>

      {/* Main Title */}
      <div className="text-3xl font-extrabold text-gray-800 uppercase tracking-wide">
        Chhindwara
      </div>

      {/* Tagline */}
      <div className="inline-block px-5 py-1 rounded-full shadow-sm">
        <span className="text-2xl font-bold text-gray-800 tracking-wide">
          Bike Services
        </span>
      </div>
    </div>
  );
};

export default ChhindwaraMark;
