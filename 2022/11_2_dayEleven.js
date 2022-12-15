let input = `Monkey 0:
  Starting items: 72, 97
  Operation: new = old * 13
  Test: divisible by 19
    If true: throw to monkey 5
    If false: throw to monkey 6

Monkey 1:
  Starting items: 55, 70, 90, 74, 95
  Operation: new = old * old
  Test: divisible by 7
    If true: throw to monkey 5
    If false: throw to monkey 0

Monkey 2:
  Starting items: 74, 97, 66, 57
  Operation: new = old + 6
  Test: divisible by 17
    If true: throw to monkey 1
    If false: throw to monkey 0

Monkey 3:
  Starting items: 86, 54, 53
  Operation: new = old + 2
  Test: divisible by 13
    If true: throw to monkey 1
    If false: throw to monkey 2

Monkey 4:
  Starting items: 50, 65, 78, 50, 62, 99
  Operation: new = old + 3
  Test: divisible by 11
    If true: throw to monkey 3
    If false: throw to monkey 7

Monkey 5:
  Starting items: 90
  Operation: new = old + 4
  Test: divisible by 2
    If true: throw to monkey 4
    If false: throw to monkey 6

Monkey 6:
  Starting items: 88, 92, 63, 94, 96, 82, 53, 53
  Operation: new = old + 8
  Test: divisible by 5
    If true: throw to monkey 4
    If false: throw to monkey 7

Monkey 7:
  Starting items: 70, 60, 71, 69, 77, 70, 98
  Operation: new = old * 7
  Test: divisible by 3
    If true: throw to monkey 2
    If false: throw to monkey 3`

let input1 = `Monkey 0:
  Starting items: 79, 98
  Operation: new = old * 19
  Test: divisible by 23
    If true: throw to monkey 2
    If false: throw to monkey 3

Monkey 1:
  Starting items: 54, 65, 75, 74
  Operation: new = old + 6
  Test: divisible by 19
    If true: throw to monkey 2
    If false: throw to monkey 0

Monkey 2:
  Starting items: 79, 60, 97
  Operation: new = old * old
  Test: divisible by 13
    If true: throw to monkey 1
    If false: throw to monkey 3

Monkey 3:
  Starting items: 74
  Operation: new = old + 3
  Test: divisible by 17
    If true: throw to monkey 0
    If false: throw to monkey 1`

function start()
{
    let data = input.split('\n')
    let [monkeyInfo, divider] = processData(data)
    let numberOfRounds = 10000
    let inspections = []
    for (let i = 0; i < numberOfRounds; i++) {
        inspections = workWithDemMonkeys(monkeyInfo, divider)
    }
    console.log(inspections.sort((a, b) => b - a).splice(0, 2).reduce((a, b) => a * b))
}

function processData(data) {

    let monkeyInfo = {}
    let currentMonkey = ''
    let divider = 1
    
    data.forEach(line => {
        let lineData = line.trim().split(' ')
        let whatType = lineData[0]
        // console.log(whatType)
        switch(whatType)
        {
            case 'Monkey' : 
                currentMonkey = lineData[1].replace(':','')
                break;
            case 'Starting' :
                let items = line.trim().replace('Starting items: ', '').split(',').map(Number)
                monkeyInfo[currentMonkey] = {items : items.reverse(), inspections : 0}
                break;
            case 'Operation:' :
                let [type, amount] = line.trim().replace('Operation: new = old ', '').split(' ')
                monkeyInfo[currentMonkey].operation = {type : type, amount : amount}
                break;
            case 'Test:' :
                let divisibility = Number(lineData[lineData.length - 1])
                monkeyInfo[currentMonkey].divisibility = divisibility
                divider *= divisibility
                break;
            case 'If' :
                let toMonkey = Number(lineData[lineData.length - 1])
                monkeyInfo[currentMonkey].test = monkeyInfo[currentMonkey].test ?? {} 
                lineData[1] == 'true:' ? monkeyInfo[currentMonkey].test.correct = toMonkey : monkeyInfo[currentMonkey].test.wrong = toMonkey
        }
    })

    return [monkeyInfo, divider]
}

function workWithDemMonkeys(monkeyInfo, divider) 
{
    let inspections = []
    for (let i = 0; monkeyInfo[i]; i++) 
    {
        while(monkeyInfo[i].items.length)
        {
            monkeyInfo[i].inspections++
            let currentItem = monkeyInfo[i].items.pop()
            currentItem = currentItem % (divider)
            let worry = CalculateWorry(currentItem, monkeyInfo[i].operation)
            if(worry % monkeyInfo[i].divisibility == 0)
            {
                PrependToArray(monkeyInfo[monkeyInfo[i].test.correct], worry)
            }
            else
            {
                PrependToArray(monkeyInfo[monkeyInfo[i].test.wrong], worry)
            }
        }
        inspections.push(monkeyInfo[i].inspections)
    }
    return inspections
}

function CalculateWorry(currentItem, operation)
{
    amount = operation.amount == "old" ? currentItem : Number(operation.amount)
    switch(operation.type)
    {
        case '+' : return currentItem + amount
        case '*' : return currentItem * amount
    }
}

function PrependToArray(currentArray, newItem)
{
    currentArray.items = [newItem, ...currentArray.items]
}

start()