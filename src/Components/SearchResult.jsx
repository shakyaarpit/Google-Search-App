import React, { useContext, useEffect, useState } from "react";
import SearchResultHeader from "./SearchResultHeader";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { Context } from "../Utils/ContextApi";
import { fetchDataFromApi } from "../Utils/Api";
import SearchTemplateItem from "./SearchTemplateItem";
import SearchImageItem from "./SearchImageItem";
import Pagination from './Pagination'
const SearchResult = () => {
  const [result, setResult] = useState();
  const { query, startIndex } = useParams();
  const { searchImage } = useContext(Context);

  useEffect(() => {
    fetchSearchResult()
  }, [query, startIndex, searchImage]);

  const fetchSearchResult = () => {
    let payload = { q: query, start: startIndex };
    if (searchImage) {
      payload.searchType = "image";
    }
    fetchDataFromApi(payload).then((res) => {
      console.log(res);
      setResult(res);
    });
  };

  if (!result) return;
  const { items, queries, searchInformation } = result;

  return (
    <div className="flex flex-col min-h-[100vh]">
      <SearchResultHeader />
      <main className="grow p-[12px] pb-0 md:pr-5 md:pl-20">
        <div className="flex text-sm text-[#70757a] mb-3">
          {`About${searchInformation.formattedTotalResults} results in (${searchInformation.formattedSearchTime})`}
        </div>
        {!searchImage ? (
          <>
            {items.map((item, index) => (
              <SearchTemplateItem key={index} data={item} />
            ))}
          </>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
            {items.map((item, index) => (
              <SearchImageItem key={index} data={item} />
            ))}
          </div>
        )}
        <Pagination queries={queries}/>
      </main>
      <Footer />
    </div>
  );
};

export default SearchResult;
