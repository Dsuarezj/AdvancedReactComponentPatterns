//Compound component gives more rendering control to the user. The functionality of the component stays intact while how it looks and the order of the children can be changed at will. We get this functionality by using the special React.Children.map function to map over the children given to our <Toggle/> component. We map over the children to pass the on state as a prop to its children. We move the visual pieces of the component out into function components and add them as static properties to <Toggle/>.


import React, { Component, Children } from 'react';
import Switch from "./Switch";

class Toggle extends Component {
    static On = ({on, children}) => {return on ? children : null};
    static Off = ({on, children}) => {return on ? null : children};
    static Button = ({on, toggle, ...props}) => {return <Switch on={on} onClick={toggle} {...props} />};

    static defaultProps = {
        onToggle: () => {}
    };

    state = {on: false};
    toggle = () =>
        this.setState(
            ({on}) => ({on: !on}),
            () => {this.props.onToggle(this.state.on)},
            );

    render() {
        const children = Children.map(
            this.props.children,
            child =>
                React.cloneElement(child, {
                    on: this.state.on,
                    toggle: this.toggle,
                })
        );
        return <div>{children}</div>;
    }
}
export default Toggle;
