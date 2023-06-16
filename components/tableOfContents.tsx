import React from "react"
import {useEffect} from "react"
import {useRef} from "react"

export type Heading = {
    text: String
    level: number
    id: string
};

export type Props = Array<string> & {
    headings: Heading[];
}

const TableOfContents = (sprops:Props) => {
    const headings = props;
    const [activeId, setActiveId] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.getAttribute("id")!;
                    if (entry.isIntersecting){
                        setActiveId(id);
                        scrollRef.current = window.scrollY;
                    }
                    else{
                        const diff = scrollRef.current = window.scrollY;
                        const isScrollingUp = diff > 0;
                        const currentIndex = headings.findIndex((h) => h.id === id);
                        const prevEntry = headings[currentIndex-1];
                        const prevId = prevEntry?.id;
                        if (isScrollingUp && prevId){
                            setActiveId(id);
                        }
                    }
                });
            },
            {
                rootMargin: "0% 0% -90% 0%"
            }
        );
        headings.forEach((heading) => {
            const elem = document.getElementById(heading.id);
            if(elem){
                observer.observe(elem)
            }
        })
    });

    return(
        <div>
            <h2>Table of Contents</h2>
            <ul>
                {headings.map((heading, index) => {
                    const id = heading.id||heading.text.toLowerCase();
                    const activeClass = (activeId === id? "link-accent" : "")
                    const indent = {
                        3: "pl-2",
                    };
                    const level = heading.level
                    const paddingClass = indent[level]
                    return (
                        <li key={index} onClick={() => setActiveId(id)}>
                            <a href={'#${id}'} className={"link" + activeClass + paddingClass}>{headings?.text}</a>
                        </li>
                    );
                })
                }
            </ul>
        </div>
    )
}

export default TableOfContents;