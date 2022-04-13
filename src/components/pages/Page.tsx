import { Link } from "react-router-dom";

export const Page = () => {
  return (
    <>
      <p className="top">検索サイト側のてい</p>
      <Link to="/merucari/recommendation">メルカリへ</Link>
    </>
  );
};
