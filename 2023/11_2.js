/*
Learnings: 
100 times larger is tricky
Adding 1 more is 2 times larger
Adding 99 is 100 times larger. :)
*/

let dummyInput = `...#......
.......#..
#.........
..........
......#...
.#........
.........#
..........
.......#..
#...#.....`

let actualInput = `...#...........#..............#..................................................#...................#...................#..................
................................................................................................#..............#...........................#
..................................#...................#.......................................................................#.............
.......................#....................................................................#...............................................
........#........................................................#.......#..................................................................
..............................................#............#......................................................#.........................
...............#.....................#...............................#...........................#..........................#...............
....#...........................#................................................#.......................#..........................#.......
............................................................................................................................................
......................................................................................#......#..............................................
............#.......#.......................#.....#...........#.............................................................................
.........................#..................................................................................................................
................................................................................................................#...........................
..............................#.......#............................................................#.................#.................#....
............................................................................................#...............................................
.............................................................#.......#............#.......................#..............#.................#
.......#....................................................................................................................................
...............................................................................................................................#............
...............#............#......#...........................................#.......#....................................................
.........................................#................#.......#............................#.....#......................................
...................................................#...................................................................#....................
..............................................#.................................................................#..................#........
...................#.......................................................................#................................................
.#......................................................................#...................................................................
.......................#.....#............#................#......................#.............................................#...........
...............#....................#.......................................#................................#...........................#..
............................................................................................................................................
....................#................................................#...........................#.................#........................
...........#....................................#...................................#.......#.........#.....................................
..#...................................................#..................#.................................................................#
..................................#...............................#........................................................#................
..........................................................................................................#.................................
......................................................................#.................#.......#.....................#.....................
.......................................#..........#.........................................................................................
......#........................#..................................................#.........................................................
....................#.................................#................................................#.................................#..
...........#...................................................................................................#............#...............
...................................#.............................#.............#.................#.................................#........
.............................#..........................................................#.................#..........#......................
........................#................#..................#..................................................................#............
...................#.....................................................#.......................................#..........................
...................................................#.................................#...................................#..................
..........#.............................................................................................#...................................
......................................#.........................................#................#.....................................#....
.....................................................................#..................#...................#...............................
........................#..........................................................................................#........#...............
.#...............................................#..........................................#.........#....................................#
.............................#.............#..........#.....................................................................................
..............#...................#..............................................#........................#.................................
....................#.................................................#.....................................................................
.................................................................................................#................................#.........
....................................................#............................................................#..........................
................#..........................................#.......#.....................#...............................#...............#..
.....#................#.....................................................................................................................
#...............................................#............................................#.............#....................#...........
..........#.................#.............#............#....................................................................................
.....................................................................................#......................................................
..................#.................#....................................#......................#....................#......................
.............................................................#................................................#.............................
................................#.............#...................................#.......#.................................................
.....................................................................#.........................................................#............
...........#.........................................................................................#......................................
.....................#..............................#.........................#.....................................................#.......
..............................#.....#.......#.............................................................#.................................
.....#................................................................................#...........#.............#...........#..............#
................#...............................................#................................................................#..........
#...........................................................................................#........................#......................
..........................#.....#...........................................................................................................
.........................................................#................#.............................................................#...
......#............................................................................#........................................................
.........................................#.........................................................#..........#.............................
.....................#....................................................................#...............................#.................
..................................................................................................................................#.........
............#......................#.............................#.......#..................................................................
...........................................................#...................#.............#........#....................................#
#.......................................#........#..............................................................#...........................
.................#..................................................................#.......................................................
......................................................................................................................#.................#...
............................................................................................................................................
................................................................#.............................................#.............................
......#.........................#........#............................#.........................................................#...........
............................................................................................................................................
.....................................................#.............................................#........................................
.............#..........#.................................#........#........................................................................
...................#.........................................................#.................#............#........................#......
.............................................#.........................................#....................................................
............................................................................................................................................
.#.........#..........................................#....................................#................................................
.................#...................#...................................#...............................#.......................#..........
.......#..............#........#...................................................................................#........................
................................................................#....................#...........#....................................#.....
.........................................#.............................................................................#....................
...#.....................#......................#............................#..............................................................
...................................#..................................#......................#..............................#...............
............#......................................................................................#........................................
...............................#...........#................#....................#........................................................#.
..........................................................................................................#.................................
...........................#......................................#....................................................#............#.......
...#.....#...............................................#................#...................#..................#..........................
.............................................#................................................................................#.............
...............#........#...................................................................................................................
....................................#................#...............#.................#..........#.........................................
..........................................#........................................................................#........................
...........................#.....................#....................................................#.....................................
.................................#.............................................................................................#............
.........#.....................................................#...............................#............................................
.............................................#............................#.............................................#................#..
#..........................................................#........................#.......................................................
.............#.......#................................................#.......#...................#................#........................
..........................#................................................................................#................................
.......................................#.......................................................................................#............
......................................................................................#.....................................................
.......................#.....#......................#...............................................................................#......#
........#....................................#............#.............#...................................................#...............
.................#................................................#...........#........................................#....................
...........................................................................................#......#.........................................
.#....................................#.........#...........................................................................................
.......................................................#................................................#........#..............#...........
...........#................................................................................................................................
..................................................................................#.............#.....................#.....................
............................................................#..............................................#........................#.......
..#................................#.......#..................................#.............................................................
.......................#.............................................................#.....#...............................................#
.........#..........................................#..........................................................#............................
................#........................................#...........................................#................................#.....
...............................#........#.........................#.............#...........................................................
.............................................#....................................................................#.............#...........
....................................#........................#......................#...........#.......................#...................
...................#.............................#.......................................#..................................................
.............#..........................................................#...................................................................
........#..................................................................................................#................................
............................................................................................................................#............#..
#........................................#......................#..................................................#................#.......
.....................#.............#.....................#............................#.........#...........................................
.....#.....................#................................................................................................................
.........................................................................#..................................................................
.............#...............................................#....................#..................................#........#.............
........................#...........................#....................................................#..................................
........................................#........................#...............................#.............#..........#..........#......
..#.......................................................#...................#.............#...............................................`

let cosmicExpansion = {
    i : [],
    j : []
}

const ExpansionMultiplier = 1000000 - 1

var FindCombinations = function(data)
{
    let galaxies = []
    let spaceMap = {}
    for(let i = 0; i < data.length; i++)
    {
        let galaxyFound = false
        for(let j = 0; j < data[i].length; j++)
        {
            if(data[i][j] == '#')
            {
                galaxyFound = true
                galaxies.push(i+','+j)
                addToMap(spaceMap, j, 0)
            }
            else
            {
                addToMap(spaceMap, j, 1)
            }
        }
        if(!galaxyFound)
        {
            cosmicExpansion.i.push(i)
        }
    }
    for (let i = 0; i < data[0].length; i++) 
    {
        if(spaceMap[i] == data.length)
        {
            cosmicExpansion.j.push(i)
        }
    }

    return galaxies
}

let findDistances = function(galaxies)
{
    let distances = []
    for (let i = 0; i < galaxies.length; i++) 
    {
        const [x,y] = galaxies[i].split(',').map(Number)
        for (let j = i+1; j < galaxies.length; j++) 
        {
            const [x1,y1] = galaxies[j].split(',').map(Number)
            let [minX, maxX] = [Math.min(x,x1), Math.max(x,x1)]
            let [minY, maxY] = [Math.min(y,y1), Math.max(y,y1)]
            let iExpansion = cosmicExpansion.i.filter(e => e > minX && maxX > e).length * ExpansionMultiplier
            let jExpansion = cosmicExpansion.j.filter(e => e > minY && maxY > e).length * ExpansionMultiplier
            let distance = Math.abs(x - x1) + Math.abs(y - y1) + iExpansion + jExpansion
            // console.log(`${i + 1} - ${j + 1} is ${distance}`)
            distances.push(distance)
        }
    }
    
    return distances
}

let addToMap = function (map, index, spaces)
{
    if(!map[index])
    {
        map[index] = 0
    }
    map[index] += spaces
}

var formatInput = function(input)
{
    let data = input.split('\n').map(l => l.split(''))
    let galaxies = FindCombinations(data)
    let distances = findDistances(galaxies)

    reset()

    return distances.reduce((a, b) => a + b)
}

let reset = function()
{
    cosmicExpansion = {
        i : [],
        j : []
    }
}

console.log('Dummy Output 1 : ' + formatInput(dummyInput))
console.log('Actual Output : ' + formatInput(actualInput))