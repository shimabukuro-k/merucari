import { useHistory, useLocation } from "react-router-dom";

export const ItemInfo = () => {
  const { state } = useLocation();

  const history = useHistory();
  const onClickBack = () => history.goBack();

  return (
    <>
      <button onClick={onClickBack}>&lt;</button>
      <div>
        <div style={{ width: "50%", float: "left" }}>
          <div style={{ float: "left" }}>
            <img
              alt={state.id}
              style={{ height: "100px", width: "100px" }}
              src={state.image}
            />
          </div>
          <div style={{ height: "592px", width: "592px", float: "right" }}>
            <img
              alt={state.id}
              style={{ height: "100%", width: "100%" }}
              src={state.image}
            />
          </div>
        </div>

        <div style={{ float: "right" }}>
          <h1>{state.itemName}</h1>
          <h2>商品説明</h2>
          <h2>商品情報</h2>
          <h2>出品者</h2>
          <h2>コメント</h2>
        </div>
      </div>
    </>
  );
};
