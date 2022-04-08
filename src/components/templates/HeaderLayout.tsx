import { memo, ReactNode, VFC } from "react";

import { Header } from "../ogarnisms/layout/Header";
import { Footer } from "../ogarnisms/layout/Footer";

type Props = {
  children: ReactNode;
};

export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
});
