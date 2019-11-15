

import React from 'react';

import About from './about';
import Work from './work';
import Education from './education';
import Skills from './skills';
import Portfolio from './portfolio';
import References from './references';
import Footer from './footer'; 

import {basics, workSet, educationSet, skillsSet, languagesSet, projectsSet, referencesSet} from '../../prop_types/resume';


export default class Section  extends React.Component {

    render() {
        const skillsContent = {
            skills: this.props.skills,
            languages: this.props.languages
        };

        return (
            <div>
                <About content={this.props.basics}/>
                <Work content={this.props.work}/>
                <Education content={this.props.education}/>
                <Skills content={skillsContent}/>
                <Portfolio content={this.props.portfolio}/>
                <References content={this.props.references}/>
                <Footer content={this.props.basics}/>
            </div>
        );
    }
};


Section.propTypes = {
    basics: basics,
    work: workSet,
    education: educationSet,
    skills: skillsSet,
    languages: languagesSet,
    portfolio: projectsSet,  // publicationsSet
    references: referencesSet
}
