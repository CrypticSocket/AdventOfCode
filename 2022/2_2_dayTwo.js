var scores = {'A' : 1, 'B' : 2, 'C' : 3}
var outcomeScores = {'X' : 0, 'Y' : 3, 'Z' : 6}
var winChoice = {'A' : 'B', 'B' : 'C', 'C' : 'A'}
var drawChoice = {'A':'A', 'B':'B', 'C':'C'}
var loseChoice = {'A':'C', 'B':'A', 'C':'B'}

var totalScore = 0

function getOutcome(shapes)
{
    var outcomeScore = outcomeScores[shapes[1]]
    var myChoice

    // Win
    if(shapes[1] == 'Z')
    {
        myChoice = winChoice[shapes[0]]
    }
    // Loss
    if(shapes[1] == 'Y')
    {
        myChoice = drawChoice[shapes[0]]
    }
    // Draw
    if(shapes[1] == 'X')
    {
        myChoice = loseChoice[shapes[0]]
    }
    var shapeScore = scores[myChoice]
    
    getScore(outcomeScore, shapeScore)
}

function getScore(shapeScore, outcomeScore)
{
    totalScore += shapeScore + outcomeScore
}

function start()
{
    var data = input.split('\n')
    data.forEach(x => {
        getOutcome(x.split(' '))
    })

    console.log(totalScore)
}