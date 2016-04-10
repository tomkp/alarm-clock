'use strict';

import React from 'react';
import "./analog.scss";

export default ({time}) => {

    const seconds = Number(time.format('s') / 60);
    const minutes = Number(time.format('m') / 60);
    //const hours = (Number(time.format('h')) + minutes) / 12;
    const hours = Number(time.format('h')) / 12;

    //console.log(`${hours} ${minutes} ${seconds}`);

    const second = `rotate(${(360 * seconds)})`;
    const minute = `rotate(${(360 * minutes)})`;
    const hour = `rotate(${360 * hours})`;

    return (
        <div className="Analog">
            <div className="square">
                <svg viewBox="0 0 120 120">
                    <g transform="translate(60, 60)">
                        <circle className="clock-face" r="48"> </circle>

                        <text className="xxx" x="-4" y="-35" transform="rotate(0)">12</text>
                        <text className="xxx" x="-2" y="-35" transform="rotate(30)">1</text>
                        <text className="xxx" x="-2" y="-35" transform="rotate(60)">2</text>
                        <text className="xxx" x="-2" y="-35" transform="rotate(90)">3</text>
                        <text className="xxx" x="-2" y="-35" transform="rotate(120)">4</text>
                        <text className="xxx" x="-2" y="-35" transform="rotate(150)">5</text>
                        <text className="xxx" x="-2" y="-35" transform="rotate(180)">6</text>
                        <text className="xxx" x="-2" y="-35" transform="rotate(210)">7</text>
                        <text className="xxx" x="-2" y="-35" transform="rotate(240)">8</text>
                        <text className="xxx" x="-2" y="-35" transform="rotate(270)">9</text>
                        <text className="xxx" x="-4" y="-35" transform="rotate(300)">10</text>
                        <text className="xxx" x="-4" y="-35" transform="rotate(330)">11</text>


                        <line className="major" y1="44" y2="48" transform="rotate(0)"> </line>
                        <line className="major" y1="44" y2="48" transform="rotate(30)"> </line>
                        <line className="major" y1="44" y2="48" transform="rotate(60)"> </line>
                        <line className="major" y1="44" y2="48" transform="rotate(90)"> </line>
                        <line className="major" y1="44" y2="48" transform="rotate(120)"> </line>
                        <line className="major" y1="44" y2="48" transform="rotate(148)"> </line>
                        <line className="major" y1="44" y2="48" transform="rotate(180)"> </line>
                        <line className="major" y1="44" y2="48" transform="rotate(210)"> </line>
                        <line className="major" y1="44" y2="48" transform="rotate(240)"> </line>
                        <line className="major" y1="44" y2="48" transform="rotate(270)"> </line>
                        <line className="major" y1="44" y2="48" transform="rotate(300)"> </line>
                        <line className="major" y1="44" y2="48" transform="rotate(330)"> </line>

                        <line className="hour" y1="1" y2="-25" transform={hour}> </line>

                        <line className="minute" y1="1" y2="-32" transform={minute}> </line>

                        <g transform={second}>
                            <line className="second" y1="10" y2="-38"> </line>
                            <line className="second-counterweight" y1="10" y2="2"> </line>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    )
};


