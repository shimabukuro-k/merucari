import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";

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
      <button
        onClick={onClickBack}
        style={{ marginTop: "110px", position: "fixed", top: 0, left: 20 }}
      >
        &lt;
      </button>

      <div className="divStyle">
        <div className="red">
          {/* 左がわ */}
          <div className="imageLeft">
            <div style={{ float: "left" }}>
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
            </div>

            <div
              style={{
                float: "left",
                width: "400px",
                height: "400px",
                backgroundColor: "#666",
                marginLeft: "20px"
              }}
            >
              <img
                alt={state.id}
                style={{
                  height: "400px",
                  width: "400px"
                }}
                src={state.image}
              />
            </div>
            <div className="clear" />
          </div>

          <div
            style={{
              float: "right",
              maxWidth: "400px"
            }}
          >
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
          </div>
          <div className="clear" />
        </div>

        {/* 青背景 */}
        <div className="bule">
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
      </div>
    </>
  );
};
