let raceNumber = Math.floor(Math.random() * 1000);

registerOnTime = true;
runnerAge = 30;

if (registerOnTime && runnerAge > 18) {
  raceNumber += 1000;
} else if (!registerOnTime && runnerAge > 18) {
  console.log(`You are in race # ${raceNumber} and it will start at 11:00 am`);
} else if (runnerAge < 18) {
  console.log(`You are race # ${raceNumber} and it will start at 12:30 pm`);
} else {
  console.log('Please see the registration desk');
}

if ( registerOnTime && runnerAge > 18) {
    console.log(`You are in race # ${raceNumber} and it will start at 9:30 am`);
}
