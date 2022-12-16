let input = `Sensor at x=220580, y=684270: closest beacon is at x=436611, y=263737
Sensor at x=3329538, y=3016377: closest beacon is at x=3355914, y=2862466
Sensor at x=2605308, y=2023938: closest beacon is at x=2197530, y=2271330
Sensor at x=1810202, y=3423309: closest beacon is at x=1829362, y=3182862
Sensor at x=480296, y=3999646: closest beacon is at x=1694700, y=4178942
Sensor at x=46556, y=1283362: closest beacon is at x=-91140, y=1441882
Sensor at x=3741660, y=3959257: closest beacon is at x=3537901, y=3368697
Sensor at x=3399994, y=700264: closest beacon is at x=3748004, y=2000000
Sensor at x=1531981, y=3801761: closest beacon is at x=1694700, y=4178942
Sensor at x=193367, y=2712458: closest beacon is at x=-91140, y=1441882
Sensor at x=3199067, y=2194575: closest beacon is at x=3748004, y=2000000
Sensor at x=1878117, y=2578817: closest beacon is at x=2197530, y=2271330
Sensor at x=2439089, y=3168242: closest beacon is at x=1829362, y=3182862
Sensor at x=273443, y=171076: closest beacon is at x=436611, y=263737
Sensor at x=3680413, y=2477027: closest beacon is at x=3748004, y=2000000
Sensor at x=3620241, y=2904998: closest beacon is at x=3355914, y=2862466
Sensor at x=1728351, y=2895399: closest beacon is at x=1829362, y=3182862
Sensor at x=1894207, y=1168355: closest beacon is at x=2197530, y=2271330
Sensor at x=856867, y=3271314: closest beacon is at x=1829362, y=3182862
Sensor at x=3056788, y=2626224: closest beacon is at x=3355914, y=2862466
Sensor at x=3598024, y=3322247: closest beacon is at x=3537901, y=3368697
Sensor at x=1662543, y=3128823: closest beacon is at x=1829362, y=3182862
Sensor at x=3992558, y=1933059: closest beacon is at x=3748004, y=2000000
Sensor at x=1844282, y=2994285: closest beacon is at x=1829362, y=3182862
Sensor at x=3604375, y=3668021: closest beacon is at x=3537901, y=3368697
Sensor at x=2569893, y=3911832: closest beacon is at x=1694700, y=4178942
Sensor at x=117970, y=37503: closest beacon is at x=436611, y=263737
Sensor at x=3951385, y=3125577: closest beacon is at x=3537901, y=3368697
Sensor at x=2482373, y=2648092: closest beacon is at x=2197530, y=2271330
Sensor at x=915040, y=1835970: closest beacon is at x=-91140, y=1441882
Sensor at x=3047883, y=3301452: closest beacon is at x=3537901, y=3368697
Sensor at x=117432, y=1503889: closest beacon is at x=-91140, y=1441882
Sensor at x=1136011, y=261705: closest beacon is at x=436611, y=263737
Sensor at x=2343111, y=66183: closest beacon is at x=2081841, y=-807749
Sensor at x=608229, y=955721: closest beacon is at x=436611, y=263737
Sensor at x=1189379, y=3999750: closest beacon is at x=1694700, y=4178942
Sensor at x=766640, y=26597: closest beacon is at x=436611, y=263737
Sensor at x=3891093, y=2110588: closest beacon is at x=3748004, y=2000000`

let input1 = `Sensor at x=2, y=18: closest beacon is at x=-2, y=15
Sensor at x=9, y=16: closest beacon is at x=10, y=16
Sensor at x=13, y=2: closest beacon is at x=15, y=3
Sensor at x=12, y=14: closest beacon is at x=10, y=16
Sensor at x=10, y=20: closest beacon is at x=10, y=16
Sensor at x=14, y=17: closest beacon is at x=10, y=16
Sensor at x=8, y=7: closest beacon is at x=2, y=10
Sensor at x=2, y=0: closest beacon is at x=2, y=10
Sensor at x=0, y=11: closest beacon is at x=2, y=10
Sensor at x=20, y=14: closest beacon is at x=25, y=17
Sensor at x=17, y=20: closest beacon is at x=21, y=22
Sensor at x=16, y=7: closest beacon is at x=15, y=3
Sensor at x=14, y=3: closest beacon is at x=15, y=3
Sensor at x=20, y=1: closest beacon is at x=15, y=3`

function start() {
    // let data = input.replaceAll('Sensor at x=','').replaceAll(' closest beacon is at x=','').replaceAll(' y=','')
    
    let data = processInput(input)
    for(let i = 0; i <= 4000000; i++)
    {
        let eligiblePairs = getEligiblePairs(data, i)
        let nonBeaconPositions = getNonBeaconPositions(eligiblePairs, i)
    }
    // console.log(eligiblePairs)
    // console.log(nonBeaconPositions)
}

function getNonBeaconPositions(eligiblePairs, lineForPositions)
{
    let nonBeaconPoints = []
    // let numberOfBeaconsAtLine = eligiblePairs
    // let beaconsPresent = new Set(eligiblePairs.map(x => x.beacon).filter(x => x.y == lineForPositions).map(x => x.x + ',' + x.y))
    
    eligiblePairs.forEach(pair => {
        let delta = pair.distance - pair.perpendicularDistance
        let min = pair.sensor.x - delta
        let max = pair.sensor.x + delta

        nonBeaconPoints.push([min, max])
    })
    let numberOfPoints = findNumberOfPoints(nonBeaconPoints, lineForPositions)
    // return numberOfPoints - beaconsPresent.size
}

function findNumberOfPoints(ranges, level) {
    ranges.sort((a, b) => a[0] - b[0])
    let min = ranges[0][0], max = ranges[0][1], total = 0
    for (let i = 0; i < ranges.length - 1; i++) {
        if(max >= ranges[i+1][0])
        {
            if(max <= ranges[i+1][1])
            {
                max = ranges[i+1][1]
            }
            else
            {
                continue
            }
        }
        else if(max < ranges[i+1][0])
        {
            // console.log(level +'\tBetween' + max + ' and ' + ranges[i+1][0])
            console.log(`x : ${max+1}, y : ${level}`)
            console.log((max + 1) * 4000000 + level)
            throw new Error("UH... I didn't know how else to abrubptly end here")
            // total += max - min + 1
            min = ranges[i+1][0]
            max = ranges[i+1][1]
        }
    }
    // total += max - min + 1
    return total
}

function getEligiblePairs(data, lineNumber)
{
    let eligiblePairs = []
    data.forEach(pair => {
        let sensor = pair.sensor
        let perpendicularPoint = {x : sensor.x, y : lineNumber}
        let perpendicularDistance = findManhattanDistance(sensor, perpendicularPoint)
        if(perpendicularDistance <= pair.distance)
        {
            pair.perpendicularDistance = perpendicularDistance
            eligiblePairs.push(pair)
        }
    })

    return eligiblePairs
}

function processInput(data) {
    let expression = /Sensor at x=(?<sensorX>-?\d+), y=(?<sensorY>-?\d+): closest beacon is at x=(?<beaconX>-?\d+), y=(?<beaconY>-?\d+)/
    
    return data.split('\n').map(line => {
        let axes = line.match(expression).groups
        let coordinates = {
            sensor : {
                x : parseInt(axes.sensorX),
                y : parseInt(axes.sensorY)
            },
            beacon : {
                x : parseInt(axes.beaconX),
                y : parseInt(axes.beaconY)
            },
        }

        let manhattanDistance = findManhattanDistance(coordinates.sensor, coordinates.beacon)
        coordinates.distance = manhattanDistance
        return coordinates
    })
}

function findManhattanDistance(position1, position2) {
    return Math.abs(position1.x - position2.x) + Math.abs(position1.y - position2.y)
}

start()