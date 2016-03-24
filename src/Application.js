'use strict';
import './application.scss';

import React from 'react';
import {render} from 'react-dom';
import moment from 'moment';


class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { time: moment() };
    }
    tick() {
        this.setState({ time: moment() });
    }
    componentDidMount() {
        setInterval(() => { this.tick() }, 1000); // Call a method on the mixin
    }
    render() {
        const hour = Number(this.state.time.format('hh'));
        return (
            <div>
                {(hour > 19 && hour < 7)}
                <Time time={this.state.time.format('h:mm:ss')} />
            </div>
        );
    }
}
const Time = ({time}) => {return <time>{time}</time>};

const App = () => {return <div><Timer /></div>};


render(<App />, document.getElementById('root'));
