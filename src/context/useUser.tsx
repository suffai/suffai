import { useContext } from "react";
import { UserContext, UserContextState } from "./UserContext";

export const useUser = (): UserContextState => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
