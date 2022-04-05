import { memo, VFC } from "react";
import { Link } from "react-router-dom";

export const Header: VFC = memo(() => {
  return (
    <header
      style={{
        height: "50px",
        borderBottom: "2px solid #ccc"
      }}
    >
      <button>mercari</button>
      <input placeholder="なにをお探しですか？" />
      <Link to="/home/info">お知らせ</Link>
      <Link to="/home/todo">やることリスト</Link>
      <Link to="/home/account">アカウント</Link>
      <button>出品</button>
      <br />
      <Link to="/home/Recommendation">おすすめ</Link>
      <Link to="/home/mylist">マイリスト</Link>
      <Link to="/home/pickup">ピックアップ</Link>
    </header>
  );
});
