let input1 = `30373
25512
65332
33549
35390`

start()

function start()
{
    let data = input.split('\n')
    // let treeCount = getVisibleTrees(data)
    // console.log(treeCount)

    let scenicScore = getSceneicScore(data)
    console.log(Math.max(...scenicScore))
}

function getVisibleTrees(data)
{
    let boundaryTressVertical = data.length * 2
    let boundaryTreesHorizontal = (data[0].length - 2) * 2
    let totalVisibleTreeCount = boundaryTressVertical + boundaryTreesHorizontal
    //console.log(totalVisibleTreeCount)    
    for(let row = 1; row < data.length - 1; row++)
    {
        let trees = data[row].split('').map(Number)
        // console.log(data[row])
        for(let tree = 1; tree < trees.length - 1; tree++)
        {
            // console.log(trees[tree])
            let column = data.map(d => d[tree])
            let currentTreeHeight = trees[tree]
            if(currentTreeHeight > Math.max(...trees.slice(0,tree)))        // From left
                totalVisibleTreeCount++
            else if(currentTreeHeight > Math.max(...trees.slice(tree+1)))     // From right
                totalVisibleTreeCount++
            else if(currentTreeHeight > Math.max(...column.slice(0,row)))   // From top
                totalVisibleTreeCount++
            else if(currentTreeHeight > Math.max(...column.slice(row+1)))   // From bottom
                totalVisibleTreeCount++
                
        }
    }
    return totalVisibleTreeCount
}

function getSceneicScore(data)
{
    let scenicScoreCol = []
    for(let row = 0; row < data.length; row++)
    {
        let trees = data[row].split('').map(Number)
        let scenicTreeScore = []
        for(let column = 0; column < trees.length; column++)
        {
            let score = 1
            if(column == 0 || row == 0 || row == data.length -1 || column == trees.length - 1)
                scenicTreeScore.push(0)
            else
            {
                let columnTrees = data.map(d => d[column]).map(Number)
                let currentTreeHeight = trees[column]
                
                // From left
                score *= checkNeighbouringTree(currentTreeHeight, trees.slice(0,column).reverse(), column, 0)

                // From right
                score *= checkNeighbouringTree(currentTreeHeight, trees.slice(column+1), column , 1)
                
                // From top
                score *= checkNeighbouringTree(currentTreeHeight, columnTrees.slice(0,row).reverse(), row, 0)

                // From bottom
                score *= checkNeighbouringTree(currentTreeHeight, columnTrees.slice(row+1), row, 1)

                scenicTreeScore.push(score)
            }
        }
        scenicScoreCol.push(Math.max(...scenicTreeScore))
    }
    return scenicScoreCol
}

function checkNeighbouringTree(treeHeight, trees, currentIndex, directionConsiderator)
{
    let score = 0;
    trees.every(tree => {
        if(tree >= treeHeight)
        {
            score++
            return false
        }
        else
        {
            score++
            return true
        }
    })
    return score
}