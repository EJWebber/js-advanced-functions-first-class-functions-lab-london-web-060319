// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
    return[array[0], array[1]]
}

const returnLastTwoDrivers = function(array){
    return[array[array.length-2], array[array.length-1]]
}

const selectingDrivers = [returnFirstTwoDrivers,
    returnLastTwoDrivers]
    
const createFareMultiplier = function(n){
    return function(p){
        return (n*p)
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(array, thefunction){
    return thefunction(array)
}
