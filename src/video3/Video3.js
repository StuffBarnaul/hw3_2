import React, {useState} from "react";
import Content from "./Content";
import RecursiveButton from "./RecursiveButton";

function Video3() {
    const [showMode, setShowMode] = useState(true)
    const handleClick = () => {
        setShowMode(!showMode)
    }
    let content = null
    if (showMode) {
        content = <Content/>
    }

    return (
        <>
            <div className={"App-link"}>Video3 - Class Component</div>
            <button onClick={handleClick}>Toggle</button>
            {content}
            <div>
                <RecursiveButton/>
            </div>
        </>
    )

}

export default Video3;