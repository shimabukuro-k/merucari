import styled from "styled-components";

import { RogoButton } from "../atoms/button/RogoButton";
import { InputText } from "../atoms/input/InputText";

import { SellButton } from "../atoms/button/SellButton";
import { LinkButton } from "../atoms/button/LinkButton";
import { UserContext } from "../../providers/UseProvider";
import { useContext } from "react";

export const SearchInput = () => {
  const { setHeadInfo } = useContext(UserContext);

  const onClickHead = () => {
    setHeadInfo(true);
  };

  return (
    <SContener>
      <SWrapperLeft>
        <RogoButton>mercari</RogoButton>
        <InputText placeholder="なにをお探しですか？" />
      </SWrapperLeft>

      <SWrapperRight>
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
      </SWrapperRight>
    </SContener>
  );
};

const SContener = styled.div`
  display: flex;
  max-height: 40px;
`;

const SWrapperLeft = styled.div`
  display: flex;
  width: 50%;
  min-width: 50%;
  text-align: left;
`;

const SWrapperRight = styled.div`
  width: 50%;
  min-width: 50%;
  text-align: right;
`;
