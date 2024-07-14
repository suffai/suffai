// AlertContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import Alert from "./Alert";

interface AlertContextType {
  showAlert: (message: string, type: "success" | "error") => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
};

export const AlertProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [alert, setAlert] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const showAlert = (message: string, type: "success" | "error") => {
    setAlert({ message, type });
  };

  const handleClose = () => {
    setAlert(null);
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alert && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={handleClose}
        />
      )}
    </AlertContext.Provider>
  );
};
