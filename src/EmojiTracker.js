import React from "react"

export default class EmojiTracker extends React.Component {

        constructor(props) {
            super(props);
        }

        onClick() {
            // on no, I don't do anything!
        }

        render() {
            return (
            <div>
                <h1>Choose an emoji:</h1>
                <button onClick={() => this.onClick()}>Bear</button>
                <button onClick={() => this.onClick()}>Shrug</button>
                <button onClick={() => this.onClick()}>Table Flip</button>
                <EmoticonShower ></EmoticonShower>
            </div>)
        }

}

class EmoticonShower extends React.Component {

    render() {
        
        const bearEmoticon = "(ᵔᴥᵔ)";
        const shrugEmoticon = "¯\\_(ツ)_/¯";
        const angryEmoticon = "(╯°□°）╯︵ ┻━┻";

        return (
            <h2>
                {angryEmoticon}
            </h2>
        )
    }

}