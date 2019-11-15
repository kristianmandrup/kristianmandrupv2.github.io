

import React from 'react';

import {basics}  from '../prop_types/resume';
import SocialMedia from './social_media';

export default class Banner  extends React.Component {
    render() {
        return (
            <div className='row banner'>
                <div className='banner-text'>
                    <h1 className='responsive-headline'>
                        {this.props.basics.name}
                    </h1>
                    {/* <h3>{this.props.basics.summary}</h3> */}
                    <br/>
                    <hr/>
                    <SocialMedia ulClass='social' profiles={this.props.basics.profiles}/>
                </div>
            </div>
        );
    }
};


Banner.propTypes = {
    basics: basics
}
