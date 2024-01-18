import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./components/reducer";

const API = `https://hn.algolia.com/api/v1/search?`;

let initialState = {
  isLoading: true,
  query: "",
  page: 0,
  nbPages: 0,
  hits: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchAPI = async (url) => {
    dispatch({ type: "GET_LOADING" });
    try {
      const res = await fetch(url);
      const data = await res.json();
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

  // Search
  const searchPost = (searchquery) => {
    dispatch({ type: "SEARCH_QUERY", payload: searchquery });
  };
  // Pagination
  const getPrevPage = () => {
    dispatch({
      type: "PREV_PAGE",
    });
  };
  const getNextPage = () => {
    dispatch({
      type: "NEXT_PAGE",
    });
  };
  useEffect(() => {
    fetchAPI(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);
  return (
    <AppContext.Provider
      value={{ ...state, searchPost, getNextPage, getPrevPage }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobleContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobleContext };
