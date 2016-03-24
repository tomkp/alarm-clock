'use strict';
import './application.scss';

import React from 'react';
import {render} from 'react-dom';
import moment from 'moment';


class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: moment()
        };
    }
    tick() {
        this.setState({
            time: moment()
        });
    }
    componentDidMount() {
        setInterval(() => { this.tick() }, 500); // Call a method on the mixin
    }
    render() {
        const hour = Number(this.state.time.format('ss'));
        const isDay = (hour > 7 && hour < 19);
        const className = 'timer ' + (isDay?'day':'night');
        return (
            <div className={className}>
                <time>{this.state.time.format('h:mm:ss')}</time>
            </div>
        );
    }
}
//const Colon = ({time}) => {return <span className={}>:</span>};
//const App = () => {return <div><Timer /></div>};


render(<Timer />, document.getElementById('root'));
