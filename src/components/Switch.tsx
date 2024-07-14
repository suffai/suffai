import React from "react";

interface SwitchProps {
  isOn: boolean;
  handleToggle: () => void;
}

const Switch: React.FC<SwitchProps> = ({ isOn, handleToggle }) => {
  return (
    <div
      className={`w-20 h-12 flex items-center justify-start bg-white border-[#3771FF] border-2 rounded-full p-1 py-2 cursor-pointer ${
        isOn ? "border-[#3771FF]" : "border-gray-300"
      }`}
      onClick={handleToggle}
    >
      <div
        className={`w-8 h-8 rounded-full shadow-md transform transition-all ${
          isOn ? "translate-x-[100%] bg-[#3771FF]" : "translate-x-0 bg-gray-300"
        }`}
      />
    </div>
  );
};

export default Switch;
