/*
Learnings: 
Okay, this was VERY easy....
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


let dummyInput2 = `7-F7-
.FJ|7
SJLL7
|F--J
LJ.LJ`

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

var findGalaxies = function(data)
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

    // for(let i = 0; i < cosmicExpansion.i.length; i++)
    // {
    //     let index = cosmicExpansion.i[i]
    //     spaceMap.filter(galaxy => galaxy.split(',').map(Number)[0] > index).map(galaxy => {
    //         let [x, y] = galaxy.split(',').map(Number)
    //         x += 1
    //         galaxy = x+','+y
    //     })
    // }
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
            let iExpansion = cosmicExpansion.i.filter(e => e > minX && maxX > e).length
            let jExpansion = cosmicExpansion.j.filter(e => e > minY && maxY > e).length
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
    let galaxies = findGalaxies(data)
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
// console.log('Dummy Output 2 : ' + formatInput(dummyInput2))
console.log('Actual Output : ' + formatInput(actualInput))