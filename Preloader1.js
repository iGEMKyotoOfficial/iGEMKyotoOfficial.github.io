import React, { useEffect, useState } from "react";
import PulseLoader from "react-loading";

function PreLoader1(link) {
  const [data, setData] = useState([]);
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch(link)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setDone(true);
        });
    }, 2000);
  }, []);

  return (
    <>
      {!done ? ( //if NOT done
        <PulseLoader //built-in react loading thing, change with custom soon
          color={"#44af6c"}
        />
      ) : (//normal post
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default PreLoader1;