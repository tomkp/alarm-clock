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
            blink: false
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
        const isDay = (hour > 7 && hour < 19);
        return (
            <div className={'timer ' + (isDay?'day':'night')}>
                <time className={(this.state.blink?'on':'off')}>{this.state.time.format('h')}</time>
            </div>
        );
    }
}
//const Colon = ({time}) => {return <span className={}>:</span>};
//const App = () => {return <div><Timer /></div>};


render(<Timer />, document.getElementById('root'));
