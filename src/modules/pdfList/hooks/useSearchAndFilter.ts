import { useEffect, useState } from "react";
import { ListingType } from "../types";
import { API_STATUS } from "../../../constants.ts/api";
import { getPdfListing } from "../services/pdfListing";

let timeout: NodeJS.Timeout;
export const useSearchAndFilter = () => {
  const [apiResponse, setApiResponse] = useState<{ response: ListingType[] | null; status: API_STATUS }>({ response: null, status: API_STATUS.Pending });
  const [data, setData] = useState<ListingType[]>([]);
  const [searchString, setSearchString] = useState("");
  async function fetchData() {
    const { response, error }: any = await getPdfListing();
    if (response) {
      //Keeping multiple states for the same data to handle search , one state would be used for storing all the data and another for displaying data
      setApiResponse({ status: API_STATUS.Success, response });
      setData(response);
    } else setApiResponse({ response: null, status: API_STATUS.Failure });
  }
  function onSearchInput(val: string) {
    setSearchString(val);
    //Debouncing logic for search
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const filteredValues = data?.filter((obj) => obj?.name?.toLowerCase().includes(val.toLowerCase()));
      setApiResponse((state) => ({ ...state, response: filteredValues }));
    }, 300);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return {
    data: apiResponse?.response,
    apiStatus: apiResponse?.status,
    searchString,
    onSearchInput,
  };
};
