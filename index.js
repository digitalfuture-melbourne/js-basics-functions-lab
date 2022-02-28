// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    if (distance >= 42) {
        return distance - 42
    } else {
        return 42 - distance
    }
    
}

function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet(location1, location2) {
    if (location2 > location1) {
        return (location2 - location1) * 264
    } else {
        return (location1 - location2) * 264
    }
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * 0.02
    } else if (distanceTravelledInFeet(start, destination) <= 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}
