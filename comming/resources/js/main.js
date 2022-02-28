$(document).ready(function() {
	
	/* EDIT BELOW */
	var launchDate = new Date("November 30, 2018 10:00:00");
	var procentageDone = 5;
	var headerColor = 'blue';
	var progressFillColor = 'blue';
	
	/* DON'T EDIT BELOW */
	var secondsRemaining = Math.floor(launchDate.getTime() / 1000) - Math.floor(new Date().getTime() / 1000);
	countdown(secondsRemaining);
	updateProgress(procentageDone);
	setHeaderColor(headerColor);
	setProgressFillColor(progressFillColor);

});