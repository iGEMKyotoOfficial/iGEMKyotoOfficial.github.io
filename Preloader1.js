import React, { useEffect, useState } from "react";
import PulseLoader from "react-loading";
import {after} from "underscore";

function PreLoader1({urls}){ //array of images
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      onload=(after(urls.length, () => {
        console.log("done")
        setDone(true)
      }))
    }, 500);
  }, []);

  return (
    <>
      {!done ? ( //if NOT done
        return(
          <div>
            <PulseLoader //built-in react loading thing, change with custom soon
          color={"#44af6c"}
            />
          </div>
        )
      ) : (//normal post
        console.log(やっちゃう)
      )}
    </>
  );
}

export default PreLoader1;