/* 

Language: JavaScript
Author: Sima nongwe
Project: Time-Between Calculator 

*/


/* CURRENT DATE TIME */

const currentDateTime = {   
    now: new Date(),
}

const currentDateTimeValues = {       
    sec: currentDateTime.now.getSeconds(),
    min: currentDateTime.now.getMinutes(),
    hour: currentDateTime.now.getHours(),
    day: currentDateTime.now.getDate(),
    month: currentDateTime.now.getMonth()+1,
    year: currentDateTime.now.getFullYear()
}


/* FIRST DATE TIME */
export const firstDateTime = (dateone) => {
    const firstdate = new Date(dateone);
    return {
        dateone: firstdate,
        sec: firstdate.getSeconds(),
        min: firstdate.getMinutes(),
        hour: firstdate.getHours(),
        day: firstdate.getDate(),
        month: firstdate.getMonth()+1,
        year: firstdate.getFullYear()
    }
}



/* SECOND DATE TIME */
export const secondDateTime = (askdate) => {
    const now = new Date(askdate);
    return {
        askdate: now,
        sec: now.getSeconds(),
        min: now.getMinutes(),
        hour: now.getHours(),
        day: now.getDate(),
        month: now.getMonth()+1,
        year: now.getFullYear()
    }
}


/* CALCULATING DATE TIME */
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const timePassed = (firstDateTime, secondDateTime) => {

    // Current Date Time
    const first_year = firstDateTime.year;
    const first_month = firstDateTime.month;
    const first_day = firstDateTime.day;
    const first_hour = firstDateTime.hour;
    const first_min = firstDateTime.min;
    const first_sec = firstDateTime.sec;

    // Received Date Time
    const second_year = secondDateTime.year;
    const second_month = secondDateTime.month;
    const second_day = secondDateTime.day;
    const second_hour = secondDateTime.hour;
    const second_min = secondDateTime.min;
    const second_sec = secondDateTime.sec;


    // Check Equal Values

    const same_year = first_year==second_year;
    const same_month = first_month==second_month;
    const same_day = first_day==second_day;
    const same_hour = first_hour==second_hour;
    const same_min = first_min==second_min;
    const same_sec = first_sec==second_sec;

    // Check the time differences
    const in_secs = (same_year && same_month && same_day && same_hour && same_min);
    const in_mins = (same_year && same_month && same_day && same_hour);
    const in_hours = (same_year && same_month && same_day);
    const in_week = (same_year && same_month && (Math.abs(first_day - second_day)>=7 && Math.abs(first_day - second_day)<=28));
    const in_day = (same_year && same_month);
    const in_months = (same_year);


    // Time Difference Between Dates, to determine if datetime is in past or future
    const elapsed_secs = first_sec-second_sec
    const elapsed_mins = first_min-second_min
    const elapsed_hours = first_hour-second_hour
    const elapsed_days = first_day-second_day
    const elapsed_months = first_month-second_month
    const elapsed_years = first_year-second_year



    // Seconds
    if(in_secs) {
        if(!(elapsed_secs<0)){
            return (elapsed_secs>1? `${elapsed_secs} seconds ago`: `${elapsed_secs} second ago`)
        }else{
            return ((elapsed_secs)*-1>1? `Happenning in ${(elapsed_secs)*-1} seconds`: `Happenning in ${(elapsed_secs)*-1} second`)
        }
    }

    // Minutes
    if(in_mins) {
        if(!(elapsed_mins<0)){
            return (elapsed_mins>1? `${elapsed_mins} minutes ago`: `${elapsed_mins} minute ago`)
        }else{
            return ((elapsed_mins)*-1>1? `Happening in ${(elapsed_mins)*-1} minutes`: `Happening in ${(elapsed_mins)*-1} minute`)
        }
        
    }

    // Hours
    if(in_hours) {
        if(!(elapsed_hours<0)){
            return (elapsed_hours>1? `${elapsed_hours} hours ago`: `${elapsed_hours} hour ago`)
        }else{
            return ((elapsed_hours)*-1>1? `Hapenning in ${(elapsed_hours)*-1} hours`: `Hapenning in ${(elapsed_hours)*-1} hour`)
        }
        
    }

    // Weeks
    if(in_week) {
        if(!(elapsed_days<0)){
            if(elapsed_days<14){
                return (`1 week ago`)
            }else if(elapsed_days<21){
                return (`2 weeks ago`)
            }else if(elapsed_days<28){
                return (`3 weeks ago`)
            }else{
                return (`4 weeks ago`)
            }
        }else{
            if(Math.abs(elapsed_days<14)){
                return (`Happenning in 1 week`)
            }else if(Math.abs(elapsed_days<21)){
                return (`Happenning in 2 weeks`)
            }else if(Math.abs(elapsed_days<28)){
                return (`Happenning in 3 weeks`)
            }else{
                return (`Happenning in 4 weeks`)
            }
        }
        
    }

    // Day
    if(in_day) {
        if(!(elapsed_days<0)){
            return (elapsed_days>1? `${elapsed_days} days ago`: `${elapsed_days} day ago`)
        }else{
            return ((elapsed_days)*-1>1? `Happening in ${(elapsed_days)*-1} days`: `Happening in ${(elapsed_days)*-1} day`)
        }
        
    }


    // Months
    if(in_months) {
        if(!(elapsed_months<0)){
            return (elapsed_months>1? `${elapsed_months} months ago`: `${elapsed_months} month ago`)
        }else{
            return ((elapsed_months)*-1>1? `Happenning in ${(elapsed_months)*-1} months`: `Happenning in ${(elapsed_months)*-1} month`)
        }
        
    }

    if(!(elapsed_years<0)){
        return (elapsed_years>1? `${elapsed_years} years ago`: `${elapsed_years} year ago`)
    }else{
        return ((elapsed_years)*-1>1? `Happening in ${(elapsed_years)*-1} years`: `Happening in ${(elapsed_years)*-1} year`)
    }
    
}

export const timeBetweenDates = (firstDateTime, secondDateTime) => {
    return timePassed(firstDateTime, secondDateTime);
}