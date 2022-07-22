import React, { useState, useEffect } from 'react';
import {VanillaTilt} from './vanilla-tilt'
const keys = ['C', '/', '*', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '0', '00', '.', '=']

export function Calculator() {

    const [display, setDisplay] = useState('');
    const [lastKey, setLastKey] = useState('');

    useEffect(() => {
        VanillaTilt.init(document.querySelector(".container"), {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.2
        });
    });

    const handleClick = ({target}) => {
        const keyValue = target.innerHTML;
        if (keyValue === "C") setDisplay("");
        else if (keyValue === "=") setDisplay(eval(display));
        else if (lastKey === "=" && !['+', '-', '*', '/'].includes(keyValue)) setDisplay(keyValue);
        else if (lastKey === '.' && keyValue === '.') {}
        else if (['+', '-', '*', '/'].includes(lastKey) && lastKey === keyValue) {}
        else if (['+', '-', '*', '/'].includes(lastKey) && ['+', '-', '*', '/'].includes(keyValue) && lastKey != keyValue) {setDisplay(display.slice(0, -1) + keyValue)}
        else setDisplay(display + keyValue)

        setLastKey(keyValue);
    }

    return (
        <div className="calculator">
            <input type="text" readOnly className="value" name="txt" value={display}/>
            {keys.map(key => {
                const className =
                    key == 'C' ? "num clear"
                    : key == '+' ? "num plus"
                    : key == '=' ? "num equal"
                    : "num";
                return <span className={className} onClick={handleClick}>{key}</span>
            })}
        </div>
    )
}