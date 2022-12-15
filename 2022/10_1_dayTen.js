let input1 = `addx 15
addx -11
addx 6
addx -3
addx 5
addx -1
addx -8
addx 13
addx 4
noop
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx -35
addx 1
addx 24
addx -19
addx 1
addx 16
addx -11
noop
noop
addx 21
addx -15
noop
noop
addx -3
addx 9
addx 1
addx -3
addx 8
addx 1
addx 5
noop
noop
noop
noop
noop
addx -36
noop
addx 1
addx 7
noop
noop
noop
addx 2
addx 6
noop
noop
noop
noop
noop
addx 1
noop
noop
addx 7
addx 1
noop
addx -13
addx 13
addx 7
noop
addx 1
addx -33
noop
noop
noop
addx 2
noop
noop
noop
addx 8
noop
addx -1
addx 2
addx 1
noop
addx 17
addx -9
addx 1
addx 1
addx -3
addx 11
noop
noop
addx 1
noop
addx 1
noop
noop
addx -13
addx -19
addx 1
addx 3
addx 26
addx -30
addx 12
addx -1
addx 3
addx 1
noop
noop
noop
addx -9
addx 18
addx 1
addx 2
noop
noop
addx 9
noop
noop
noop
addx -1
addx 2
addx -37
addx 1
addx 3
noop
addx 15
addx -21
addx 22
addx -6
addx 1
noop
addx 2
addx 1
noop
addx -10
noop
noop
addx 20
addx 1
addx 2
addx 2
addx -6
addx -11
noop
noop
noop`

function start()
{
    let data = input.split('\n')
    let signalStrength = processInstructions(data)
    console.log(signalStrength)
}

function processInstructions(data) {
    let instructionInfo = {cycle : 1, X : 1}
    let signalStrength = 0
    data.forEach(instruction =>{
        let [command, qty] = instruction.split(' ')
        switch(command)
        {
            case 'noop' : 
                signalStrength += processCommand(1, 0, instructionInfo)
                break
            case 'addx' :
                signalStrength += processCommand(2, Number(qty), instructionInfo)
                break
        }
    })

    return signalStrength
}

function processCommand(cycleSkips, addition, info) {
    let signalStrength = 0
    for (let index = 0; index < cycleSkips; index++) {
        if((info.cycle - 20) % 40 == 0)
        {
            signalStrength = info.X * info.cycle
            // console.log(info.cycle, signalStrength)
        }
        info.cycle++
    }
    info.X += addition
    // console.log(info.cycle, info.X)
    return signalStrength
}

start()