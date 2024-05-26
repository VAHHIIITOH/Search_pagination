import React from "react";
import { useGlobalContext } from "./Context";

const Searching = () => {
  const { query, SearchPost } = useGlobalContext();
  return (
    <>
      <div className="container mx-auto">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="search..."
            value={query}
            onChange={(e)=> SearchPost(e.target.value)}
            className="p-2 w-full border border-black my-6"
          />
        </form>
      </div>
    </>
  );  
};

export default Searching;
