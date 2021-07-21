function distanceFromHqInBlocks(num) {
    if ((num - 42) > 0) {
        return num-42
    } else if ((num - 42) < 0) {
        return (num - 42) * -1
    }
}
distanceFromHqInBlocks (43)
distanceFromHqInBlocks (34)


function distanceFromHqInFeet(x) {
        if ((x - 42) > 0) {
        return (x - 42) * 264
    } else if ((x- 42) < 0) {
        return ((x - 42) * -1) * 264
    }
}
distanceFromHqInFeet (43);
distanceFromHqInFeet (50);
distanceFromHqInFeet (34);

function distanceTravelledInFeet(y,z) {
    if ((y - z) > 0) {
        return (y - z) * 264
    } else if ((y - z) < 0) {
        return (y - z) * -264
    }
}

distanceTravelledInFeet (43,48)
distanceTravelledInFeet (50,60)
distanceTravelledInFeet (34,28)

function calculatesFarePrice (start, destination) {
    let n = distanceTravelledInFeet (start, destination)
    if (n<=400) {
        return 0
    } else if (n>400 && n<2000) {
        return (n-400)*.02
    } else if (2500>n  && n>2000) {
        return 25
    } else if (n>2500) { 
        return 'cannot travel that far'
    } 
}

calculatesFarePrice(34,32) 
calculatesFarePrice(50,58)
calculatesFarePrice(34,24)


