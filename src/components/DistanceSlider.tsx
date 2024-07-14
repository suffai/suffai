import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";

interface DistanceSliderProps {
  min: number;
  max: number;
  step: number;
}

const DistanceSlider: React.FC<DistanceSliderProps> = ({ min, max, step }) => {
  const [values, setValues] = useState<number[]>([min, max]);

  return (
    <div className="w-full">
      <Range
        values={values}
        step={step}
        min={min}
        max={max}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "6px",
              width: "100%",
              background: getTrackBackground({
                values,
                colors: ["#D9D9D9", "#2E3B7F", "#D9D9D9"],
                min,
                max,
              }),
              borderRadius: "4px",
              margin: "0 5px",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props, index }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "15px",
              width: "15px",
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              border: "1px solid #2E3B7F",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #2E3B7F",
            }}
          >
            <div className="absolute top-[-25px] text-[16px] text-[#2E3B7F]">
              {values[index]}
            </div>
          </div>
        )}
      />
      <div className="flex justify-between mt-2 text-[20px] text-[#2E3B7F]">
        <span>{values[0]} km</span>
        <span>{values[1]} km</span>
      </div>
    </div>
  );
};

export default DistanceSlider;
