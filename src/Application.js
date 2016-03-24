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
        console.log(`tick`);

        this.setState({ time: moment() });
    }
    componentDidMount() {
        setInterval(() => { this.tick() }, 1000); // Call a method on the mixin
    }
    render() {
        const hour = moment('HH');
        return (
            <div>
                {(hour > 19 && hour < 7)}
                [{this.state.time.format('hh:mm:ss')}]
            </div>
        );
    }
}
const Time = ({time}) => {return <time>{time}</time>};

const App = () => {return <div><Timer /><Time time={moment().format('h:mm')} /></div>};


render(<App />, document.getElementById('root'));
