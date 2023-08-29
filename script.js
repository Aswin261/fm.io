const date = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const date_error = document.getElementById("date-error");
const month_error = document.getElementById("month-error");
const year_error = document.getElementById("year-error");
const curr = new Date();
if (date.value > 31) {
  console.log("invalid date");
  date_error.innerHTML = "Must be a valid day";
}
if (month.value > 12) {
  month_error.innerText = "Must be a valid month";
}
