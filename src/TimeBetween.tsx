import React from 'react';
import {timeBetween} from './TimeCalc';

interface TimeBetweenProps {
    askdate: string;
}


export const TimeBetween: React.FC<TimeBetweenProps> = ({askdate}) => {

    const Calc = (askdate: string) => {
        return timeBetween(askdate);
    }

    return (
        <p style={{margin: '0px', fontSize: '14px'}}>{Calc(askdate)}</p>
    );
}