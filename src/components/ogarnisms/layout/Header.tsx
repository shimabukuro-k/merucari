import { memo, VFC } from "react";
import { Link } from "react-router-dom";

export const Header: VFC = memo(() => {
  return (
    <header
      style={{
        height: "auto",
        width: "100%",
        borderBottom: "2px solid #ccc",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "white"
      }}
    >
      <div style={{ float: "left", margin: "10px" }}>
        <button style={{ margin: "5px" }}>mercari</button>
        <input placeholder="なにをお探しですか？" style={{ margin: "5px" }} />
      </div>

      <div style={{ float: "right", margin: "10px" }}>
        <Link to="/home/info" style={{ margin: "5px" }}>
          お知らせ
        </Link>
        <Link to="/home/todo" style={{ margin: "5px" }}>
          やることリスト
        </Link>
        <Link to="/home/account" style={{ margin: "5px" }}>
          アカウント
        </Link>
        <button style={{ margin: "5px" }}>出品</button>
      </div>

      <div className="clear" />

      <br />

      <div style={{ maxWidth: "1000px", margin: "auto" }}>
        <Link to="/home/Recommendation">おすすめ</Link>
        <Link to="/home/mylist">マイリスト</Link>
        <Link to="/home/pickup">ピックアップ</Link>
      </div>
    </header>
  );
});
