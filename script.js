
/*sleep calculator*/
function numberCalculator{
	var i, ideal, night, total, x;
total = 0;
night = Number.parseInt(input("What is the ideal amount of sleep you want each night:"));
ideal = 7 * night;

for (var i = 0, _pj_a = 7; i < _pj_a; i += 1) {
  i = input("Day of the week: ");
  x = Number.parseFloat(Number.parseInt(input("Hours of sleep:")));
  total = total + x;
}

if (total === ideal) {
  console.log("You got the perfect amount of sleep!");
} else {
  if (total > ideal) {
    console.log("Great job, you have slept " + (total - 						ideal).toString() + " more hours than your ideal amount of			sleep");
  } else {
    if (total < ideal) {
      console.log("You should get some sleep. You've slept " + (ideal - total).toString() + " hours less than you should have this week");
    }
  }

}
