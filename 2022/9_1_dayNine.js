let input1 = `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`

let trackerCounter = new Set() 

class Position
{
    constructor(row, column)
    {
        this.row = row
        this.column = column
    }

    MakeMovement(movement)
    {
        this.row += movement.row
        this.column += movement.column
    }
}


function start()
{
    let data = input.split('\n')
    getVisitedGrid(data)
    console.log(trackerCounter)
}

function getVisitedGrid(data)
{
    let H = new Position(0,0)
    let T = new Position(0,0)

    let tailTracker = []

    AddTailPosition(tailTracker, T)

    data.forEach(step => {
        let [direction,steps] = step.split(' ')
        for(let i = 0; i < steps; i++)
        {
            let headMovement = CheckMovement(direction)
            H.MakeMovement(headMovement)
            let tailMovement = CheckRequiredMovement(H, T)
            T.MakeMovement(tailMovement)
            AddTailPosition(tailTracker, T)
        }
    })
}

function AddTailPosition(tracker, Tail) {
    trackerCounter.add(Tail.row + ',' + Tail.column)
}



function CheckMovement(direction)
{
    let movement = new Position(0,0)
    switch(direction){
        case 'L':
            movement.column = -1
            break
        case 'R':
            movement.column = 1
            break
        case 'U':
            movement.row = 1
            break
        case 'D':
            movement.row = -1
            break
    }
    return movement
    
}

function CheckRequiredMovement(Head, Tail)
{
    let p = new Position(0, 0)
    let rowChange = Head.row - Tail.row
    let columnChange = Head.column - Tail.column
    if(Math.abs(rowChange) > 1 || Math.abs(columnChange) > 1)
    {
        p.row = rowChange == 0 ? 0 : rowChange/Math.abs(rowChange)
        p.column = columnChange == 0 ? 0 : columnChange/Math.abs(columnChange)
    }
    return p
}

start()