

import React from 'react';

export class Action  extends React.Component {
    render() {
        return (
            <section id='call-to-action'>
                <div className='row'>
                    <div className='two columns header-col'>
                        <h1>
                            <span>Example</span>
                        </h1>
                    </div>
                    <div className='seven columns'>
                        <h2>
                            <span className='lead'>Example</span>
                        </h2>
                        <p>
                            <span className='lead'>Example</span>
                        </p>
                    </div>
                    <div className='three columns action'/>
                </div>
            </section>
        );
    }
};


