import React from "react";
import { useEffect, useState } from "react";
import PulseLoader from "react-loading";

function PreLoader() {
  //get link as href
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []); //runs only once: on button click

  return (
    <>
      {loading ? ( //ifs NOT done
        <div className="overlay">
          <PulseLoader //built-in react loading thing, change with custom soon
            color={"#44af6c"}
          />
        </div>
      ) : (
        //normal post
        console.log("やっちゃう")
      )}
    </>
  );
}

export default PreLoader;
