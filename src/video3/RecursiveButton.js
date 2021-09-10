import React, {useState} from "react";

export default function RecursiveButton() {
    const [showMode, setShowMode] = useState(false)

    const showNext = () => {
        setShowMode(!showMode)
    }

    return (
        <>
            <button onClick={showNext}>Show next</button>
            <div>
                {showMode ? <RecursiveButton/> : null}
            </div>
        </>

    )
}