import { useContext } from "react";
import styled from "styled-components";

import { UserContext } from "../../providers/UseProvider";
import { SellButton } from "../atoms/button/SellButton";
import { LinkButton } from "../atoms/button/LinkButton";

export const HeaderRight = () => {
  const { setHeadInfo } = useContext(UserContext);

  const onClickHead = () => {
    console.log("ここが表示されればOK");
    setHeadInfo(true);
  };

  return (
    <div>
      <LinkButton to="/merucari/info" onClick={onClickHead}>
        お知らせ
      </LinkButton>

      <LinkButton to="/merucari/todo" onClick={onClickHead}>
        やることリスト
      </LinkButton>

      <LinkButton to="/merucari/account" onClick={onClickHead}>
        アカウント
      </LinkButton>

      <SellButton>出品</SellButton>
    </div>
  );
};
