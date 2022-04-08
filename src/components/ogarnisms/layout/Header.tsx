import { memo, VFC } from "react";
import { Link } from "react-router-dom";

import { Button } from "../../atoms/button/Button";
import { InputText } from "../../atoms/input/InputText";

export const Header: VFC = memo(() => {
  return (
    <header>
      <div
        style={{
          margin: "10px"
        }}
      >
        <div style={{ float: "left" }}>
          <button style={{ margin: "15px" }}>mercari</button>
        </div>
        <InputText placeholder="なにをお探しですか？" />

        <div style={{ float: "right" }}>
          <Link to="/home/info" className="linkbutton">
            お知らせ
          </Link>
          <Link to="/home/todo" className="linkbutton">
            やることリスト
          </Link>
          <Link to="/home/account" className="linkbutton">
            アカウント
          </Link>
          <Button>出品</Button>
        </div>
        <div className="clear" />
      </div>
      <br />

      {/* コンポーネント化する */}
      <div style={{ maxWidth: "1000px", margin: "auto" }}>
        <Link to="/home/Recommendation" className="linkbutton">
          おすすめ
        </Link>
        <Link to="/home/mylist" className="linkbutton">
          マイリスト
        </Link>
        <Link to="/home/pickup" className="linkbutton">
          ピックアップ
        </Link>
      </div>
    </header>
  );
});
