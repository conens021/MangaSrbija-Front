import React, { useRef, useEffect, useState } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
export function useOutsideOfElement(ref) {

    const [outsideOfElement,setOutsideOfElement] = useState(false)

    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setOutsideOfElement(true)
            }else{
                setOutsideOfElement(false)
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);


    return[
        outsideOfElement
    ]
}
