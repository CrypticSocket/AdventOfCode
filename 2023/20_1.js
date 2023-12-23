/*
Learnings: 
Did this in my own unqiue way and it worked very easily.
Easily = ran without much error checks in the first try
BUT while doing part 2 I overwrote most of the code in this file -_-
This is not the first time.
*/

let dummyInput = `broadcaster -> a, b, c
%a -> b
%b -> c
%c -> inv
&inv -> a`

let dummyInput2 = `broadcaster -> a
%a -> inv, con
&inv -> b
%b -> con
&con -> output`

let actualInput = `%cg -> mt, hb
%sp -> xm
%nr -> hf, mt
broadcaster -> tl, gd, zb, gc
&qz -> qn
%df -> hd
%vg -> rm, kx
%gm -> mt, md
%ls -> hc
%lq -> zq, fx
&zd -> bz, kg, zb, lf, sq, zk, jx
%lz -> mt
%sq -> zk
%zn -> kx, tc
&zq -> mb, hc, qz, ql, tl, ls
&mt -> zm, tt, mh, gd, md
%lm -> mb, zq
%hf -> mt, sm
%hb -> mh, mt
%rm -> kx
%gc -> kx, sp
&cq -> qn
%mh -> jt
%zm -> nr
%xm -> kx, ld
&jx -> qn
&qn -> rx
%mp -> qt, kx
%zk -> vj
%hd -> mp, kx
%tl -> zq, hl
%zb -> zd, ph
%cl -> zd
&tt -> qn
%ld -> zn
%js -> lq, zq
%sm -> mt, lz
%qt -> vg, kx
%md -> cg
%vj -> bz, zd
%qs -> zd, fs
%mb -> ps
&kx -> cq, gc, sp, df, ld
%hc -> lm
%tc -> df, kx
%ps -> js, zq
%fs -> qc, zd
%hl -> jj, zq
%bz -> qs
%jj -> zq, ql
%ql -> ls
%ph -> kg, zd
%qc -> cl, zd
%lf -> sq
%kg -> lf
%fx -> zq
%jt -> zm, mt
%gd -> gm, mt`

let moduleType = {
    BROADCASTER : 'broadcaster',
    CONJUNCTION : 'conjunction',
    FLIPFLOP : 'flipflop'
}

let statusState = {
    OFF : false,
    ON : true
}

let pulseType = {
    PULSE_LOW : 'LOW',
    PULSE_HIGH : 'HIGH'
}

let LowPulseCount = 0, HighPulseCount = 0

var FormatInput = function(input)
{
    let machines = input.split('\n').map((a => a.split(' -> ')))
    let machinesInfo = {}
    let conjunctionTypes = []
    let flipFlopTypes = []

    for(let machine of machines)
    {
        let [module, targets] = machine
        let type, status, dependent
        if(module == moduleType.BROADCASTER)
        {
            type = moduleType.BROADCASTER
            status = null
            dependent = null
        }
        else if(module[0] == '%')
        {
            module = module.slice(1)
            flipFlopTypes.push(module)
            type = moduleType.FLIPFLOP,
            status = statusState.OFF
            dependent = null
        }
        else if(module[0] == '&')
        {
            module = module.slice(1)
            conjunctionTypes.push(module)
            type = moduleType.CONJUNCTION
            status = null
            dependent = []
        }

        machinesInfo[module] = {
            type : type,
            status : status, 
            dependent : dependent,
            targets : targets.split(', ')
        }
    }

    

    SetUpConjunctions(machinesInfo, conjunctionTypes)

    return [machinesInfo, flipFlopTypes]
}

var SetUpConjunctions = function(machinesInfo, conjunctionTypes)
{
    let allMachines = Object.keys(machinesInfo)

    for(let conjunction of conjunctionTypes)
    {
        let module = machinesInfo[conjunction]
        let dependent = allMachines.filter(m => machinesInfo[m].targets.indexOf(conjunction) > -1)
        module.dependent.push(...dependent)
        if(module.memory == undefined)
        {
            module.memory = {}
        }
        for(let d of module.dependent)
        {
            if(module.memory[d] == undefined)
            {
                module.memory[d] = pulseType.PULSE_LOW
            }
        }
    }

}

var PulseCounter = function(pulse)
{
    if(pulse == pulseType.PULSE_LOW)
    {
        LowPulseCount++
    }
    else
    {
        HighPulseCount++
    }
}

var FlipFlopStatusChecker = function(flipFlopTypes, machineInfo)
{
    return flipFlopTypes.every(ff => machineInfo[ff].status == statusState.OFF)
}

var StartProcedure = function(machineInfo, totalPressCount, flipFlopTypes)
{
    let buttonPressed = 0
    while(totalPressCount > buttonPressed)
    {
        // Button Press
        PressButton(machineInfo)
        buttonPressed++

        if(FlipFlopStatusChecker(flipFlopTypes, machineInfo))
        {
            cycle = buttonPressed
            let remainingCycles = Math.floor(totalPressCount / cycle)
            buttonPressed = totalPressCount - (totalPressCount % cycle)
            LowPulseCount *= remainingCycles
            HighPulseCount *= remainingCycles
        }
    }
    
    return LowPulseCount * HighPulseCount
}

var PressButton = function(machineInfo)
{
    let signalQueue = [['button', moduleType.BROADCASTER, pulseType.PULSE_LOW]]
    while(signalQueue.length > 0)
    {
        let [source, moduleName, pulse] = signalQueue.shift()
        let output = ProcessInput(machineInfo, source, moduleName, pulse)
        signalQueue.push(...output)
    }
}

var ProcessInput = function(machineInfo, source, moduleName, pulse)
{
    let outputSignal = []
    PulseCounter(pulse)
    let module = machineInfo[moduleName]
    if(module == undefined)
        return []
    if(module.type == moduleType.BROADCASTER)
    {
        let targets = module.targets
        for(let target of targets)
        {
            outputSignal.push([moduleName, target, pulse])
        }
    }
    else if(module.type == moduleType.FLIPFLOP)
    {
        if(pulse == pulseType.PULSE_LOW)
        {
            let newPulse = module.status == statusState.OFF ? pulseType.PULSE_HIGH : pulseType.PULSE_LOW
            module.status = !module.status
            let targets = module.targets
            for(let target of targets)
            {
                outputSignal.push([moduleName, target, newPulse])
            }
        }
    }
    else if(module.type == moduleType.CONJUNCTION)
    {
        module.memory[source] = pulse
        let allHighPulses = module.dependent.every(d => module.memory[d] == pulseType.PULSE_HIGH)
        let outputPulse = allHighPulses ? pulseType.PULSE_LOW : pulseType.PULSE_HIGH
        let targets = module.targets
        for(let target of targets)
        {
            outputSignal.push([moduleName, target, outputPulse])
        }
    }

    return outputSignal
}

var GetResult = function(input)
{
    let [machineInfo, flipFlopTypes] = FormatInput(input)
    let result = StartProcedure(machineInfo, 1000, flipFlopTypes)
    return result
}

// console.log('Dummy Output 1 :\t' + GetResult(dummyInput) + '\nExpected :\t\t32000000')
// console.log('Dummy Output 2 :\t' + GetResult(dummyInput2) + '\nExpected :\t\t11687500')
console.log('Actual Output : ' + GetResult(actualInput))