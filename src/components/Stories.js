import React from "react";
import { useGlobleContext } from "../Context";

const Stories = () => {
  const { hits, isLoading } = useGlobleContext();

  if (isLoading) {
    return (
      <>
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="heading">Search Results</div>
      {hits.map((currentPost) => {
        const { title, author, url, objectID, num_comments } = currentPost;
        return (
          <div className="stories" key={objectID}>
            <h2>{title}</h2>
            <div>
              By <span className="author">{author}</span> | {num_comments}{" "}
              commentss
            </div>
            <div className="card--bottom">
              <a href={url} className="read--more">
                <button className="remvoe--btn">Read More</button>
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Stories;
