
start()

function start()
{
    let data = input.split('\n')
    let tree = getTreeStructure(data)
    let systemSize = 70000000
    let requiredSpace = 30000000
    sizeCalculator(tree)
    /console.log('Part 1 : ' + traverseAndFindSize(tree, 100000))
    let availableSpace = systemSize - tree['/'].size
    let freeUpSpace = requiredSpace - availableSpace
    // console.log(findDirectoriesToDelete(tree, freeUpSpace))
    console.log('Part 2 : ' + Math.min(...findDirectoriesToDelete(tree, freeUpSpace)))
    
}

function getTreeStructure(data)
{
    let tree = {"/":{}}
    let tracker = []
    for(let i = 0; i < data.length; i++)
    {
        let cliLine = data[i]
        if(cliLine.startsWith('$'))
        {
            let [sign, command, dir] = cliLine.split(' ')
            
            if(command == 'cd')
            {
                if(dir == '/')
                {
                    tracker = []
                    tracker.push(dir)
                }
                else if(dir == '..')
                {
                    let exitDir = tracker.pop()
                    // let currentDir = traverse(tree, tracker)
                    // currentDir['size'] = currentDir['size'] ? Number(currentDir.size) + Number(currentDir[exitDir].size) : Number(currentDir[exitDir].size)
                }
                else
                {
                    tracker.push(dir)
                }
            }
        }
        else if(cliLine.startsWith('dir'))
        {
            let [command, name] = cliLine.split(' ')
            traverse(tree, tracker)[name] = {}
        }
        else
        {
            let [size, name] = cliLine.split(' ')
            let temp = traverse(tree, tracker)
            // temp['size'] = temp['size'] ? Number(temp.size) + Number(size) : Number(size)
            temp[name] = size
        }
    }

    return tree
}

function traverse(tree, stack)
{
    return stack.length ? traverse(tree[stack[0]], stack.slice(1)) : tree
}

function traverseAndFindSize(tree, maxSize)
{
    let totalSize = 0;
    for(let key in tree)
    {
        if(key=='size' && tree[key] < maxSize)
        {
            totalSize += Number(tree[key])
        }
        else if(isNaN(tree[key]))
        {
            totalSize += traverseAndFindSize(tree[key], maxSize)
        }
    }

    return totalSize
}

function findDirectoriesToDelete(tree, requiredSpace)
{
    let spaces = []
    for(let key in tree)
    {
        if(key=='size' && tree[key] >= requiredSpace)
        {
            spaces.push(Number(tree[key]))
        }
        else if(isNaN(tree[key]))
        {
            let arr = findDirectoriesToDelete(tree[key], requiredSpace)
            spaces.push(...arr)
        }
    }
    return spaces;
}

function sizeCalculator(tree, maxSize)
{
    let totalSize = 0;
    for(let key in tree)
    {
        if(!isNaN(tree[key]))
        {
            totalSize += Number(tree[key])
        }
        else if(isNaN(tree[key]))
        {
            let calculatedSize = sizeCalculator(tree[key])
            tree[key].size = tree[key].size ? tree[key].size + calculatedSize : calculatedSize
            totalSize += calculatedSize
        }
    }

    return totalSize
}