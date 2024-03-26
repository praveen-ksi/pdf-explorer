import { ListingType } from "../../types";
import s from "./ListingCard.module.css";

export const ListingCard: React.FunctionComponent<{ cardData: ListingType; thumbnail: string; onClick: (args: ListingType) => void }> = ({ cardData, thumbnail, onClick }) => {
  return (
    <div className={s.root} onClick={() => onClick(cardData)}>
      <div className={s.thumbnail}>
        <img src={thumbnail} className={s.image} />
      </div>
      <div className={s.desc}>
        <h3 className={s.book_name}>{cardData?.name}</h3>
        <div className={s.author_date}>
          {!!cardData?.author && <span className={s.author}>by {cardData?.author}</span>}
          {!!cardData?.published && <span className={s.date}>| {cardData?.published}</span>}
        </div>
      </div>
    </div>
  );
};
