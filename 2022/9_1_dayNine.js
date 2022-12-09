let input = `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`

start()

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
    let visitedGrid = getVisitedGrid(data)
    DrawTracker(visitedGrid)
}

function getVisitedGrid(data)
{
    let T = new Position(0,0)
    let H = new Position(0,0)

    let tailTracker = []

    AddTailPosition(tailTracker, T)

    data.forEach(step => {
        let [direction,steps] = step.split(' ')
        for(let i = 0; i < steps; i++)
        {
            let headMovement = MakeMovement(direction)
            H.MakeMovement(headMovement)
            CheckRequiredMovement(H, T)
            AddTailPosition(tracker, T)
        }
    })

    return tailTracker;
}

function AddTailPosition(tracker, Tail) {
    if(!tracker[Tail.row])
    {
        tracker[Tail.row] = []
    }

    tracker[Tail.column] = '#'
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
    let rowChange = Head.row - Tail.row
    rowChange = rowChange/Math.abs(rowChange)
    let columnChange = Head.column - Tail.column
    columnChange = columnChange/Math.abs(columnChange)

    return new Position(rowChange, columnChange)
}

function DrawTracker(tracker) 
{
    for(let i = tracker.length; i > 0; i--)
    {
        console.log(tracker[i].reverse())
    }
}