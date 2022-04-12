import { memo, useContext, VFC } from "react";
import { Link } from "react-router-dom";

import { Button } from "../../atoms/button/Button";
import { InputText } from "../../atoms/input/InputText";
import { UserContext } from "../../../providers/UseProvider";

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
        <div style={{ float: "left" }}>
          <button style={{ margin: "15px" }}>mercari</button>
        </div>
        <InputText placeholder="なにをお探しですか？" />

        <div style={{ float: "right" }}>
          <Link to="/home/info" className="linkbutton" onClick={onClickHead}>
            お知らせ
          </Link>
          <Link to="/home/todo" className="linkbutton" onClick={onClickHead}>
            やることリスト
          </Link>
          <Link to="/home/account" className="linkbutton" onClick={onClickHead}>
            アカウント
          </Link>
          <Button>出品</Button>
        </div>
        <div className="clear" />
      </div>
      <br />

      {headInfo && (
        <div
          style={{ maxWidth: "1000px", margin: "auto", marginBottom: "10px" }}
        >
          <Link
            to="/home/Recommendation"
            className="linkbutton"
            onClick={onClickHead}
          >
            おすすめ
          </Link>
          <Link to="/home/mylist" className="linkbutton" onClick={onClickHead}>
            マイリスト
          </Link>
          <Link to="/home/pickup" className="linkbutton" onClick={onClickHead}>
            ピックアップ
          </Link>
        </div>
      )}
    </header>
  );
});
