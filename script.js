
/*sleep calculator*/
function numberCalculator() {

	let y = document.getElementById(sleepNumber).value;
	let z = document.getElementById(sleepNumberTwo).value;
	let ideal = 7 * z;
	let total = 7 * y;
	let f = document.getElementById(stuff).innerHTML;
	
	if (total === ideal) {
		console.log("what");
		f = "You got the perfect amount of sleep!";
	} else {
		if (total > ideal) {
			f = "Great job, you have slept " + document.getElementById("demo").innerHTML = total - ideal; + " more hours than your ideal amount of			sleep";
		} else {
			if (total < ideal) {
				f = "You should get some sleep. You've slept " + document.getElementById("demo").innerHTML = ideal - total; + " hours less than you should have this week";
			}
		}

	}
}
