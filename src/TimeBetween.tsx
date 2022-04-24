import React from 'react';
import {timeBetweenDates} from './TimeCalc';

interface TimeBetweenProps {
    firstdate: string;
    seconddate: string;
}


export const TimeBetween: React.FC<TimeBetweenProps> = ({firstdate, seconddate}) => {

    const Calc = (firstdate: string, seconddate: string) => {
        return timeBetweenDates(firstdate, seconddate);
    }

    return (
        <p style={{margin: '0px', fontSize: '14px'}}>{Calc(firstdate, seconddate)}</p>
    );
}