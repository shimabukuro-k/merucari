import { ReactNode } from "react";
import styled from "styled-components";

import { BaseButton } from "./BaseButton";

type Props = {
  children: ReactNode;
};

export const SellButton = (props: Props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background: rgba(255, 51, 63);
  color: #fff;
`;
