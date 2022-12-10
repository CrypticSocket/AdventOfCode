let input = `noop
addx 5
noop
addx 3
addx -2
addx 4
noop
noop
noop
noop
noop
addx 7
addx 3
noop
noop
noop
noop
addx 5
noop
noop
addx 5
addx -10
addx 2
addx 14
noop
addx -38
noop
noop
addx 5
addx 2
addx 2
addx 3
noop
addx 20
addx -19
addx 28
addx -21
addx 2
addx 3
noop
addx 2
addx -4
addx 5
addx 2
addx -4
addx 11
addx -27
addx 28
addx -38
addx 5
addx 2
addx -1
noop
addx 6
addx 3
addx -2
noop
noop
addx 7
addx 2
noop
noop
noop
addx 5
addx 3
noop
addx 2
addx -11
addx 6
addx 8
noop
addx 3
addx -37
addx 1
addx 5
addx 2
addx 3
noop
noop
noop
noop
noop
addx -5
addx 13
addx 2
addx -8
addx 9
addx 4
noop
addx 5
addx -2
addx -14
addx 21
addx 1
noop
noop
addx -38
addx 2
addx 5
addx 2
addx 3
addx -2
noop
addx 11
addx -6
addx 5
addx 2
addx 3
noop
addx 2
addx -10
addx 15
noop
addx -24
addx 17
addx 10
noop
addx 3
addx -38
addx 5
addx 2
addx 3
addx -2
addx 2
addx 7
addx 1
addx -1
noop
addx 5
noop
noop
noop
noop
addx 3
noop
addx -21
addx 28
addx 1
noop
addx 2
noop
addx 3
noop
noop`

function start()
{
    let data = input.split('\n')
    let CRTDisplayInfo = processInstructions(data)
    // console.log(signalStrength)
    PrintDisplay(CRTDisplayInfo)
}

function processInstructions(data) {
    let CRTDisplayInfo = {display: '', position: 0}
    let instructionInfo = {cycle : 1, X : 1}
    let signalStrength = 0
    data.forEach(instruction =>{
        let [command, qty] = instruction.split(' ')
        switch(command)
        {
            case 'noop' : 
                signalStrength += processCommand(1, 0, instructionInfo, CRTDisplayInfo)
                break
            case 'addx' :
                signalStrength += processCommand(2, Number(qty), instructionInfo, CRTDisplayInfo)
                break
        }
    })

    return CRTDisplayInfo
}

function processCommand(cycleSkips, addition, info, CRTDisplayInfo) {
    let signalStrength = 0
    for (let index = 0; index < cycleSkips; index++) {
        if((info.cycle - 20) % 40 == 0)
        {
            signalStrength = info.X * info.cycle
            // console.log(info.cycle, signalStrength)
        }
        UpdateDisplay(info, CRTDisplayInfo)
        info.cycle++
    }
    info.X += addition
    // console.log(info.cycle, info.X)
    return signalStrength
}

function UpdateDisplay(instructionInfo, CRTDisplayInfo)
{
    if(CRTDisplayInfo.position >= instructionInfo.X - 1 && CRTDisplayInfo.position <= instructionInfo.X + 1)
    {
        CRTDisplayInfo.display += '#'
        CRTDisplayInfo.position++
    }
    else
    {
        CRTDisplayInfo.display += '.'
        CRTDisplayInfo.position++
    }

    if(CRTDisplayInfo.position > 39)
    {
        CRTDisplayInfo.display += '\n'
        CRTDisplayInfo.position = 0
    }
}

function PrintDisplay(CRTDisplayInfo)
{
    let display = CRTDisplayInfo.display.split('\n')
    display.forEach(line => {
        console.log(line)
    })
}

start()