function start()
{
    var data = input.split('\n')
    var priorities = findContents(data)
    console.log(priorities.reduce((x,y) => x + y))
}

function findContents(data)
{
    var priorities = []
    data.forEach(x => {
        var compartment1 = x.slice(0,x.length/2).split('')
        var compartment2 = x.slice(x.length/2, x.length).split('')
        var common = compartment1.filter(y => {
             return compartment2.includes(y)
        })
        console.log(common)
        if(common[0].toUpperCase() == common[0])
        {
            priorities.push(common[0].charCodeAt(0)-64+26)
        }
        else
        {
            priorities.push(common[0].charCodeAt(0)-96)
        }
    })
    return priorities;
}