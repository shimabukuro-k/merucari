import styled from "styled-components";

export const InputText = (props) => {
  const { placeholder = "" } = props;
  return <SInput type="text" placeholder={placeholder} />;
};

const SInput = styled.input`
  width: 100%;
  max-width: 500px;
  height: 35px;
  padding: 0 16px;
  margin-left: 10px;
  background-color: #eeeeee;
  border: 2px solid #dddddd;
  border-radius: 2px;
  outline-color: black;
`;
