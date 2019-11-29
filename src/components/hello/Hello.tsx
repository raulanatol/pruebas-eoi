import React, { useEffect, useState } from "react";

export const Hello = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [id, setId] = useState(Math.random());

  const changeId = () => setId(Math.random());

  useEffect(() => {
    const onResize = () => {
      console.log(id);
      setWidth(window.innerWidth);
    };
    console.log('💥');
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [id]);
  return <h1 onClick={changeId}>Hello Juan</h1>;
};
