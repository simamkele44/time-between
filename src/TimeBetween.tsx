import React from 'react';
import {timeBetweenDates, firstDateTime, secondDateTime} from './TimeCalc';

interface TimeBetweenProps {
    firstdate: string;
    seconddate: string;
}


export const TimeBetween: React.FC<TimeBetweenProps> = ({firstdate, seconddate}) => {

    const Calc = (firstdate: string, seconddate: string) => {
        return timeBetweenDates(firstDateTime(new Date(firstdate)), secondDateTime(new Date(seconddate)));
    }

    return (
        <p style={{margin: '0px', fontSize: '14px'}}>{Calc(firstdate, seconddate)}</p>
    );
}