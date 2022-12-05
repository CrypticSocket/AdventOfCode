var scores = {'X' : 1, 'Y' : 2, 'Z' : 3}
var winChoice = {'A' : 'Y', 'B' : 'Z', 'C' : 'X'}
var drawChoice = {'A':'X', 'B':'Y', 'C':'Z'}

var totalScore = 0

function getOutcome(shapes)
{
    var shapeScore = scores[shapes[1]]
    
    // Win
    if(winChoice[shapes[0]] == shapes[1])
        getScore(shapeScore, 6)
    // Draw
    else if(drawChoice[shapes[0]] == shapes[1])
        getScore(shapeScore, 3)
    // Loss
    else
        getScore(shapeScore, 0)
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