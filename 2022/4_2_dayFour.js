function start()
{
    var data = input1.split('\n')
    console.log(findSuperSets(data)) 
}

function findSuperSets(data)
{
    let overlapCount = 0;
    data.forEach(x => {
        var pairs = x.split(',')
        var first = pairs[0].split('-').map(Number)
        var second = pairs[1].split('-').map(Number)
        if(Math.max(first[0],second[0]) - Math.min(first[1], second[1]) <= 0)
            overlapCount++
    })

    return overlapCount
}