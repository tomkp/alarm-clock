'use strict';
import './application.scss';

import React from 'react';
import {render} from 'react-dom';
import moment from 'moment';


class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: moment(),
            blink: true
        };
    }
    tick() {
        this.setState({
            time: moment(),
            blink: !this.state.blink
        });
    }
    componentDidMount() {
        setInterval(() => { this.tick() }, 500); // Call a method on the mixin
    }
    render() {
        const hour = Number(this.state.time.format('hh'));
        return (
            <div>
                {(hour > 19 && hour < 7)}
                <time>
                    {this.state.time.format('h')}
                    <span className={this.state.blink?'on':'off'}>:</span>
                    {this.state.time.format('mm')}
                    <span className={this.state.blink?'on':'off'}>:</span>
                    {this.state.time.format('ss')}
                </time>
            </div>
        );
    }
}
//const Colon = ({time}) => {return <span className={}>:</span>};

const App = () => {return <div><Timer /></div>};


render(<App />, document.getElementById('root'));
