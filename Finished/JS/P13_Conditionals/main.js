let raceNumber = Math.floor(Math.random() * 1000);

registerOnTime = true;
let runnerAge = 19;
let raceTime; 

if (registerOnTime && runnerAge > 18) {
  raceNumber += 1000;
  raceTime = '9:30 am';
} else if (!registerOnTime && runnerAge > 18) {
  raceTime = '11:00 am';
} else if (runnerAge < 18) {
  raceTime = '12:30 pm';
} else if (runnerAge === 18) {
  console.log('Too bad, go home and come back next year :)');
} else {
  console.log('Please see the registration desk');
}

console.log(`You are race # ${raceNumber} and it will start at ${raceTime}`);