import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

// CSS関連
const SMenuBody = styled.div`
  border: 1px solid #ccc;
  border-radius: 2px;
  box-shadow: 0 0 7px #ccc;
  background-color: #fff;
  width: 300px;
  height: auto;
  padding: 5px 10px;
  position: absolute;
  top: 35px;
  right: 65px;
`;

const SLinkBox = styled.div`
  width: 100%;
  padding: 10px 0px;
  border-bottom: 1px solid #ccc;
  /* &:hover {
    background-color: #eeeeee;
    cursor: pointer;
  } */
`;

const SLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 10px 0 10px 0;
  padding:
  &:hover {
    background-color: #eeeeee;
    cursor: pointer;
  }
`;

export const AccountMenu = () => {
  return (
    <>
      <SMenuBody>
        <SLinkBox>
          <SLink to="/merucari/accountInfo">アカウントINFO</SLink>
        </SLinkBox>
        <SLinkBox>
          <SLink to="/merucari/myPage">マイページ</SLink>
        </SLinkBox>
        <SLinkBox>
          <SLink to="/merucari/favorites">いいね！した商品</SLink>
        </SLinkBox>
        <SLinkBox>
          <SLink to="/merucari/accountInfo">出品した商品</SLink>
        </SLinkBox>
        <SLinkBox>
          <SLink to="/merucari/accountInfo">購入した商品</SLink>
        </SLinkBox>
      </SMenuBody>
    </>
  );
};
