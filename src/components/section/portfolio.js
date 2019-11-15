

import React from 'react';

import {projects, projectsSet} from '../../prop_types/resume';
import {Random} from '../../utils/random';
import Modal from './modal';

export class Entry  extends React.Component {

    constructor(props) {
        super(props);        
        this.state = {
            modalOpen: false
        };
        this.handleOpenModal = this.handleOpenModal.bind(this)
        this.handleCloseModal = this.handleCloseModal.bind(this)
    }

    handleOpenModal() {
        return this.setState({
            modalOpen: true
        });
    }

    handleCloseModal() {
        return this.setState({
            modalOpen: false
        });
    }

    render() {
        return (
            <div className='columns portfolio-item'>
                <div className='item-wrap' onClick={this.handleOpenModal}>
                    <img
                        src={this.props.entry.image.thumb}
                        alt={this.props.entry.name}/>
                    <div className='overlay'>
                        <div className='portfolio-item-meta'>
                            <h5>{this.props.entry.name}</h5>
                            <p>{this.props.entry.category}</p>
                        </div>
                    </div>
                    <div className='link-icon'>
                        <i className='icon-down-open'/>
                    </div>
                </div>
                <Modal entry={this.props.entry} isOpen={this.state.modalOpen} onRequestClose={this.handleCloseModal}/>
            </div>
        );
    }
};
Entry.propTypes = {
    entry: projects
}

export default class Portfolio  extends React.Component {

    render() {
        const portfolio = Random.shuffleArray(this.props.content).slice(0, 8);
        return (
            <section id='portfolio'>
                <div className='row'>
                    <div className='twelve columns collapsed'>
                        <h1>Portfolio</h1>
                        <div id='portfolio-wrapper' className='bgrid-quarters s-bgrid-thirds cf'>
                            {portfolio.map(function (entry, index) {
                                return (
                                    <Entry key={index} index={index} entry={entry}/>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};

Portfolio.propTypes = {
    content: projectsSet
}

