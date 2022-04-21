import styled from "styled-components";

// CSS関連
const SBox = styled.div`
  height: auto;
  width: auto;
  align-items: center;
  display: flex;
`;

const SIconBox = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  background-color: #ccc;
`;
const SImg = styled.img`
  width: 50px;
  height: 50px;
`;

const SInfo = styled.div``;
const Stext = styled.p`
  font-size: 16px;
  margin: 2px;
`;

export const AccountIcon = () => {
  return (
    <>
      <SBox>
        <SIconBox>
          <SImg src="https://source.unsplash.com/random" />
        </SIconBox>

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
