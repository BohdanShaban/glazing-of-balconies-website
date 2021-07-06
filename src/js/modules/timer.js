////////    TIMER  (L 8)     ///////////

function timer( daysSelector, hoursSelector, minutesSelector, secondsSelector, deadLineStr) {

    console.log('timer.js Script Connedted...');

    // 1) Function for Date Difference :  Now Date - DeadLine Date  —> getTimeRemaining()
    // 2) Function for Timer SetUp() :  get all Elms (days, hours, secs) and Being Set Them  —>  setClock()
    // 3) Function for Timer Upd() :  Work with Timer SetUp()  —> updateClock()

    // const now = new Date();
    // console.log(now);
    //const checkTimerStop = '2020-12-30T13:27:51.777Z';
    //const deadLineStr = '2021-1-20';

    function getTimeRemaining(deadLine) {

        const deadLineDate = Date.parse(deadLine);
        const nowDate = new Date();

        const mSecs = deadLineDate - nowDate;
        const days  = Math.floor( mSecs / (1000 * 60 * 60 * 24) ),
              hours = Math.floor( (mSecs / (1000 * 60 * 60) ) % 24  ),
              mints = Math.floor( (mSecs / 1000 / 60) % 60  ),
              secs  = Math.floor( (mSecs / 1000 ) % 60  );

        return {
            mSecs : mSecs,
            days : days,
            hours : hours,
            minutes : mints,
            seconds : secs
        }
    }


    // 2) Function for Timer SetUp() :  get all Elms (days, hours, secs) and Being Set Them  —>  setClock()
    function setClock() {

        const day = document.querySelector(daysSelector),
              hour = document.querySelector(hoursSelector),
              minute = document.querySelector(minutesSelector),
              second = document.querySelector(secondsSelector);

        // 3) Function for Timer Upd() :  Work with Timer SetUp()  —> updClock()
        updClock();

        const setIntervId =  setInterval( updClock, 1000);

        function updClock() {
            const {mSecs, days, hours, minutes, seconds} = getTimeRemaining(deadLineStr);

            if (mSecs >= 0) {
                day.innerHTML = days;
                hour.innerHTML = hours;
                minute.innerHTML = minutes;
                second.innerHTML = seconds;

            }else { console.log('Stoped......'); clearInterval(setIntervId); alert('Dedline !!!'); }
        }
    }
    setClock();

    
}

export default timer;