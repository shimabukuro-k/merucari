import { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";

import { UserContext } from "../../providers/UseProvider";
import { ItemCard } from "../ogarnisms/Items/ItemCard";

const items = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    image: "https://source.unsplash.com/random",
    itemName: `長い商品名が来たら折り返して表示する_${val}`
  };
});

export const ItemInfo = () => {
  const { state } = useLocation();

  const { setHeadInfo } = useContext(UserContext);
  setHeadInfo(false);

  const history = useHistory();

  const onClickBack = () => {
    history.goBack();
    setHeadInfo(true);
  };

  return (
    <>
      <STop>
        <SBottonPos onClick={onClickBack}>&lt;</SBottonPos>

        <SBody>
          <div>
            {/* 左がわ */}
            <SImageLeft>
              <SFloatLeft>
                <img
                  alt={state.id}
                  style={{ height: "60px", width: "60px" }}
                  src={state.image}
                />
                <br />
                <img
                  alt={state.id}
                  style={{ height: "60px", width: "60px" }}
                  src={state.image}
                />
                <br />
                <img
                  alt={state.id}
                  style={{ height: "60px", width: "60px" }}
                  src={state.image}
                />
                <br />
              </SFloatLeft>

              <SMainImageDiv>
                <SImage alt={state.id} src={state.image} />
              </SMainImageDiv>
              <div className="clear" />
            </SImageLeft>

            <SFloatRight>
              <h1 style={{ margin: 0 }}>{state.itemName}</h1>
              <h2>商品説明</h2>
              <p>あああああああああああ</p>
              <p>あああああああああああ</p>
              <p>あああああああああああ</p>
              <p>あああああああああああ</p>
              <p>あああああああああああ</p>
              <h2>商品情報</h2>
              <p>いいいいいいいいいいい</p>
              <p>いいいいいいいいいいい</p>
              <p>いいいいいいいいいいい</p>
              <p>いいいいいいいいいいい</p>
              <p>いいいいいいいいいいい</p>
              <p>いいいいいいいいいいい</p>
              <h2>出品者</h2>
              <p>うううううううううううううう</p>
              <p>うううううううううううううう</p>
              <p>うううううううううううううう</p>
              <p>うううううううううううううう</p>
              <p>うううううううううううううう</p>
              <p>うううううううううううううう</p>
              <h2>コメント</h2>
              <p>えええええええええええ</p>
              <p>えええええええええええ</p>
              <p>えええええええええええ</p>
              <p>えええええええええええ</p>
              <p>えええええええええええ</p>
            </SFloatRight>
            <div className="clear" />
          </div>

          <div>
            <h2>この商品を見ている人におすすめ</h2>
            <div className="cardArea">
              {items.map((item) => (
                <ItemCard
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  itemName={item.itemName}
                />
              ))}
            </div>
          </div>
        </SBody>
      </STop>
    </>
  );
};

const STop = styled.div`
  margin-top: 160px;
`;

const SBottonPos = styled.button`
  margin-top: 110px;
  position: fixed;
  top: 0;
  left: 20;
`;

const SBody = styled.div`
  max-width: 1000px;
  margin: 130px auto 0 auto;
  height: auto;
`;

const SImageLeft = styled.div`
  width: 50%;
  float: left;
  position: sticky;
  top: 130px;
`;

const SFloatLeft = styled.div`
  float: left;
`;

const SFloatRight = styled.div`
  float: right;
  max-width: 400px;
`;

const SMainImageDiv = styled.div`
  float: left;
  width: 400px;
  height: 400px;
  background-color: #666;
  margin-left: 20px;
`;

const SImage = styled.img`
  height: 400px;
  width: 400px;
`;
