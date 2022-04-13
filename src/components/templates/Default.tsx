import { ReactNode } from "react";

import { Header } from "../ogarnisms/layout/Header";
import { Footer } from "../ogarnisms/layout/Footer";

type Props = {
  children: ReactNode;
};

export const Default = (props: Props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
