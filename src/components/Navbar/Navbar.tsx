import { ReactElement } from "react";
import { ReactComponent as BackArrow } from "../../icons/BackArrow.svg";
import s from "./Navbar.module.css";

export const Navbar: React.FunctionComponent<{ rightActions?: ReactElement; title: string; showBack?: boolean; onBack?: () => void }> = ({ rightActions, title, showBack = false, onBack }) => {
  return (
    <nav className={s.nav_bar}>
      <div className={s.left}>
        {showBack && (
          <button onClick={onBack} className={s.back_btn}>
            <BackArrow />
          </button>
        )}
        <h1 className={s.heading}>{title}</h1>
      </div>
      {rightActions && rightActions}
    </nav>
  );
};
