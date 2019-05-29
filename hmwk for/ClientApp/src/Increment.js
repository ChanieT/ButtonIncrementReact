import React from 'react';

class Increment extends React.Component {
    constructor() {
        super();
        this.state = {
            clicked:0,
            increment: 1,
            color: 0
        };
    }

    setIncrement = () => {
        let { increment } = this.state;
        increment++;
        this.setState({ increment });
    }

    onClick = () => {
        let { clicked, increment } = this.state;
        clicked += increment;
        this.setState({ clicked });
    }

    changeColor = () => {

        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        this.setState({ color: color });
    }

    render() {
        const style = {
            color: this.state.color
        };

        return (
            <div>
                <h1 style={{color:this.state.color}}>{this.state.clicked}</h1>
                <button onClick={this.onClick} className="btn btn-primary">Click Me!!!</button>
                <h1>{this.state.increment}</h1>
                <button onClick={this.setIncrement} className="btn btn-danger">Increment</button>
                <button onClick={this.changeColor} className="btn btn-warning">Change Color</button>
            </div>
        );
    }
}


export default Increment