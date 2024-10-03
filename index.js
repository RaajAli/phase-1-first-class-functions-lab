const returnFirstTwoDrivers = (arrayofScubaDrivers) => {
    const drivers = arrayofScubaDrivers.slice(0,2)
    return drivers
}

const returnLastTwoDrivers = (arrayofScubaDrivers) => {
    const drivers = arrayofScubaDrivers.slice(-2)
    return drivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (multiplier) => { 
    return (fare) => fare * multiplier
}

const fareDoubler = (fare) => {
    const doubledFare = createFareMultiplier(2)
    return doubledFare(fare)
}

const fareTripler = (fare) => {
    const TripledFare = createFareMultiplier (3)
    return TripledFare(fare)
}
const selectDifferentDrivers = (arrayofDrivers, slicingFunction) => {
    return slicingFunction(arrayofDrivers)
}