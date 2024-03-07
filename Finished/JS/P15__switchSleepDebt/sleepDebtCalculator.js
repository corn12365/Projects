



const getSleephours = day => { 
    switch (day) {
      case 'monday':
      return 8;
      case 'tuesday':
      return 7;
      case 'wednesday':
      return 6;
      case 'friday':
      return 5;
      case 'saturday':
      return 4;
      case 'sunday':
      return 3; 
      default:
      console.log('Error');
      break;
    }
  }

// after this point I used Co-Pilot to finish the project as I thought it was pretty pointless to do
    const getActualSleepHours = () => 
      getSleephours('monday') + getSleephours('tuesday') + getSleephours('wednesday') + getSleephours('friday') + getSleephours('saturday') + getSleephours('sunday');

    const getIdealSleepHours = () => {
      let idealHours = 8;
      return idealHours * 7;
    }
    //finish the code, this project is stupid
    const calculateSleepDebt = () => {
        let actualSleepHours = getActualSleepHours();
        let idealSleepHours = getIdealSleepHours();

        if (actualSleepHours === idealSleepHours) {
            console.log('You got the perfect amount of sleep!');
            } else if (actualSleepHours > idealSleepHours) {
                        console.log('You got more sleep than needed. You slept ' + (actualSleepHours - idealSleepHours) + ' hours extra.');
                    } else {
                        console.log('You should get some rest. You slept ' + (idealSleepHours - actualSleepHours) + ' hours less than needed.');
                    }
                }
                
                calculateSleepDebt();
