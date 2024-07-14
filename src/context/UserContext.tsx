import React, { createContext, useState, useEffect, ReactNode } from "react";

interface User {
  id: string;
  userName: string;
  phoneNumber: string;
  email: string;
  gender: string;
  dob: string;
  lat: number;
  lng: number;
  imageUrl: string;
  country: string;
  state: string;
  city: string;
}

export interface UserContextState {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const UserContext = createContext<UserContextState | undefined>(
  undefined
);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(() => {
    const userJson = sessionStorage.getItem("user");
    return userJson ? JSON.parse(userJson) : null;
  });

  useEffect(() => {
    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
    } else {
      sessionStorage.removeItem("user");
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
