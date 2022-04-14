import styled from "styled-components";

// CSS関連
const SMenuBody = styled.ul`
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

const SLi = styled.li`
  list-style: none;
  margin: 0px;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const SLiLast = styled.li`
  list-style: none;
  margin: 0px;
  padding: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const AccountMenu = () => {
  const onClickMenu = () => {
    alert("メニュー押下");
  };

  return (
    <>
      <SMenuBody>
        <SLi onClick={onClickMenu}>アカウントINFO</SLi>
        <SLi>マイページ</SLi>
        <SLi>いいね！した商品</SLi>
        <SLi>出品した商品</SLi>
        <SLiLast>購入した商品</SLiLast>
      </SMenuBody>
    </>
  );
};
