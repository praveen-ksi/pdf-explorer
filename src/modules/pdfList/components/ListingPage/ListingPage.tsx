import { ListingType } from "../../types";
import { ReactComponent as NotFoundIcon } from "../../../../icons/NotFound.svg";
import { API_STATUS } from "../../../../constants.ts/api";
import ListingCard from "../ListingCard";
import { ThumbNailUrls } from "../../constants/thumbnail";
import Navbar from "../../../../components/Navbar";
import { useSearchAndFilter } from "../../hooks/useSearchAndFilter";
import ListingShimmer from "../ListingShimmer";
import PageFailure from "../../../../components/PageFailure";
import SearchField from "../../../../components/SearchField";
import Overlay from "../../../../components/Overlay";
import { useState } from "react";
import DescriptionHome from "../DescriptionHome";
import s from "./ListingPage.module.css";
import PdfViewer from "../../../../components/PdfViewer";

export const ListingPage: React.FunctionComponent = () => {
  const { data, apiStatus, searchString, onSearchInput } = useSearchAndFilter();
  const [selectedCard, setSelectedCard] = useState<{ show: boolean; value: ListingType | null; thumbnail: string }>({ show: false, value: null, thumbnail: "" });
  const [showRead, setShowRead] = useState(false);
  function handleCardClick(data: ListingType, idx: number) {
    setSelectedCard({ show: true, value: data, thumbnail: ThumbNailUrls[idx] });
  }
  function handleRead() {
    setShowRead(true);
  }
  return (
    <div className={s.root}>
      <Navbar rightActions={<SearchField value={searchString} onValueChange={onSearchInput} isDisabled={apiStatus !== API_STATUS.Success} />} title="Pdf Explorer" />
      <div className={s.btm_container}>
        {
          {
            [API_STATUS.Pending]: <ListingShimmer />,
            [API_STATUS.Success]: (
              <div className={s.success}>
                {!!data?.length ? (
                  data?.map((obj: ListingType, idx: number) => <ListingCard cardData={obj} key={`${obj?.link}${idx}`} thumbnail={ThumbNailUrls[idx]} onClick={(val) => handleCardClick(val, idx)} />)
                ) : (
                  <div className={s.not_found}>
                    <NotFoundIcon />
                    <p className={s.no_result_text}>No result found</p>
                  </div>
                )}
              </div>
            ),
            [API_STATUS.Failure]: <PageFailure />,
          }[apiStatus]
        }
        <Overlay show={selectedCard?.show} onClose={() => setSelectedCard((state) => ({ ...state, show: false }))} title={selectedCard?.value?.name ?? ""}>
          <DescriptionHome cardData={selectedCard?.value} thumbnail={selectedCard?.thumbnail} handleRead={() => handleRead()} />
        </Overlay>
        <Overlay show={showRead} onClose={() => setShowRead(false)} title={selectedCard?.value?.name ?? ""}>
          <PdfViewer link={selectedCard?.value?.link ?? ""} />
        </Overlay>
      </div>
    </div>
  );
};
