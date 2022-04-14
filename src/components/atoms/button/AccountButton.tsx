import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

export const AccountButton = (props: Props) => {
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
};

const SButton = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 5px;
  padding: 7px 10px;
  margin-right: 5px;
  font-size: 15px;
  color: black;
  &:hover {
    background-color: rgba(0, 0, 0, 0.07);
  }
`;
