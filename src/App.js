import React from "react";
import './App.css';
import Video1 from "./video1/Video1";
import Video201 from "./video2/Video201";
import Video202 from "./video2/Video202";
import Video203 from "./video2/Video203";
import Video204 from "./video2/Video204";
import Video205 from "./video2/Video205";
import Video206 from "./video2/Video206";
import Video3 from "./video3/Video3";


function App() {
    return (
        <>
            <Video1/>
            <Video201 value = 'winter'/>
            <Video202 value = 'spring'/>
            <Video203 value = 'summer'/>
            <Video204 value = 'autumn'/>
            <Video205 value = 'winter'/>
            <Video206 value = 'spring'/>
            <Video3/>
        </>
    );
}

export default App;
