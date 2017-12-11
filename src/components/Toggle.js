//Our current compound component implementation is great, but it's limited in that users cannot render the structure they need. Let's allow the user to have more flexibility by using React context to share the implicit state to our child <Toggle/> components. We will walk through safely defining childContextTypes, providing the value with getChildContext, and, on each of the components that need that context, we define contextTypes so that React will pass the context that is being asked for.


import React, { Component, Children } from 'react';
import Switch from './Switch';
import PropTypes from 'prop-types';

const TOGGLE_CONTEXT = '__toogle__';

function ToggleOn ({children}, context) {
    const {on} = context[TOGGLE_CONTEXT];
    return on ? children : null;
}
ToggleOn.contextTypes ={
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired
}
function ToggleOff ({children}, context) {
    const {on} = context[TOGGLE_CONTEXT];
    return on ? null : children;
}
ToggleOff.contextTypes ={
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired
}

function ToggleButton (props, context) {
    const {on, toggle} = context[TOGGLE_CONTEXT];
    return <Switch on={on} onClick={toggle} {...props} />
}
ToggleButton.contextTypes ={
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired
}

class Toggle extends Component {
    static On = ToggleOn;
    static Off = ToggleOff;
    static Button = ToggleButton;
    static  childContextTypes = {
        [TOGGLE_CONTEXT]: PropTypes.object.isRequired
    };
    static defaultProps = {
        onToggle: () => {}
    };

    getChildContext () {
        return {
            [TOGGLE_CONTEXT]: {
                on: this.state.on,
                toggle: this.toggle,
            }
        }
    }
    state = {on: false};

    toggle = () =>
        this.setState(
            ({on}) => ({on: !on}),
            () => {this.props.onToggle(this.state.on)},
            );

    render() {
        return <div>{this.props.children}</div>;
    }
}
export default Toggle;
