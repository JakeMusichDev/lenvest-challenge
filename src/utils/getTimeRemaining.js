import moment from 'moment'

//---------------------------------------------
// getTimeRemaining - Takes loan's term remaining value (I took the value to represent seconds)
// returns a formatted date string that represents current time remaining  
//---------------------------------------------

export const getTimeRemaining = (term_remaining) => {
  let currentTime = Math.floor(Date.now())
  let futureTime = currentTime + (parseInt(term_remaining, 10)*1000)
  let duration = moment.duration( futureTime, 'milliseconds')
  return duration.days() + ' days : ' + duration.hours() + " hours : " + duration.minutes() +  " minutes : " + duration.seconds() + ' seconds'  
}

