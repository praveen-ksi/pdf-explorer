import Button from "../../../../components/Button";
import { ListingType } from "../../types";
import s from "./DescriptionHome.module.css";

export const DescriptionHome: React.FunctionComponent<{ cardData: ListingType | null; thumbnail: string; handleRead: (args: string | undefined) => void }> = ({ cardData, thumbnail, handleRead }) => {
  return (
    <div className={s.root}>
      <div className={s.thumbnail}>
        <img src={thumbnail} className={s.image} alt="" />
        <div className={s.web_btn}>
          <Button label="Read" onClick={() => handleRead(cardData?.link)} />
        </div>
      </div>
      <div className={s.bottom_description}>
        <div className={s.desc}>
          <h3 className={s.book_name}>{cardData?.name}</h3>
          <div className={s.author_date}>
            {!!cardData?.author && <span className={s.author}>by {cardData?.author}</span>}
            {!!cardData?.published && <span className={s.date}>| {cardData?.published}</span>}
          </div>
        </div>
        <div className={s.description}>
          <h4>Description</h4>
          <p className={s.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className={s.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className={s.floating_btn}>
        <Button label="Read" onClick={() => handleRead(cardData?.link)} />
      </div>
    </div>
  );
};
