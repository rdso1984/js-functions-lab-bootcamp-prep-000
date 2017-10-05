var name = "you"
var holiday = "Easter"
var days = 3

function happyHolidays() {
  return "Happy holidays!"
}

function happyHolidaysTo (string) {
  return `Happy holidays,`+ string
}

function happyHolidayTo(${holiday}, ${name}) {
  return `Happy ${holiday}, ${name}!`
}

function holidayCountdown(${days}, ${holiday}) {
  return `It's ${days} days until ${holiday}`
}
