import "../../styles.css";
import { ItemCard } from "../ogarnisms/Items/ItemCard";

const items = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    image: "https://source.unsplash.com/random",
    itemName: `長い商品名が来たら折り返して表示する_${val}`
  };
});

export const Recommendation = () => {
  return (
    <>
      <div
        className="top"
        style={{ maxWidth: "1000px", margin: "160px auto 0 auto" }}
      >
        <div
          style={{
            height: "100px",
            width: "auto",
            backgroundColor: "red",
            margin: "20px 0 20px 0"
          }}
        >
          広告が表示されているてい
        </div>
        <h2
          style={{
            color: "#666",
            paddingBottom: "16px",
            borderBottom: "solid 1px #ccc"
          }}
        >
          閲覧した商品からのおすすめ
        </h2>
        <div className="cardArea">
          {items.map((item) => (
            <ItemCard
              key={item.id}
              id={item.id}
              image={item.image}
              itemName={item.itemName}
            />
          ))}
        </div>
        <div>
          <h2
            style={{
              color: "#666",
              paddingTop: "16px",
              borderTop: "solid 1px #ccc"
            }}
          >
            おすすめ商品
          </h2>

          <div className="cardArea">
            {items.map((item) => (
              <ItemCard
                key={item.id}
                id={item.id}
                image={item.image}
                itemName={item.itemName}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
