import styled from "styled-components";

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
      <SBody>
        <SAdvertisement>広告が表示されているてい</SAdvertisement>
        <STitle>閲覧した商品からのおすすめ</STitle>
        <SCardArea>
          {items.map((item) => (
            <ItemCard
              key={item.id}
              id={item.id}
              image={item.image}
              itemName={item.itemName}
            />
          ))}
        </SCardArea>

        <div>
          <STitle>おすすめ商品</STitle>
          <SCardArea>
            {items.map((item) => (
              <ItemCard
                key={item.id}
                id={item.id}
                image={item.image}
                itemName={item.itemName}
              />
            ))}
          </SCardArea>
        </div>
      </SBody>
    </>
  );
};

const SBody = styled.div`
  margin-top: 160px;
  max-width: 1000px;
  margin: 160px auto 0 auto;
`;

const SAdvertisement = styled.div`
  height: 100px;
  width: auto;
  background-color: red;
  margin: 20px 0 20px 0;
`;

const STitle = styled.h2`
  color: #666;
  padding-bottom: 16px;
  border-bottom: solid 1px #ccc;
`;

const SCardArea = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
`;
