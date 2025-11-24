var totalseats=120
var bookedseats=78
var availableseats=totalseats-bookedseats
var statusmsg=""
if(availableseats<20){
   statusmsg="Alomost full"
}
else if(availableseats>=20 && availableseats<=60){
    statusmsg="Moderate Availability"
}
else{
    statusmsg="Plenty of seats available"
}
console.log("Available seats are",availableseats)
console.log("Status:",statusmsg)