

import React from 'react';
import PropTypes from 'prop-types';

export default class Link  extends React.Component {
    render() {
        return (
            <li>
                <a className='smoothscroll' href={`#${this.props.link}`}>{this.props.name}</a>
            </li>
        );
    }
};


Link.propTypes = {
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}
