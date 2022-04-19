import styled from "styled-components";

// CSS関連
const SBox = styled.div`
  height: auto;
  width: auto;
  align-items: center;
`;

const SImage = styled.div`
  height: auto;
  margin: 0;
  float: left;
  background-color: #ccc;
`;

const SInfo = styled.div`
  float: left;
`;

const SIcon = styled.img`
  width: 50px;
  height: 50px;
`;

const Stext = styled.p`
  font-size: 16px;
  margin: 2px;
`;

export const AccountIcon = () => {
  return (
    <>
      <SBox>
        <SImage>
          <SIcon src="https://source.unsplash.com/random" />
        </SImage>

        <SInfo>
          <Stext>アカウント名</Stext>
          <Stext>★★★★★</Stext>
          <Stext>本人確認</Stext>
        </SInfo>
        <div style={{ clear: "both" }} />
      </SBox>
    </>
  );
};
