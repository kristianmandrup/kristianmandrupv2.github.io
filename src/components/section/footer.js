

import React from 'react';

import {basics} from '../../prop_types/resume';
import SocialMedia from '../social_media';

export default class Footer  extends React.Component {

    render() {
        return (
            <footer>
                <div className='row'>
                    <div className='twelve columns'>
                        <SocialMedia ulClass='social-links' profiles={this.props.content.profiles}/>
                        <ul className='copyright'>
                            <li>
                                This site is developed in React.js by&nbsp;
                                <a
                                    href='https://jcc2303.github.io'
                                    title='Javier Cabrera'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Javier Cabrera
                                </a> from the original design of Ceevee from&nbsp;
                                <a
                                    href='http://www.tecla5.com/'
                                    title='Styleshout'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Tecla5
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div id='go-top'>
                        <a className='smoothscroll' title='Back to Top' href='#home'>
                            <i className='icon-up-open'/>
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
};


Footer.propTypes = {
    content: basics
}
