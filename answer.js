//Solve of question 01

function describeValue(value){
    const type= typeof value
    const status= value? "truthy":"falsy"
    return `${type} | ${status}`
}
console.log(describeValue("*"))

//Solve of question 02

function getDayType(day){
    switch(day.toLowerCase()){
        case "friday":
           case "saturday":
              return "Weekend"
        
        case "sunday":
            case "monday":
                case "tuesday":
                    case "wednesday":
                        case "thursday":
                            return "Working Day"
        default:
            return "Invalid"
    }
}
console.log(getDayType("FridayAj"))


//Solve of question 03

function validateUsername(userName){
    if(userName.length<4){
        return "Too Short"
    }
    if(userName.includes(" ")){
        return "No Space Allowed"
    }
    if(userName.toLowerCase().includes("Admin")){
        return "Reverse Word"
    }
    if(userName.length<4 && userName.includes(" ")){
        return "it has a space, but the length rule is checked first"
    }
    return "Available"
}
console.log(validateUsername("Habiba"))


//Solve of question 04
function getCngFare(distance, isNight=false, waitingMinutes=0){
    let fare=50

    if(distance>2){
        fare +=(distance-2)*15
    }
    fare +=waitingMinutes*2

    if(isNight){
        fare=fare*1.20
    }
    return fare
}
console.log(getCngFare(5))

//Solve of question 05

const getChaseVerdict = (target, scored, ballsLeft) => {
  const runsNeeded = target - scored;

  if (runsNeeded <= 0) {
    return "Won";
  }

  if (ballsLeft <= 0) {
    return "Lost";
  }

  const requiredRate = (runsNeeded / ballsLeft) * 6;

  let verdict;

  if (requiredRate <= 6) {
    verdict = "Comfortable";
  } else if (requiredRate <= 12) {
    verdict = "Tough";
  } else {
    verdict = "Almost Impossible";
  }

  return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};

console.log(getChaseVerdict(200,50,45))