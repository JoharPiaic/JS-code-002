var d = new Date();
var currentMonth = d.getMonth();
document.write(" Month : "+ currentMonth);

var dayOfMonth = d.getDate();
document.write("<br>" + "  Day  :  "+ dayOfMonth);

var currYr = d.getFullYear();
document.write("<br>" + "  Year  :  "+ currYr);

var currentHrs = d.getHours();
document.write("<br>" + " Hours : "+ currentHrs);

var currMins = d.getMinutes();
document.write("<br>" + " Minutes : "+ currMins);

var currSecs = d.getSeconds()
document.write("<br>" +" Seconds : "+  currSecs);

var currMills = d.getMilliseconds();
document.write("<br>" +  " Mili Sec : "+currMills );

var millsSince = d.getTime();
document.write("<br>" + "Over All Time : " +millsSince );
