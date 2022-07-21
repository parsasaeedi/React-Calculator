import React, { useState, useEffect } from 'react';

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

    return (
        <form name="calc" className="calculator">
            <input type="text" readonly className="value" name="txt" />
            {keyPad}
        </form>
    )
}