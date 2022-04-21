import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

import { UserContext } from "../../../providers/UseProvider";
import { AccountIcon } from "../../molecules/AccountIcon";

// CSS関連
const SMenuBody = styled.div`
  border: 1px solid #ccc;
  border-radius: 2px;
  box-shadow: 0 0 7px #ccc;
  background-color: #fff;
  width: 300px;
  height: auto;
  position: absolute;
  top: 35px;
  right: 65px;
`;

const SLinkBox = styled.div`
  max-width: 100%;
  padding: 0px 10px;
  &:hover {
    background-color: #eeeeee;
    cursor: pointer;
  }
`;

const SMenu = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
`;

export const AccountMenu = () => {
  const history = useHistory();

  const { setHeadInfo } = useContext(UserContext);

  const onClickMenu = (path: string) => {
    history.push(`/merucari/${path}`);
    setHeadInfo(false);
  };

  return (
    <>
      <SMenuBody>
        <SLinkBox onClick={onClickMenu.bind(this, "accountInfo")}>
          <SMenu>
            <AccountIcon />
          </SMenu>
        </SLinkBox>

        <SLinkBox onClick={onClickMenu.bind(this, "myPage")}>
          <SMenu>マイページ</SMenu>
        </SLinkBox>
        <SLinkBox onClick={onClickMenu.bind(this, "favorites")}>
          <SMenu>いいね！した商品</SMenu>
        </SLinkBox>
        <SLinkBox onClick={onClickMenu.bind(this, "accountInfo")}>
          <SMenu>出品した商品(画面は特に実装しない)</SMenu>
        </SLinkBox>
        <SLinkBox onClick={onClickMenu.bind(this, "accountInfo")}>
          <SMenu>購入した商品(画面は特に実装しない)</SMenu>
        </SLinkBox>
      </SMenuBody>
    </>
  );
};
