import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
  children: ReactNode;
  to: string;
};

export const LinkButton = (props: Props) => {
  const { children, to } = props;

  return <SLink to={to}>{children}</SLink>;
};

export const SLink = styled(Link)`
  text-decoration: none;
  color: black;
  border-radius: 5px;
  padding: 10px;
  &:hover {
    background-color: #eeeeee;
  }
`;
