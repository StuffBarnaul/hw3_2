import React, {Component} from "react";

const Tab1 = () => {
    return <h1>Tab1</h1>
}
const Tab2 = () => {
    return <h1>Tab2</h1>
}
const Tab3 = () => {
    return <h1>Tab3</h1>
}

class Video1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1'
        }
    }

    handler = (e) => {
        this.setState({
            activeTab: e.target.getAttribute('data-name')})
    }

    render() {
        const {activeTab} = this.state
        return (
            <>
                <div className={"App-link"}>Video1 - Tabs</div>
                <button data-name={'1'} onClick={this.handler}>Tab1</button>
                <button data-name={'2'} onClick={this.handler}>Tab2</button>
                <button data-name={'3'} onClick={this.handler}>Tab3</button>
                {activeTab === '1' ? <Tab1/> : activeTab === '2' ? <Tab2/> : <Tab3/>}
                <div>Active tab is: {activeTab === '1' ? '1' : activeTab === '2' ? '2' : '3'} </div>
            </>
        )
    }
}

export default Video1;