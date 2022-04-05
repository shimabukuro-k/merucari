export const ItemCard = (props) => {
  const { item } = props;
  return (
    <div className="card">
      <img alt={item.itemName} className="img" src={item.image} />
      <p className="itemP">{item.itemName}</p>
    </div>
  );
};
