import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export const UseProvider = (props) => {
  const { children } = props;

  const [headInfo, setHeadInfo] = useState(true);

  return (
    <UserContext.Provider value={{ headInfo, setHeadInfo }}>
      {children}
    </UserContext.Provider>
  );
};
