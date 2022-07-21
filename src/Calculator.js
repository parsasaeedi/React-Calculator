import React, { useState, useEffect } from 'react';
import {VanillaTilt} from './vanilla-tilt'

export function Calculator() {

    const keys = ['C', '/', '*', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '0', '00', '.', '=']

    const keyPad = keys.map(key => {
        const className =
            key == 'C' ? "num clear"
            : key == '+' ? "num plus"
            : key == '=' ? "num equal"
            : "num";
        return <span className={className}>{key}</span>
    })

    useEffect(() => {
        VanillaTilt.init(document.querySelector(".container"), {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.2
        });
    });

    return (
        <form name="calc" className="calculator">
            <input type="text" readonly className="value" name="txt" />
            {keyPad}
        </form>
    )
}