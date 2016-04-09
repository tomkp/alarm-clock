'use strict';

import React from 'react';
import "./digital.scss";

export default ({time}) => {

    const hour24 = Number(time.format('HH'));
    const hour12 = Number(time.format('h'));
    const minute = time.format('m');

    const isMorning = (hour24 >= 6 && hour24 < 7);
    const isDay = (hour24 >= 7 && hour24 < 19);
    const isEvening = (hour24 >= 19 && hour24 < 20);

    const timeOfDay =
        (isMorning ? 'morning ' :
            (isDay ? 'day ' :
                (isEvening ? 'evening ' : 'night ')));

    //console.log(`${hour24} is ${timeOfDay}`);

    return (
        <div className={'timer ' + timeOfDay}>
            <time>{hour12}</time>
        </div>
    );
};
