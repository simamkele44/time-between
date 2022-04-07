
// Random DateTime
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// The current date time
const currentDateTime = {
    now: new Date(),
}

// Current Date Time Values
const nowDateTime = {
    sec: currentDateTime.now.getSeconds(),
    min: currentDateTime.now.getMinutes(),
    hour: currentDateTime.now.getHours(),
    day: currentDateTime.now.getDate(),
    month: currentDateTime.now.getMonth()+1,
    year: currentDateTime.now.getFullYear()
}

// The past DateTime
const receivedDateTime = (askdate) => {
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

const timePassed = (currentDateTime, receivedDateTime) => {

    // Current Date Time
    const current_year = currentDateTime.year;
    const current_month = currentDateTime.month;
    const current_day = currentDateTime.day;
    const current_hour = currentDateTime.hour;
    const current_min = currentDateTime.min;
    const current_sec = currentDateTime.sec;

    // Received Date Time
    const received_year = receivedDateTime.year;
    const received_month = receivedDateTime.month;
    const received_day = receivedDateTime.day;
    const received_hour = receivedDateTime.hour;
    const received_min = receivedDateTime.min;
    const received_sec = receivedDateTime.sec;


    // Check Equal Values

    const same_year = current_year==received_year;
    const same_month = current_month==received_month;
    const same_day = current_day==received_day;
    const same_hour = current_hour==received_hour;
    const same_min = current_min==received_min;
    const same_sec = current_sec==received_sec;

    // Check the time differences
    const in_secs = (same_year && same_month && same_day && same_hour && same_min);
    const in_mins = (current_year==received_year && same_month && same_day && same_hour);
    const in_hours = (current_year==received_year && same_month && same_day);
    const in_day = (current_year==received_year && same_month);
    const in_months = (current_year==received_year);


    // Time Difference Between Dates
    const elapsed_secs = current_sec-received_sec
    const elapsed_mins = current_min-received_min
    const elapsed_hours = current_hour-received_hour
    const elapsed_days = current_day-received_day
    const elapsed_months = current_month-received_month
    const elapsed_years = current_year-received_year



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


export const timeBetween = (askDate) => {
    return timePassed(nowDateTime, receivedDateTime(new Date(askDate)));
}




