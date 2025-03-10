const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);

};
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}; 

console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); 

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);


const selectDifferentDrivers = function(drivers, driverFunction) {
    return driverFunction(drivers);
};

console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); 

console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); 

console.log(selectingDrivers[0](['Antonia', 'Nuru', 'Amari', 'Mo'])); 
