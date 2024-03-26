import { ReactElement, useEffect, useMemo, useState } from "react";
import s from "./Overlay.module.css";
import Navbar from "../Navbar";

export const Overlay: React.FunctionComponent<{ show: boolean; onClose: () => void; children: ReactElement; title: string }> = ({ show, onClose, children, title }) => {
  const [prevShow, setPrevShow] = useState(false);

  //Logic for page transitions
  const directionClass = useMemo(() => {
    //If code avoid showing animation on the first load
    if (prevShow === false && show === false) {
      return s.nothing;
    } else if (prevShow === true && show === false) {
      return s.showLtr;
    } else if (prevShow === false && show === true) {
      return s.showRtl;
    }
  }, [show]);

  useEffect(() => {
    setPrevShow(show);

    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);
  return (
    <div className={`${s.root} ${directionClass}`}>
      <Navbar title={title} showBack onBack={onClose} />
      {children}
    </div>
  );
};
