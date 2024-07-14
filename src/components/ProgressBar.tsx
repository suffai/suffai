import React from "react";

interface ProgressBarProps {
  value: number;
  maxValue: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, maxValue }) => {
  const percentage = (value / maxValue) * 100;

  return (
    <div className="w-full bg-white border border-[#D9D9D9] rounded-full h-8">
      <div
        className="bg-[#FFAE1B] h-full rounded-full"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;