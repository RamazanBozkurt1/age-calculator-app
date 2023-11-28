document.addEventListener('DOMContentLoaded', () => {
    const dayinput = document.getElementById('day');
    const monthinput = document.getElementById('month');
    const yearinput = document.getElementById('year');
    const daysoutput = document.getElementById('days');
    const monthsoutput = document.getElementById('months');
    const yearsoutput = document.getElementById('years');
    const dayvalid = document.getElementById('dayvalid');
    const monthvalid = document.getElementById('monthvalid');
    const yearvalid = document.getElementById('yearvalid');
    const button = document.getElementById('svgg');

    var currentday = new Date().getDate();
    var currentmonth = new Date().getMonth() + 1;
    var currentyear = new Date().getFullYear();
    

    function checkinput(x, y, max, min, type) {
        if (x.value === '') {
            y.style.display = 'block';
            y.innerText = 'This field is required';
            return false;
        }else if (isNaN(x.value)){
            y.style.display = 'block';
            y.innerText = 'The ' + type + ' must be a number';
            return false;
        }else if ( x.value < min || x.value > max ) {
            y.style.display = 'block';
            y.innerText = 'The ' + type + ' must be a valid number';
            return false;
        } 
        else {
            y.style.display = 'none';
            return true;
        }
    }

    button.addEventListener('click', () => {
        daysoutput.innerText = '--';
        monthsoutput.innerText = '--';
        yearsoutput.innerText = '--';
        if( checkinput(dayinput, dayvalid, 31, 1, 'day') &&
            checkinput(monthinput, monthvalid, 12, 1, 'month') &&
            checkinput(yearinput, yearvalid, currentyear, 1, 'year')){
            let years = currentyear - yearinput.value;
            let months = currentmonth - monthinput.value;
            let days = currentday - dayinput.value;
            console.log(currentyear,currentmonth,currentday,yearinput.value,monthinput.value,dayinput.value,years,months,days);           
            if(currentmonth < monthinput.value || ( currentmonth === monthinput.value && currentday < dayinput.value)){
                years--;
                months += 12;
            }
            console.log(currentyear,currentmonth,currentday,yearinput.value,monthinput.value,dayinput.value,years,months,days); 
            if( days < 0){
                months--;
                days += 30;
            }
            console.log(currentyear,currentmonth,currentday,yearinput.value,monthinput.value,dayinput.value,years,months,days); 
            daysoutput.innerText = days;
            monthsoutput.innerText = months;
            yearsoutput.innerText = years;
        }
    });
});

