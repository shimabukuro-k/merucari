import { Link } from "react-router-dom";

export const ItemCard = (props) => {
  const { id, image, itemName } = props;

  return (
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to={{ pathname: "/home/itemInfo", state: props }}
      className="card"
    >
      <img alt={id} className="img" src={image} />
      <p className="itemP">{itemName}</p>
    </Link>
  );
};
