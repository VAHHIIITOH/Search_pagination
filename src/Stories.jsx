import React, { useEffect } from "react";
import { useGlobalContext } from "./Context";

const Stories = () => {
  const { hits, nbPages, isLoading, removePost } = useGlobalContext();
  if (isLoading) {
    return (
      <>
        <h1 className="font-bold text-center">Loading.....</h1>
      </>
    );
  }

  return (
    <>
      <div className="container mx-auto px-5 sm:px-5 md:px-10 lg:px-64">
        <div className="flex flex-col gap-5">
          {hits && hits?.map((item) => {
            const { title, author, num_comments, url, objectID } = item;
            return (
              <div className="bg-white p-3 shadow-lg" key={objectID}>
                <h1 className="font-bold">Title :- {title}</h1>
                <p>
                  Author :- <span>{author}</span>
                </p>
                <p>Comments :- {num_comments}</p>
                <div className="flex justify-between">
                  <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    Read More..
                  </a>
                  <a
                    href="#"
                    onClick={() => removePost(objectID)}
                    className="text-red-500"
                  >
                    Delete
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Stories;
