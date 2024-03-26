import s from "./Button.module.css";

export const Button: React.FunctionComponent<{ label: string; onClick: () => void }> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className={s.btn}>
      {label}
    </button>
  );
};
