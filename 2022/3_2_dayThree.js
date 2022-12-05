function start()
{
    var data = input.split('\n')
    var groups = []
    var priorities = findContents(data)
    console.log(priorities.reduce((x,y) => x + y))
}

function findContents(data)
{
    var priorities = []
    for (let i = 0; i < data.length; i+=3) {
        var str1 = data[i].split('')
        var str2 = data[i+1].split('')
        var str3 = data[i+2].split('')

        var common = str1.filter(y => {
             return str2.includes(y) && str3.includes(y)
        })
        if(common[0].toUpperCase() == common[0])
        {
            priorities.push(common[0].charCodeAt(0)-64+26)
        }
        else
        {
            priorities.push(common[0].charCodeAt(0)-96)
        }
    }

    return priorities;
}

function start()
{
    var data = input.split('\n')
    data.forEach(x => {
        getOutcome(x.split(' '))
    })

    console.log(totalScore)
}