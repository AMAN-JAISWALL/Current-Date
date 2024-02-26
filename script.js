let date = document.getElementById("date");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

let today = new Date();

let arrDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let arrMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

date.innerHTML = (today.getDate<10) ?  today.getDate() + "0" :today.getDate();
// console.log(today.arrDay[getDay()]);
day.innerHTML = arrDay[today.getDay()];
month.innerHTML = arrMonth[ today.getMonth()];
year.innerHTML = today.getFullYear();
// console.log(today.getDate());