let stacksData = [
    ['F', 'H', 'B', 'V', 'R', 'Q', 'D', 'P'],
    ['L', 'D', 'Z', 'Q', 'W', 'V'],
    ['H', 'L', 'Z', 'Q', 'G', 'R', 'P', 'C'],
    ['R', 'D', 'H', 'F', 'J', 'V', 'B'],
    ['Z', 'W', 'L', 'C'],
    ['J', 'R', 'P', 'N', 'T', 'G', 'V', 'M'],
    ['J', 'R', 'L', 'V', 'M', 'B', 'S'],
    ['D', 'P', 'J'],
    ['D', 'C', 'N', 'W', 'V']
]
start()

function start()
{
    var data = input.replaceAll('move ','').replaceAll(' from ',',').replaceAll(' to ',',').split('\n')
    processData(data)
    console.log(stacksData)
    console.log(getTopOfStack())
}

function processData(instructions)
{
    instructions.forEach(instruction => {
        info = instruction.split(',')
        rearrageStacks(info)
    })
}

function rearrageStacks(info)
{
    let quantity = info[0]
    let fromStack = info[1]
    let toStack = info[2]

    for(let i = 0; i < quantity; i++)
    {
        let picked = stacksData[fromStack-1].pop()
        stacksData[toStack-1].push(picked)
    }
}

function getTopOfStack()
{
    topOfStack = ''
    let tempStack = stacksData.forEach(x => {
        let letter = x.pop()
        console.log(letter)
        topOfStack += letter
    })

    return topOfStack
}