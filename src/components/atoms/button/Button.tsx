import styled from "styled-components";

export const Button = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

const SButton = styled.button`
  background: rgba(255, 51, 63);
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  padding: 10px 18px;
  margin: 5px;
`;
