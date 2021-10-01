let testDate = "2021-10-05";
convertDate(testDate);
// SHOULD BE:    JUNE 13, 2021

function convertDate(inputDate) {
  let year = inputDate.substring(0, 4);
  let month = inputDate.substring(5, 7);
  let day = inputDate.substring(8, 10);

  if (month.substring(0, 1) == 0) {
    month = month.substring(1, 2);
  }
  if (day.substring(0, 1) == 0) {
    day = day.substring(1, 2);
  }
  let date = new Date(year, month - 1, day);
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let convertedDate = date.toLocaleDateString("en", options);
  console.log(convertedDate);
}
