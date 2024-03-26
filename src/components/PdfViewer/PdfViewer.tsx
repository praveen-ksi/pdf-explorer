import { useState } from "react";
import s from "./PdfViewer.module.css";

export const PdfViewer: React.FunctionComponent<{ link: string }> = ({ link }) => {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoad = () => {
    setIsLoading(false);
  };
  return (
    <div className={s.root}>
      {isLoading && (
        <div className={s.loader}>
          <img src="assets/loader.gif" alt="loader" className={s.image} />
        </div>
      )}
      <iframe
        title="ml-pdf"
        src={`${link}#view=Fit&toolbar=0`}
        onLoad={handleLoad}
        style={{
          display: isLoading ? "none" : "block",
          width: "100%",
          border: "none",
          margin: 0,
          padding: 0,
        }}
        className={s.iframe}
      ></iframe>
    </div>
  );
};
