import { useContext } from "react";
import styled from "styled-components";

import { UserContext } from "../../../providers/UseProvider";
import { SearchInput } from "../../molecules/SearchInput";
import { HeaderBottom } from "../../molecules/HeaderBottom";

// CSS関連
const SBody = styled.div`
  margin: 10px;
  position: relative;
`;

export const Header = () => {
  const { headInfo } = useContext<any>(UserContext);
  return (
    <header>
      <SBody>
        <SearchInput />
      </SBody>
      <br />

      {headInfo && <HeaderBottom />}
    </header>
  );
};
