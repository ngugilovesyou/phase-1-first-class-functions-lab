const returnFirstTwoDrivers= function (drivers){
    return drivers.slice(0,2)
}
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

//Returning lastTwoDrivers
const returnLastTwoDrivers=function(drivers){
    return drivers.slice(2)
}
returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

//selectingDrivers
const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare){
    return (function(){return fare*5});
}
createFareMultiplier(5);
//fareDoubler

const fareDoubler=(createFareMultiplier)=>{return createFareMultiplier*2}
fareDoubler(10);

//Fare Tripler
const fareTripler=(createFareMultiplier)=> {return createFareMultiplier*3}
fareTripler(12);

const selectDifferentDrivers = function (drivers, returnFirstTwoDrivers) {
  return returnFirstTwoDrivers(drivers);
};


