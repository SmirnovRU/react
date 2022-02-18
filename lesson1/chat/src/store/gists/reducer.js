import {
  GET_GISTS_START,
  GET_GISTS_SUCCESS,
  GET_GISTS_ERROR,
  SEARCH_GISTS_START,
  SEARCH_GISTS_SUCCESS,
  SEARCH_GISTS_ERROR,
} from "./types";

const initialState = {
  gists: [],
  error: null,
  pending: false,

  searchGist: [],
  searchError: null,
  searchPending: false,
};

export const gistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GISTS_START:
      return { ...state, pending: true, error: null };
    case GET_GISTS_SUCCESS:
      return { ...state, pending: false, gists: action.payload };
    case GET_GISTS_ERROR:
      return { ...state, pending: false, error: action.payload };

    case SEARCH_GISTS_START:
      return { ...state, searchPending: true, searchError: null };
    case SEARCH_GISTS_SUCCESS:
      return { ...state, searchPending: false, searchGist: action.payload };
    case SEARCH_GISTS_ERROR:
      return { ...state, searchPending: false, searchError: action.payload };

    default:
      return state;
  }
};
