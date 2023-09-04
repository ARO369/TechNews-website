import React from "react";
import { useGlobleContext } from "../Context";

const Search = () => {
  const { query, searchPost } = useGlobleContext();
  return (
    <>
      <div className="search">
        <div className="hero">
          <span className="aro">ARO</span> TECH NEWS WEBSITE
        </div>
        <input
          className="search--field"
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => searchPost(e.target.value)}
        />
      </div>
    </>
  );
};

export default Search;
