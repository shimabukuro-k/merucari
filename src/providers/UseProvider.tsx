import { createContext, ReactNode, useState } from "react";

export const UserContext = createContext({});

type Props = {
  children: ReactNode;
};

export const UseProvider = (props: Props) => {
  const { children } = props;

  const [headInfo, setHeadInfo] = useState<boolean>(true);

  return (
    <UserContext.Provider value={{ headInfo, setHeadInfo }}>
      {children}
    </UserContext.Provider>
  );
};
