import { memo, VFC } from "react";

export const MyList: VFC = memo(() => {
  return (
    <div className="top">
      <p>マイリスト画面</p>
      <div>
        <h2>保存した検索条件</h2>
        <p>保存している検索条件はありません</p>
      </div>

      <div>
        <h2>あなたの興味のある商品</h2>
        <p style={{ fontWeight: "bold" }}>最近閲覧した商品</p>

        <div>
          <div
            style={{
              height: "180px",
              width: "183px",
              backgroundColor: "red"
            }}
          ></div>
          <p>商品名</p>
        </div>
      </div>
    </div>
  );
});
