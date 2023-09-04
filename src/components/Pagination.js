import React from "react";
import { useGlobleContext } from "../Context";

const Pagination = () => {
  const { page, nbPages, getPrevPage, getNextPage } = useGlobleContext();
  return (
    <>
      <div className="pagination">
        <button className="ele btn--ele" onClick={() => getPrevPage()}>
          PREV
        </button>
        <p className="ele">
          {page + 1} of {nbPages}
        </p>
        <button className="ele btn--ele" onClick={() => getNextPage()}>
          NEXT
        </button>
      </div>
    </>
  );
};

export default Pagination;
