import styled from "styled-components";

import { RogoButton } from "../atoms/button/RogoButton";
import { InputText } from "../atoms/input/InputText";

import { SellButton } from "../atoms/button/SellButton";
import { LinkButton } from "../atoms/button/LinkButton";
import { AccountButton } from "../atoms/button/AccountButton";
import { UserContext } from "../../providers/UseProvider";
import { useContext, useState } from "react";
import { AccountMenu } from "../ogarnisms/account/AccountMenu";
import { useHistory } from "react-router-dom";

// CSS関連
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

export const SearchInput = () => {
  // ヘッダーの「おすすめ〜ピックアップ」
  const { setHeadInfo } = useContext<any>(UserContext);
  const onClickHead = () => {
    setHeadInfo(false);
  };

  // メルカリボタン
  const history = useHistory();
  const onClickHeadView = () => {
    history.push("/merucari/Recommendation");
    setHeadInfo(true);
  };

  // アカウントメニューの表示・非表示
  const [AccountMenuFlg, setAccountMenuFlg] = useState(false);
  const onClickOpenMenu = () => {
    setAccountMenuFlg(!AccountMenuFlg);
  };

  return (
    <>
      <SContener>
        <SWrapperLeft>
          <RogoButton onClick={onClickHeadView}>mercari</RogoButton>
          <InputText placeholder="なにをお探しですか？" />
        </SWrapperLeft>

        <SWrapperRight>
          <LinkButton to="/merucari/info" onClick={onClickHead}>
            お知らせ
          </LinkButton>

          <LinkButton to="/merucari/todo" onClick={onClickHead}>
            やることリスト
          </LinkButton>

          <AccountButton onClick={onClickOpenMenu}>アカウント</AccountButton>
          <SellButton>出品</SellButton>
        </SWrapperRight>
      </SContener>

      {/* アカウントメニュー */}
      {AccountMenuFlg && <AccountMenu />}
    </>
  );
};
