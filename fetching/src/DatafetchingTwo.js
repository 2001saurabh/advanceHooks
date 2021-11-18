import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "something went wrong",
      };
    default:
      return state;
  }
};
function DatafetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/7")
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);
  return (
    <div>
      {state.loading ? (
        <div className="ui active centered inline loader"></div>
      ) : (
        <div>
          <div className="ui purple dividing header">{state.post.title}</div>
          {state.post.body}
        </div>
      )}
      {state.error ? <div className="ui red header"> {state.error}</div> : null}
    </div>
  );
}

export default DatafetchingTwo;
