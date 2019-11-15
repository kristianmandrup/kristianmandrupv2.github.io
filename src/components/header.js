

import React from 'react';

export default class Header extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            window: {
                height: 0,
                width: 0
            }
        };
        this.updateDimensions = this.updateDimensions.bind(this)
    }

    updateDimensions () {
        return this.setState({
            window: {
                height: window.innerHeight,
                width: window.innerWidth
            }
        });
    }

    
    componentDidMount() {
        this.updateDimensions();
        return window.addEventListener('resize', this.updateDimensions);
    }

    render() {
        const style = {
            height: this.state.window.height
        };
        return (
            <header id='home' style={style}>
                {this.props.children}
            </header>
        );
    }
};

