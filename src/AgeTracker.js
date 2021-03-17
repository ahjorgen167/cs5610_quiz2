import React from "react"

export default class AgeTracker extends React.Component {

        constructor(props) {
            super(props);
        }

        onClick() {
            // on no, I don't do anything!
        }

        render() {
            return (
            <div>
                <h1>Are you happy or sad?</h1>
                <button onClick={() => this.onClick()}>I'm happy!</button>
                <button onClick={() => this.onClick()}>I'm sad.</button>
                <button onClick={() => this.onClick()}>I feel nothing</button>
                <ExpressionShower ></ExpressionShower>
            </div>)
        }

}

class ExpressionShower extends React.Component {

    render() {
        const happyFace = ":)";
        const sadFace = ":(";
        const nothingFace = ":|";

        return (
            <h2>
                {nothingFace}
            </h2>
        )
    }

}