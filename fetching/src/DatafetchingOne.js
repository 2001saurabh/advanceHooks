import React, { useState, useEffect } from "react";

import axios from "axios";

function DatafetchingOne() {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/2")
      .then((res) => {
        setLoading(false);
        setPost(res.data);
        setError("");
        console.log(res);
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setError("Server not responding!");
      });
  }, []);
  return (
    <div>
      {isLoading ? (
        <div class="ui active centered inline loader"></div>
      ) : (
        <div className="ui purple header">{post.title}</div>
      )}
    </div>
  );
}

export default DatafetchingOne;
