function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
const isAdultResult = isAdult(21);
console.log(isAdultResult);

function didStudentPass(score) {
  if (score >= 70) {
    return true;
  } else {
    return false;
  }
}
const didStudentPassResult = didStudentPass(90);
console.log(didStudentPassResult);

function gradeCalculator(score) {
  if (score >= 100) {
    return 'A++';
  } else if (score < 100 && score > 90) {
    return 'A';
  } else if (score < 90 && score > 80) {
    return 'B';
  } else if (score < 80 && score > 70) {
    return 'C';
  } else if (score < 70 && score > 60) {
    return 'D';
  } else if (score < 60 && score > 50) {
    return 'F';
  } else {
    return 'See me in office hours!';
  }
}
const gradeCalculatorResult = gradeCalculator(49);
console.log(gradeCalculatorResult);

function seasonMessenger(season) {
  if (season === 'summer') {
    return 'it is hot today';
  } else if (season === 'spring') {
    return 'the flowers are blooming';
  } else if (season === 'autumn') {
    return 'the leaves are changing colors';
  } else if (season === 'winter') {
    return 'it is cold today';
  } else {
    return 'Please enter a valid season';
  }
}
const seasonMessengerResult = seasonMessenger('spring');
console.log(seasonMessengerResult);

function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'Saturday' || dayOfTheWeek === 'Sunday') {
    return 'have a good weekend';
  } else {
    return 'It is a weekday!';
  }
}
const dayDetectorResult = dayDetector('Tuesday');
console.log(dayDetectorResult);
