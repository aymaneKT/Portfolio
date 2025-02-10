import { createContext, ReactNode, useState } from "react";

type childrenProps = {
  children: ReactNode;
};
type typeContext = {
  isDroppedTheMenu: boolean;
  setisDroppedTheMenu: (value: boolean) => void;
};

export const DeviceContext = createContext<typeContext | undefined>(undefined);

export const DeviceContextProvider = ({ children }: childrenProps) => {
  const [isDroppedTheMenu, setisDroppedTheMenu] = useState<boolean>(false);
  return (
    <DeviceContext.Provider
      value={{
        isDroppedTheMenu: isDroppedTheMenu,
        setisDroppedTheMenu: setisDroppedTheMenu,
      }}
    >
      {children}
    </DeviceContext.Provider>
  );
};
