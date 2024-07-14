// Alert.tsx
import React, { useEffect, useState } from "react";
import "../assets/css/alert.css";

interface AlertProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, type, onClose }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 50); // Update every 50ms for a total of 5000ms

    const timer = setTimeout(onClose, 5000); // Auto close after 5 seconds

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div
      className={`alert fixed top-48 right-8 p-8 rounded-[5px] flex items-center justify-between shadow-[0_0_10px_rgba(0, 0, 0, 0.1)] text-[2rem] z-[1000] w-[30%] font-['Quicksand'] ${type}`}
    >
      <span>{message}</span>
      <button
        onClick={onClose}
        className="close-btn bg-transparent border-0 text-[3rem] cursor-pointer"
      >
        &times;
      </button>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default Alert;
