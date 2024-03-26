import s from "./AnimatedImage.module.css";

export const AnimatedImage: React.FunctionComponent<{ src: string }> = ({ src }) => {
  return (
    <div className={s.root}>
      <img src={src} />
    </div>
  );
};
