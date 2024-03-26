import s from "./ListingShimmer.module.css";

export const ListingShimmer: React.FunctionComponent = () => {
  return (
    <div className={s.root}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]?.map((val) => (
        <div className={s.card} key={val}>
          <div className={s.cover_image} />
          <div className={s.desc} />
        </div>
      ))}
    </div>
  );
};
