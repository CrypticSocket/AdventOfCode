start(4)
start(14)

function start(winSize)
{
    let seenChars = {};
    let windowSize = winSize;
    let first = 0;
    let last = 0;
    while(last <= input.length && last - first < windowSize)
    {
        let char = input[last]
        if(!seenChars[char])
        {
            seenChars[char] = 1
        }
        else
        {
            while(input[first] != char)
            {
                seenChars[input[first]] = 0
                first++
            }
            first++
        }
        last++
    }
    console.log(last)
}