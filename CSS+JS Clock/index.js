const chargeClockContent=()=>{
    const faceClock=document.createElement('div')
    faceClock.classList.add('clock-face')

    const handHour=document.createElement('div')
    handHour.classList.add(`hand`)
    handHour.classList.add(`hour-hand`)

    const handMinute=document.createElement('div')
    handMinute.classList.add(`hand`)
    handMinute.classList.add(`minute-hand`)

    const handSecond=document.createElement('div')
    handSecond.classList.add(`hand`)
    handSecond.classList.add(`second-hand`)

    faceClock.append(handHour,handMinute,handSecond)
    document.querySelector('.clock').appendChild(faceClock)
}


const setDataClock=()=>{
    const getSecondsHand=document.querySelector('.second-hand')
    const getMinutesHand=document.querySelector('.minute-hand')
    const getHoursHand=document.querySelector('.hour-hand')

    const dataTime= new Date()
    //Seconds
    const seconds=dataTime.getSeconds()
    const secondsGrades=(((seconds/60)*360)+90)
    getSecondsHand.style.transform=`rotate(${secondsGrades}deg)`
    //Minutes
    const minutes=dataTime.getMinutes()
    const minutesGrades=(((minutes/60)*360)+90)
    getMinutesHand.style.transform=`rotate(${minutesGrades}deg)`
    //Hour
    const hours=dataTime.getHours()
    const hoursGrades=(((hours/12)*360)+90)
    getHoursHand.style.transform=`rotate(${hoursGrades}deg)`

}

chargeClockContent();
setInterval(setDataClock,1000);
