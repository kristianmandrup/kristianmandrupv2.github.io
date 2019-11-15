

import React from 'react';

const ResumePropTypes = require('../prop_types/resume');

export default class BulletPoints  extends React.Component {
    render() {
        return (
            <div>
                {this.props.points.map(function (point, index) {
                    return (
                        <p key={index} className='point'>
                            <span className='bullet-point'>&bull; </span>
                            {point}
                        </p>
                    );
                })}
            </div>
        );
    }
};

BulletPoints.propTypes = {
    points: ResumePropTypes.bulletPoints
}

