import { Link } from "react-router-dom";

type Props = {
  id: string;
  image: string;
  itemName: string;
};

export const ItemCard = (props: Props) => {
  const { id, image, itemName } = props;

  return (
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to={{ pathname: "/merucari/itemInfo", state: props }}
      className="card"
    >
      <img alt={id} className="img" src={image} />
      <p className="itemP">{itemName}</p>
    </Link>
  );
};
