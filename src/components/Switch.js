import React, { Component } from 'react';

class Switch extends Component {
    render() {
        return (
            <button onClick={this.props.onClick}>{this.props.on.toString()}</button>
        );
    }
}
export default Switch;
