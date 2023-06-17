import Frame from "components/member.people";
import React from "react";
import {useEffect, useState } from "react";
import Link from 'next/link';
import PulseLoader from "react-loading";
import after from "underscore";

class LoadInduce extends React.Component {
    render()
    PreLoader1(href){ //get link as href
        const [done, setDone] = useState(undefined);
        urls = [...href.querySelectorAll(Frame).src, ...href.querySelectorAll(Image).src];

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
            <div class="overlay">
            <PulseLoader //built-in react loading thing, change with custom soon
            color={"#44af6c"}
            />
            </div>
            )
        : (//normal post
            console.log("やっちゃう")
        )}
        </>
    );
    }
}

export default PreLoader1;
export class LoadInduce;