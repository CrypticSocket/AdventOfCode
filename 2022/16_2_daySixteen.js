let input1 = `Valve AA has flow rate=0; tunnels lead to valves DD, II, BB
Valve BB has flow rate=13; tunnels lead to valves CC, AA
Valve CC has flow rate=2; tunnels lead to valves DD, BB
Valve DD has flow rate=20; tunnels lead to valves CC, AA, EE
Valve EE has flow rate=3; tunnels lead to valves FF, DD
Valve FF has flow rate=0; tunnels lead to valves EE, GG
Valve GG has flow rate=0; tunnels lead to valves FF, HH
Valve HH has flow rate=22; tunnel leads to valve GG
Valve II has flow rate=0; tunnels lead to valves AA, JJ
Valve JJ has flow rate=21; tunnel leads to valve II`

let input = `Valve QE has flow rate=3; tunnels lead to valves OU, ME, UX, AX, TW
Valve TN has flow rate=16; tunnels lead to valves UW, CG, WB
Valve UX has flow rate=0; tunnels lead to valves AA, QE
Valve HK has flow rate=5; tunnels lead to valves HT, QU, TW, WV, OK
Valve SK has flow rate=14; tunnels lead to valves GH, GA, XM
Valve HY has flow rate=0; tunnels lead to valves LG, AA
Valve BK has flow rate=0; tunnels lead to valves SZ, AA
Valve BY has flow rate=11; tunnels lead to valves SP, HS, DN, KD, TK
Valve GR has flow rate=0; tunnels lead to valves FE, OK
Valve OH has flow rate=0; tunnels lead to valves BM, KE
Valve DC has flow rate=0; tunnels lead to valves AX, XH
Valve YS has flow rate=0; tunnels lead to valves XH, EU
Valve KP has flow rate=0; tunnels lead to valves KI, OF
Valve LG has flow rate=0; tunnels lead to valves FE, HY
Valve FE has flow rate=4; tunnels lead to valves RU, GR, YI, LG, ME
Valve NK has flow rate=0; tunnels lead to valves SD, BM
Valve EU has flow rate=0; tunnels lead to valves NS, YS
Valve OF has flow rate=0; tunnels lead to valves CJ, KP
Valve TW has flow rate=0; tunnels lead to valves HK, QE
Valve GL has flow rate=0; tunnels lead to valves AF, CQ
Valve OU has flow rate=0; tunnels lead to valves KN, QE
Valve BM has flow rate=24; tunnels lead to valves GH, NK, YH, OH
Valve GA has flow rate=0; tunnels lead to valves SK, SZ
Valve EI has flow rate=17; tunnels lead to valves ZX, AF
Valve QN has flow rate=25; tunnel leads to valve SD
Valve ZX has flow rate=0; tunnels lead to valves EI, WB
Valve ME has flow rate=0; tunnels lead to valves QE, FE
Valve CJ has flow rate=21; tunnels lead to valves OF, YI, KD
Valve AX has flow rate=0; tunnels lead to valves DC, QE
Valve LW has flow rate=0; tunnels lead to valves AA, HT
Valve CQ has flow rate=18; tunnels lead to valves GL, XM
Valve KN has flow rate=0; tunnels lead to valves SZ, OU
Valve HS has flow rate=0; tunnels lead to valves UZ, BY
Valve RU has flow rate=0; tunnels lead to valves TK, FE
Valve SZ has flow rate=6; tunnels lead to valves WV, GA, BK, KE, KN
Valve AF has flow rate=0; tunnels lead to valves GL, EI
Valve YI has flow rate=0; tunnels lead to valves FE, CJ
Valve HT has flow rate=0; tunnels lead to valves LW, HK
Valve WV has flow rate=0; tunnels lead to valves SZ, HK
Valve TK has flow rate=0; tunnels lead to valves BY, RU
Valve GH has flow rate=0; tunnels lead to valves BM, SK
Valve CG has flow rate=0; tunnels lead to valves TN, SP
Valve AA has flow rate=0; tunnels lead to valves HY, UX, VQ, LW, BK
Valve SP has flow rate=0; tunnels lead to valves BY, CG
Valve XM has flow rate=0; tunnels lead to valves SK, CQ
Valve DN has flow rate=0; tunnels lead to valves NS, BY
Valve XH has flow rate=22; tunnels lead to valves YS, QU, UZ, DC
Valve KI has flow rate=20; tunnels lead to valves UW, KP
Valve OK has flow rate=0; tunnels lead to valves HK, GR
Valve YH has flow rate=0; tunnels lead to valves VQ, BM
Valve UZ has flow rate=0; tunnels lead to valves XH, HS
Valve KE has flow rate=0; tunnels lead to valves OH, SZ
Valve VQ has flow rate=0; tunnels lead to valves AA, YH
Valve QU has flow rate=0; tunnels lead to valves HK, XH
Valve WB has flow rate=0; tunnels lead to valves TN, ZX
Valve UW has flow rate=0; tunnels lead to valves KI, TN
Valve SD has flow rate=0; tunnels lead to valves NK, QN
Valve NS has flow rate=23; tunnels lead to valves EU, DN
Valve KD has flow rate=0; tunnels lead to valves BY, CJ`

function start()
{
    let data = processInput(input)
    Object.keys(data).forEach(pipe => {
        getDistances(data, pipe)
    })
    // console.log(data)
    let maxFlow = processData(data)
    console.log(maxFlow)
}

function processData(data) {
    let maxFlow = 0
    let currentPipe = 'AA'
    let sortedDistributionOfValves = Object.keys(data).filter(x => data[x].flow > 0).sort((x,y) => data[y].flow - data[x].flow)
    // let opened1 = new Set(sortedDistributionOfValves.filter((x, i) => i%2==0))
    // let opened2 = new Set(sortedDistributionOfValves.filter((x, i) => i%2!=0))
    let opened = new Set()
    let DP = {}
    let timeRemaining = 26
    // Max flow by me
    let maxFlowByMe = getMaxFlow(data, currentPipe, opened, timeRemaining, 0, DP, 1)
    // let maxFlowByElephant = getMaxFlow(data, currentPipe, opened2, timeRemaining, 0, DP)

    return maxFlowByMe// + maxFlowByElephant
    
}

function getDistances(data, pipe)
{
    let queue = [[0, pipe]]
    let visited = new Set()
    visited.add(pipe)
    let distances = {}
    while(queue.length)
    {
        let [d, currentPipe] = queue.shift()
        if(currentPipe != pipe)
        {
            distances[currentPipe] = d
        }
        let nextPipes = data[currentPipe].target

        for (const pipe of nextPipes) {
            if(!visited.has(pipe))
            {
                queue.push([d+1, pipe])
                visited.add(pipe)
            }
        }
    }

    data[pipe].distances = distances
}

function getMaxFlow(data, currentPipe, opened, timeRemaining, maxFlow, DP, player, path = []) {

    let valvesWithPositiveFlow = Object.keys(data).filter(x => data[x].flow > 0)
    let potentialValves = Object.keys(data).filter(x => data[x].flow > 0 && !opened.has(x))
    let allFlows = []
    if (data[currentPipe].flow > 0 && timeRemaining >= 1) {
        timeRemaining -= 1
        maxFlow += data[currentPipe].flow * timeRemaining
        opened.add(currentPipe)
    }
    // path.push(currentPipe +',' + timeRemaining)
    // console.log(path, maxFlow)

    if(opened.size >= Math.floor(valvesWithPositiveFlow.length/2) && player == 1 )
    {
        let older = opened.size
        let maxFlowByElephant = getMaxFlow(data, 'AA', opened, 26, 0, DP, 2)
        return maxFlowByElephant + maxFlow
    }
    
    if(timeRemaining <= 0)
    {
        return maxFlow
    }
    let most = 0
    let targets = Object.keys(data[currentPipe].distances)

    for (let i = 0; i < targets.length; i++) {
        let steps = data[currentPipe].distances[targets[i]]
        if(!potentialValves.includes(targets[i]))
        {
            continue
        }

        let result = DP[targets[i] + ',' + player + ',' + timeRemaining - steps]
        if(result != null)
        {
            allFlows.push(result)
        }
        else{
            let gotten = getMaxFlow(data, targets[i], new Set(opened), timeRemaining - steps, maxFlow, DP, player, [...path])
            allFlows.push(gotten)
            DP[targets[i] + ',' + player + ',' + timeRemaining] = gotten
        }
    }
    maxFlow = Math.max(...allFlows, maxFlow)
    
    return maxFlow
}

function processInput(input) {
    let regEx = /Valve (?<valve>[A-Z]+) has flow rate=(?<flow>\d+); tunnels? leads? to valves? (?<target>.*)/
    let data = {}
    input.split('\n').forEach(line => {
        let {valve, flow, target} = line.match(regEx).groups
        data[valve] = {
            flow : parseInt(flow),
            target : target.trim().split(', ')
        }
    })
    return data
}

start()