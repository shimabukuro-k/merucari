import styled from "styled-components";

export const InputText = (props) => {
  const { placeholder = "" } = props;
  return <SInput type="text" placeholder={placeholder} />;
};

const SInput = styled.input`
  width: 100%;
  margin-top: 7px;
  max-width: 500px;
  height: 35px;
  padding: 0 16px;
  background-color: #eeeeee;
  border: 2px solid #dddddd;
  border-radius: 2px;
`;
