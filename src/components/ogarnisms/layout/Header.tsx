import { memo, useContext, VFC } from "react";
import styled from "styled-components";

import { UserContext } from "../../../providers/UseProvider";
import { SearchInput } from "../../molecules/SearchInput";
import { LinkButton } from "../../atoms/button/LinkButton";

export const Header: VFC = memo(() => {
  const { headInfo, setHeadInfo } = useContext(UserContext);

  const onClickHead = () => {
    setHeadInfo(true);
  };

  return (
    <header>
      <div
        style={{
          margin: "10px"
        }}
      >
        <SearchInput />
      </div>
      <br />

      {headInfo && (
        <div
          style={{ maxWidth: "1000px", margin: "auto", marginBottom: "10px" }}
        >
          <LinkButton to="/merucari/Recommendation" onClick={onClickHead}>
            おすすめ
          </LinkButton>
          <LinkButton to="/merucari/mylist" onClick={onClickHead}>
            マイリスト
          </LinkButton>
          <LinkButton to="/merucari/pickup" onClick={onClickHead}>
            ピックアップ
          </LinkButton>
        </div>
      )}
    </header>
  );
});
