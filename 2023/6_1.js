/*
Learnings: 

*/

let dummyInput = `Time:      7  15   30
Distance:  9  40  200`

let actualInput = `Time:        42     68     69     85
Distance:   284   1005   1122   1341`

var formatData = function(data)
{
    let time = data[0].split(':')[1].split(' ').filter(o => o.trim() != '').map(o => Number(o))
    let distance = data[1].split(':')[1].split(' ').filter(o => o.trim() != '').map(o => Number(o))
    return {time, distance}
}

let findMarginOfError = function(data)
{
    let marginOfErrors = []
    for(let i = 0; i < data.time.length; i++)
    {
        let count = 0
        for(let timeElapsed = 0; timeElapsed <= data.time[i]; timeElapsed++)
        {
           if(timeElapsed * (data.time[i] - timeElapsed) > data.distance[i]) count++
        }
        marginOfErrors.push(count)
    }
    return marginOfErrors.reduce((a, b) => a * b)
}

var formatInput = function(input)
{
    let data = input.split('\n')
    data = formatData(data)
    return findMarginOfError(data)
}

console.log('Dummy Output : ' + formatInput(dummyInput))
console.log('Actual Output : ' + formatInput(actualInput))