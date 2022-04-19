import { useContext } from "react";
import styled from "styled-components";

import { LinkButton } from "../atoms/button/LinkButton";
import { UserContext } from "../../providers/UseProvider";

// CSS関連
const SItemListTitle = styled.div`
  max-width: 1000px;
  margin: auto;
  margin-bottom: 10px;
`;

export const HeaderBottom = () => {
  const { setHeadInfo } = useContext(UserContext);

  const onClickHead = () => {
    setHeadInfo(true);
  };

  return (
    <SItemListTitle>
      <LinkButton to="/merucari/Recommendation" onClick={onClickHead}>
        おすすめ
      </LinkButton>
      <LinkButton to="/merucari/mylist" onClick={onClickHead}>
        マイリスト
      </LinkButton>
      <LinkButton to="/merucari/pickup" onClick={onClickHead}>
        ピックアップ
      </LinkButton>
    </SItemListTitle>
  );
};
