import React, { useEffect, useContext, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

let API = "https://hn.algolia.com/api/v1/search?";

const AppProvider = ({ children }) => {
  const initialState = {
    isLoading: true,
    query: "css",
    ngPages: 0,
    page: 0,
    hits: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApiData = async (url) => {
    dispatch({
      type: "SET_LOADING",
    });

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  // remove the post
  const removePost = (post_ID) => {
    dispatch({
      type: "REMOVE_POST",
      payload: post_ID,
    });
  };

  // search
  const SearchPost = (Search_value) => {
    dispatch({ type: "SEARCH_QUERY", payload: Search_value });
  };

  useEffect(() => {
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query]);

  return (
    <AppContext.Provider value={{ ...state, removePost, SearchPost }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
