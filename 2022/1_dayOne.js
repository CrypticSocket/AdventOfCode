var a = ``

var b = a.replaceAll('\n\n',',')
var c = b.split(',')
var d = []
c.forEach(x => d.push(x.split('\n').reduce((a,b)=> parseInt(a) + parseInt(b))))
console.log(d)
console.log(Math.max(...d))

var e = d.sort((a,b) => b-a).slice(0,3)
console.log(e.reduce((a,b) => parseInt(a) + parseInt(b)))