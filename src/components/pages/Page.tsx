import { memo, VFC } from "react";
import { Link } from "react-router-dom";

export const Page: VFC = memo(() => {
  return (
    <>
      <p>検索サイト側</p>
      <Link to="/home/recommendation">メルカリへ</Link>
    </>
  );
});