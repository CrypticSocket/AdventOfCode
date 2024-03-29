/*
Learnings: 
Reflections can be easy if we split an image into two sections and then cut down the sides to equal sizes, reverse one and check it.
*/

let dummyInput = `#.##..##.
..#.##.#.
##......#
##......#
..#.##.#.
..##..##.
#.#.##.#.

#...##..#
#....#..#
..##..###
#####.##.
#####.##.
..##..###
#....#..#`

let actualInput = `##.#.##
#.##...
.######
##....#
#.##.#.
.#.####
.#.####
#.##.#.
##....#
.######
#.##..#
##.#.##
..###..
..###..
##.#.##
#.##..#
.######

###....
##..###
.####..
.#.....
####.##
.....##
#..####
.#...##
#...###
.###...
.#..###
####.##
....###
....###
###..##

...##.##.##....
.##.######.##..
.##.#....#.##..
###.######.####
#.##......##.##
..###.##.###...
#####....######
####..##..#####
.###.#....###..
#####....######
..#........#...

####....##.
##.#....##.
#..#.###.##
.###...#.##
..###..#.#.
#.#..#.#.#.
.##..######
###..#....#
##.###..###
..##.#.##..
.#.##.#.#.#
.##.##.#.#.
.##.##.#.#.
.#.##.#.#.#
..##.#.##..

##...###..#.###
##...###..#.##.
##...###..#.##.
##...###..#.###
...###..###..#.
#.###.##....#.#
.#.#.#...#.#..#

###.#.##.#.##
..##.####.##.
##...#..#...#
.....#..#....
####.####.#.#
..#.#.##.#.#.
#####....####
..####..####.
..##########.
##..##..##..#
...#......#..
...#.####.#..
######..#####
###.######.##
##..##..##..#

#.##.#...
..##...##
##..##.##
##..##...
..###.#..
#.##.#...
#.##.#.##
#.##.#...
#.##.#...
..##..#..
#.##.##..
######.##
#....####
.......##
######.##
.####..##
#.##.####

.####....#..##.##
..########..####.
.#..##..#..####..
#.#..#..###...###
..#...##.#..#.##.
###.#.##.###..##.
....###.#..####.#
....###.#..####.#
###.#.##.###..##.
..#...##.#..#.##.
#.#..#..###...###
.#..##..#..####..
..########..#.##.
.####....#..##.##
.####....#..##.##

...#..#...#.#.#
...#..##...#..#
####.###.#...##
..#..##.#.#....
##.#.#...#.#.#.
.....###..#.#..
..#.#.#.....##.
..#.#.#.....##.
.....###..#.#..
##.#.#...#.#.#.
..#..##.#.#....
####.#.#.#...##
...#..##...#..#
...#..#...#.#.#
######.....####

.####.#
##..##.
###.###
......#
......#
#....##
#....##

...##...##.#.#.
...##...##.#.#.
##....##.#.#.#.
#..##......#.##
...##...#######
########....#.#
.##..##......##
#......#..#...#
#..##..##.#.###

.##.###...#
.##.###..##
.##.##.###.
#..##..##..
#..#..#.#..
#..#..#####
....##.####
....#..####
####.......
#..#.##.#..
#####.##.##

..#.#.#.##....#..
.#...###.##.#..#.
.#...###.##.#..#.
..#.#.#.##....#..
##..#.#..#..#.#.#
.#.#..#.#.##.....
.......###.......
####..#...#.##.##
.#.#.#...........
.#...#...........
####..#...#.##.##

##..###.#....
#....###....#
..##....#....
.####...##..#
.#..#.#.#..#.
.####...#...#
#.##.#.#...##
..##.....##..
########..#.#
#....########
.####....##..
#.##.#..####.
#.##.#.#####.

#.#..##.###
#.#..###...
.#.#.##.#..
.####...###
####..##...
...##...#..
##.#.###...
#..##..##..
#..#.##..##
.######.###
..#####.###

#.#.####.#.#.###.
#.#.####.#.#.###.
#.###..###.##.##.
#.#.####.#.##..#.
############.##.#
.#.######.#.#....
...#....#...#.###
#..##..##..#..#..
.##......##..###.
...##..##...##..#
..#..##..#...###.
.....##......####
..###..#.#..###.#
#.#.#..#.#.#.##..
.###....###..#.##
##.#.##.#.###..##
.#........#..#.##

#..####..####
###.##.######
####..#######
#...##...#..#
###....###..#
#........#..#
###.##.###..#
..#....#.....
............#
#..####..#..#
.##....##....
##.#..#.#####
###.##.######
....##.......
###....######
##......##..#
...#..#......

.###.#..##..##..#
#..#######..#####
.#.##.##.#..#.##.
..........##.....
..........##.....
##...###.####.###
#.#.##..######..#
##.#######..#####
#.....##..##..##.
#....############
.#.#.#..######..#
#.##.####.##.####
###.#####.##.####
.#..#.##.####.##.
#..##.##.#..#.##.
.#####..#....#..#
#.##.#..######..#

####.##.##.##.#
..#............
#####..####..##
.###....##....#
..###..####..##
#...#..#..#..#.
.#...##....##..
.#.#.##.##.##.#
#..............
#..#....##....#
....#..#..#..#.
.#.############
.##############
....##########.
...#.##.##.##.#

...........#...
.#.##.#..#..###
########..#####
..........#.###
#......#...#.##
#.####.####..##
.#....#......##
.#....#.#.#.###
...##.......#..
#.####.##....##
#......##.#....
###..#####..#..
#........##.#..

##########.#.##.#
#.##.#...##..#..#
##..###.#..###.#.
##..###.#..###.#.
#.##.#...##..#..#
##########.#.##.#
########.....##..
#.##.##.##....##.
........##..#...#
#....#.##..#...#.
#.######...##.#..

....#..
#..###.
..###.#
..##..#
#..###.
....#..
####...
...##..
..#.###
##...#.
#.#..#.
#.#..#.
##...#.

.###.##.###.#..
.....##.....###
##.######.##...
#..######..##..
#.#.#..#.#.##..
.##......##..##
...######....##
.##.#..#.##.###
.##.#.##.##..##
###......######
#....##....####
....#..#.......
..#......#..#..

#..#######.
#..########
.#.#..##.##
.#.##...#.#
.#.##...#.#
.#.#..##.##
#..########
#..#######.
..#.##.##..

.##....##.###.#
..##..##....#..
..##..##.......
.##....##.###.#
##......###.###
#.#....#.##.##.
#.#....#.#.#.##
#.######.##....
..#.##.#..#.##.
...####...#.##.
.#.####.#..#..#
###....###.##..
##..##..##.##..

####.##..####
####.##..####
..#.#######.#
.#.##.#.##...
.###...##.#..
.##.###.####.
.##..#.#....#
.##..#.#....#
.##.###.####.
.###...##.#..
.#.##.#..#...
..#.#######.#
####.##..####

####..#.##....#
####..#.##.....
#..##.###.##.##
......#...##.#.
....#.##.##....
####.#.#.##.#..
#..#..#####..##
............#.#
#..#..##.#...#.

####.##.####..#
.##..##..##..#.
#..#....#..#...
.##......##...#
.####..####....
.....##.....#.#
#..#....#..#...
####.##.#######
....####....#.#

##..#.....###..#.
....#.##.##...###
#..####.##...#.##
##.##..###...#.#.
##.#.####.##.....
#.####.###.#.##..
##.#..###.#..##..
###.#.#.#.#.#.#..
###.#.#.#...#.#..
....#..#.#.#..##.
..#.#.###.#.#..#.
..#.#.###.#.#..#.
....#..#.#.#..##.
###.#.#.#...#.#..
###.#.#.#.#.#.#..

.#.##..##.#..
.##########..
..##.##.##...
#...#..#.....
...##..##....
.#.######.#..
#...#..#...##
#.#......#.##
.###.##.###..
.#.#.##.#.#..
#..######..##
#.#..##..#.##
.#.######.#..
#....##....##
.#..#..#..#..
#.#.#..#.#.##
.##########..

....###.....####.
##.####..#.#..#.#
####.##..#.##...#
...#....#...##..#
...#...#....##..#
####.#.#..##.####
....#.###.#......
##.##...####...##
##.##...####...##
....#.###.#......
####.#.#..##.###.
...#...#....##..#
...#....#...##..#

..#.##..#
..#.##..#
#######..
#..#.##..
#.#....##
#..#...#.
###.#.#..
#.#.#..##
#.#.#..##
###.#.#..
#..#...#.
#.#....##
#..#.##..
#######..
..#.##.##

....#.##.####
#.##.#...#...
..####..#..##
##...#...#.##
#.####..##.##
###..######..
.##..######..

#..####.#.#
#..####.#.#
#...#.#.#.#
.##.#.##..#
#..##..####
##..##.##..
####..##.#.
#.##..##.#.
##..##.##..

##.#..#.###.#..
##..#.######.#.
###..#.##.#....
##.####.#.####.
..#.####.#.#..#
...#.#.##.###..
###....#.#.#..#
..#.###.##..##.
...#.###.###...
############.#.
###########..#.

.##....
.#.#...
#..####
#..####
.#.#...
.##....
...#..#

.#.##.#..##..#.
..####....#..##
#......#....#.#
.######.#..#.##
.........#####.
..####..#......
..####..#......
.........#####.
.######.#..#.##
#......#....#.#
..####....#..##
.#.##.#..##..#.
.#.#..#.##..#..
.#.##.#...####.
.#.##.#.#...#..

...#.#..#
##..#....
###......
###......
##..#....
...#.#..#
#...##..#
..##....#
..#.##..#
#.....##.
#....####

...###..###
#..##..####
##.##.....#
..#..###..#
.#.##.###..
#...###.###
....#.#.##.
#...#......
#...#......
....#.#.##.
#...###.###
.#.##.###..
..#..###..#
##.##.....#
#..##..####
...###..###
....##..###

..##.#.#..#..#.##
..#.#..##.#.###..
..#.#..##.#.###..
..##.#.#..#..#.##
#..##.##..#.##.##
.#####.#..###...#
...#.....##.####.
..#....#..##..#..
.#..##.#..###.##.
....#.####.####.#
...#.###..#..#..#
.##.#.#..###...##
..#.#.#..###...##

.###.###...
##..#...##.
.##.#.....#
...#...#...
##.#...#.#.
##.#...#.#.
...#...#...
.##.#...#.#
##..#...##.
.###.###...
#.##.##.##.
#.##.##.##.
.###.###...

.#.##......
.#.##......
..##.##..##
....##.##.#
...###.##.#
##.##..##..
.##.##....#
##.#..#..#.
.#..#.....#

#..#.##..#..#..
#..#....#..##..
.##.#.#####.##.
####.#.##......
.##.##..##.....
#..#.###.###...
.##.........#..
#####..#.#.....
.##.#.#........
.....#..#....##
####.###..###..
#..#.##..#.##..
.##.###...#####

#..#.#.##..#..#
.##.#.###.....#
.##.#..##.#...#
########.#..##.
####.#.#####.##
....##...#.##..
....#.##.###.#.
..........#.#..
..........#.#..
....#.##.##..#.
....##...#.##..

..#####.####...#.
......#.#.###.##.
.##.#...#..#..###
.##.#...#..#..###
......#.#.###.##.
..#####.####...#.
#.####....#.#..#.
####.##..#.###.#.
..#..##.#..###..#
##....###.##.#.##
.##....###.##..#.
.##....###.##..#.
##....###.##.#.#.

..#.####.##......
....####.##......
.#.###.###.#....#
#.###..##########
....###.##.######
#......#.#.######
##...#..#..#.##.#

....#...##..#.#..
#..#....#....#..#
.#..##..#..#.#...
..#.#..#..#.##.##
.##...##.##..##..
.##...##.##..##..
..#.#..#..#.##.##
.#..##..#..#.#...
#..#....#....#..#
....#...##..#.#..
....##...#....###
.#..#.#.#..##..##
#...##..###....##
#...##..###....##
.#..#.#....##..##

..#..#.#..##.#..#
#.#.###..##.#.##.
..##..####..#####
.#.##..#...#.####
###.#.#..##.#####
###.#...#.###.##.
###.#.###..#..##.
#..#....#.##..#..
..###....#..##..#
#.#####.##.#.####
#.##.#...#..##..#
##.....###...#..#
#...##....#...##.
.###.#..#.#######
.###.#..#.#######

.##.#..
###....
#.#....
...#..#
#..####
###....
###....
#..####
...#..#

##.....#..#..
....##.####.#
....#.#.##.#.
.#.#.#......#
#....##....##
##..##.#..#.#
#.#.#..###...
####.##.##.##
####.##.##.##

......###....
...##.####.##
..#..######..
##..##....##.
###.#.#..#.#.
......#..#...
###..##..##..
##.##......##
.....######..
..####.##.###
.......##....
...#.#....#.#
..###......##
###.##....##.
##..#.####.#.
###.#..##..#.
...##.#..#.##

..#.##.#....#
..######....#
#..#..#..##..
....##.......
#..####..##..
..#....#....#
##.####.####.
#.#.##.#.##.#
#..#..#......
#.#....#.##.#
#..####..##..
##......####.
.##....##..##

#...#.#
#...#.#
####.#.
..##..#
.######
....#..
.##..#.
....#..
....#..
.##..##
....#..
.######
..##..#
####.#.
#...#.#

..##...#..##...##
.......#.#.##.#.#
......#..###.#.#.
......#####.#..##
##..##.#####..###
##..###.#.###.#.#
.......#.#.##..##
..##...#.#.#.##.#
##..##..#..##.#.#
##..####.##.#.###
##..###.#.#.##..#
.......#..#.##.#.
..##...##.#.#.###
##..##.######.#..
.#..#.##.##..##..
..##......##.#.##
..##..#..#.....#.

.#....####.
..#.#.####.
.#####....#
##...######
##.....##..
.#..#..##..
..##.#....#
#...###..##
#...###..##
..##.#....#
##..#..##..
##.....##..
##...######

.##.##..#
##...####
#...#..##
##....#..
....#..##
...#.####
...#.####
....#..##
##....#..

#.##..##.##..#.#.
#........##.#....
###....######..##
...####...#..###.
##......##....#..
..#.##.#...##.###
#........#.####..
#.#....#.#.#..##.
#.#....#.#.#..##.
#........#.####..
..#.##.#....#.###

......#..#.##..##
......#..#.##..##
#.#.##.....###.##
#..###....##.#..#
..#.##..###....#.
.#.#.#..##....##.
#.#....#.##...#.#
.##..###.#.#.##.#
.##..###.#.#.##.#
#.#....#.##...#.#
.#.#.#..##....##.
..#.##.####....#.
#..###....##.#..#
#.#.##.....###.##
......#..#.##..##

.#.###....###.###
....##.#.###....#
##....#.#.#.##...
##....#.#.#.##...
....##.#.###....#
.#.###....###.###
..#..#.#...##.#..
.#.#..#...####.##
#..#...#.###...##
.##.#.#.#..#..#.#
.##.#.#.#..#..#.#
#..#...#.###...##
...#..#...####.##
..#..#.#...##.#..
.#.###....###.###
....##.#.###....#
##....#.#.#.##...

##..##..####.
.#..#.#.####.
.####.#.#..#.
###.###.#..#.
##..##...##..
######..####.
......#.#..#.
.#..#........
##..##.######
######.##..##
.####..#....#

##...#..#...#
###.##..##.##
##..#####...#
..#........#.
..#.#.##.#.#.
##.#.####.#.#
......##.....
..#.##..##.#.
##.#.####.#.#
..###.##.###.
###...##...##
..#..#..#..#.
..#.#....#.#.
######..#####
.....#..#....
..#.#.##.#.#.
##...####...#

.##.##..#....#..#
.....####.##.####
.#...###......###
.#...............
.#...############
#.#......####....
.#.###..#....#..#
.#.#.#..#....#..#
#...#.##......##.
#.#.#.##.#..#.##.
..#...##..##..##.

.##...#.#
####...#.
#..#..#..
######.##
.....#.#.
....#..##
#..######
.#..##...
....##...
.....###.
.##...###
.##.#.###
.##.#.###

.#.##.######.##
.#.##.######.##
#..##.#.##.#.##
##..#.######.#.
.###..#....#..#
...#.#.######.#
..##.#.####.#.#

.##...##...
.##.#..#...
#....#.##..
.###..#.###
....#......
#.#.#...###
..####.#...
..####.#...
#.#.#...###
....#......
.###..#.###
#....#.##..
.##.#..#...
.#....##...
.##.#..##..

#.#.#..#.#.###..#
#####..##########
.#.#.##.#.#.#####
.#.#.##.#.#.##..#
###.#..#.########
.##..##..##.#....
###.####.########
.######.###..#..#
...#.##.#....####
#...#..#...###..#
###......###..##.
###.#..#.####....
..###..###..##..#
####....####..##.
#.##....##.###..#

.#...#....#...#.#
#.###......###.##
..#.##....##.#..#
..#.##....##.#..#
...#.##..##.#....
####.#....#.#####
###.#..##..#.####
..##...##...##..#
##..########..###
##..########..###
..##...##...##...
###.#..##..#.####
####.#....#.#####

..#.####.##.###
###..#.#....#.#
###..#.#....#.#
..#.####.##.###
##....##.##.##.
#.#.#.##.##.##.
##....#.####.#.
##......#..#..#
##..##.#....#.#
#..#...######..
###.#####..####

#......##.#.#..#.
#......#..#..##..
#......#..#.#..#.
#..##.###...#..#.
#......#.###.##.#
...##...####....#
.#.##.#.##..#..#.
..#..#..#....##..
...##....########
...##....#.#.##.#
###..#####.#.##.#

..#..####....
..####.#.#...
...##..#.#.#.
..#.#####...#
..#..###..#.#
....###...#.#
....###..##.#
..#..###..#.#
..#.#####...#
...##..#.#.#.
..####.#.#...
..#..####....
..#.#.#.##...
###.....###..
##.###...#..#

#.....#.#..#..#..
...#..#.##...#..#
.####.#.###..#.##
.####.#.###..#.##
...#..#.##...#..#
#.....#.#..#..#..
.##......#.#...#.
..#.#.##.....#...
.#...#.####.#..#.
.####.#.######.##
#..#.#...##...#.#
#..#.#...##...#.#
.####.#.######.##
.#...#.####.#..#.
..#.#.##.....#...
.##......#.#...#.
#.....#.#..##.#..

..#.#.#
..#.#.#
....##.
.##..#.
#..#.#.
....#.#
....#..
.....#.
....##.

.........#.
.#....#....
##....##.#.
#......##.#
.######...#
#.......###
.######..##
#..##..###.
#.#..#.#...
#.#..#.#...
#..##..###.

###..#.###.
##.##...#..
.#.#..###..
.#.###.####
.#.###.####
.#.#..###..
##.##...#..
###..#..##.
.####.#..#.
.##...###..
#...#.#.#.#
#...#.#.#.#
.##...###..

.#.#.#.....
...###.....
....#.#####
##..#......
.###..#####
##.....####
.###.#.####
.#.#..#....
.######....
....##.####
..##.#.....
#.###.#####
.##..##....
.#..##..##.
#.#...#....

..#.##.#..#
#.#....#.##
#.##..##.#.
#.##..##.#.
#.#....#.##
..#.##.#..#
..#....#...
..#######.#
.#.#..#.#.#

####..####..#
..##..#####.#
##..##....##.
..##..####..#
....#.#..#.#.
...#.######.#
...#..#..#..#

.###.####.###
.....####....
.###..##..###
...#......#..
.####.##.####
###..#..#..##
....#....#...
.###..##..###
#...######...
#...#.##.#...
..##.#..#.##.
...#.####.#..
.##.######.##
...#.####.#..
#....#..#....
.###.####.###
#...######...

###.####.#..#..
..##...##.#.#.#
##.#..###.##.##
..#.##.##.###.#
..###..###.##.#
......##..##.##
#####..#.##..#.
#####...#......
###....#.###.#.
.....#.##.#####
##..#.#.##...#.
........####.#.
........####.#.
##..#...##...#.
.....#.##.#####

..........####.
...##....#....#
.........##..##
#......##.####.
#...#..##..##..
.#....#...####.
........#######
#.####.###....#
##.##.###.####.
#......#.#....#
#......#.#.##.#

#######.##....#
##.#.##########
##..##.#..#..#.
###....#.#.##.#
######.#..#..#.
..###.##.##..##
##.##.#..#....#
##.#.##........
#..#..##.#....#
#.###..#..#..#.
#.#.#.###.####.
#.#.#####.####.
#.###..#..#..#.

##.###...#.##..#.
#.#....##.###.#..
.#.....#.###..#..
.#.....#.###..#..
#.#....##.###.##.
##.###...#.##..#.
..#.###...#..#.##
#.#.#.##.######..
#.#.#.##.######..
..#.###...#..#.##
##.###...#.##..#.
#.#....##.###.##.
.#.....#.###..#..

#.#.##..##.#.##..
##.#.####.#.##.##
.####....####.###
.#.###..###.#..##
.#.#......#.#..##
..#.#.##.#.#.....
.#...#..#...#.#..
.#######.####.###
#..#.#..#.#..####
.##.##..##.##....
..#........#..###
#..##....##..####
#.#..#..#..#.#...
..##.####.##.....
#####....#####...
##.########.##...
#.##......##.####

......###..##
#####.######.
.##...##.#.#.
########.##..
....#..#.....
.......###.#.
.##.##.###.#.
#..####..##.#
#..####..##.#
.##.##.###.#.
.......###.#.
....#..#.....
########.##..
.##...##...#.
#####.######.
......###..##
#########....

####...####
.###.#.....
.###.#.....
####...####
.####.##..#
.#..#######
#####...#.#
#.####.##..
#.#...#.##.
#.#####....
...###.#.##
#.#.#.#...#
##.#####.##
#...##.####
#...#..####

#..#..####..#
#######..####
.##..######..
#...#..##..#.
####.##..##.#
...###.##.###
##..##.##.##.
.#...##..##..
#.....####...
###...####...
.....#....#..
....########.
#.#.#..##..#.
#....#....#..
#.#..#....#..

.###.####..
.########..
.###..###.#
##########.
.###..###..
.###..###..
##########.
.###..###.#
.########..
.###.####..
#...##...##

#.#.###.#
#.#.###.#
###.#.###
...###...
..#..##.#
..#...#.#
#.#...#.#
..#..##.#
...###...

..##.#...
..##.#...
...##...#
..#..##..
.#.##.#..
#...##...
##..####.
#.###.#..
#.###.#..
#...####.
#...##...
.#.##.#..
..#..##..
...##...#
..##.#...

###..##...#.#####
.#.##.#..#.#.....
#.#####.#.####.##
.#.#..#.#.###.###
##.##.##....#...#
##.##.##....#...#
.#.#..#.#.###.###
#.#####.#.#######
.#.##.#..#.#.....
###..##...#.#####
...#......#.##..#
..#.##....#...###
......###..#.....
..#.##.#.#.....#.
..#.##.#.#.....#.

###.###.#
###.#....
##.#.###.
###.##.##
..#..#..#
######..#
##.###..#

.....#.########
..#.###..##.#.#
##..#...##..##.
##....#.#.#.#..
#####.####...##
#...#.#.#.##.##
#...#.#.#.##.##
#####.####...##
##....#.#.#.#..
##..#...##..##.
..#.#.#..##.#.#
.....#.########
.#....##...####
##.###..#..##.#
##.###..#..##.#

#########.#..####
...##...#..#.#.#.
##....##......#..
.........##..###.
#..##..###.#.##..
#..##..#.#.#.##..
.........##..###.
##....##......#..
...##...#..#.#.#.
#########.#..####
..####..#.#######

...####...##.
.##....##....
.########.##.
##.#..#.#####
####..#######
####..#.##..#
..#.##.#.....
##..##..##..#
#.##..##.#..#
##..##..##..#
#.######.#..#
.###..###....
#..#..#..#..#
....##....##.
#.######.#..#

.#.#...
#......
.#..#.#
..#..#.
..###..
#.#####
#...###
#...###
#.#####
..###..
..#....
.#..#.#
#......
.#.#...
#.#..#.
#.#..#.
.#.#...

####..##.....#.
....###.###....
#######.##.#...
.##..#..###.###
.##.##..####..#
.##.#..####.###
####.#..##.##..
.##.####.#.#.#.
....#.##.##..##
....#.##.##..##
.##.####.#.#.#.
####.#..#####..
.##.#..####.###

..####.....
##....####.
..#..#....#
#.####.##..
#.####.##..
#.####.#.##
.#....#...#
#......#.##
#.####.##..
..####..##.
..#..#..#.#
.#.##.#.##.
.#.##.#.##.
..#..#..###
..####..##.

#......##..
.#.##.#..##
.#....#..##
.#....#.#..
####.###.##
.######....
###..######
..####..#..
..#..#..#..
##....##...
##....##...
########.##
##....##...

##..###.####.
..##..#.#..#.
#########.#..
######.##..#.
######.....#.
######..#..#.
..##......#.#
##..####...#.
##########.#.
##..##.####..
..##...###...
......##.#.##
......###.###
#######.#####
######...#.##
#.##.###.##..
..##..###.#..

#..#.##.###
.##..##.#.#
.....#..#.#
#..##....#.
....#####..
.##.#......
....#..#...
.##.##....#
#..##.###.#
.......#.##
....#..#.##
#..##.###.#
.##.##....#`


var FindReflections = function(data)
{
    let totalReflectionPoints = 0
    for(let pattern of data)
    {
        pattern = pattern.split('\n')
        totalReflectionPoints += FindRowsOrColumns(pattern) * 100
        let newPattern = transposePattern(pattern.map(a => a.split('')))
        totalReflectionPoints += FindRowsOrColumns(newPattern)
    }
    return totalReflectionPoints
}

var transposePattern = function(pattern)
{
    return pattern[0].map((col, i) => pattern.map(row => row[i]).join(''));
}

var FindRowsOrColumns = function(pattern)
{
    for(let i = 1; i < pattern.length; i++)
    {
        let part1 = pattern.slice(0, i)
        let part2 = pattern.slice(i)
        let maxLen = Math.min(part1.length, part2.length)
        let section1 = part1.reverse().slice(0,maxLen).join('').split('')
        let dots1 = section1.filter(a => a == '.').length
        let hash1 = section1.filter(a => a == '#').length
        let section2 = part2.slice(0,maxLen).join('').split('')
        let dots2 = section2.filter(a => a == '.').length
        let hash2 = section2.filter(a => a == '#').length
        if(Math.abs(dots1 - dots2) == 1 && Math.abs(hash1 - hash2) == 1)
        {
            let characterFaults = 0
            for(let charPos = 0; charPos < section1.length; charPos++)
            {
                if(section1[charPos] != section2[charPos])
                {
                    characterFaults++
                    if(characterFaults > 1) break;
                }
            }
            if(characterFaults == 1) return i
        }
    }

    return 0
}

var formatInput = function(input)
{
    let data = input.split('\n\n')
    return FindReflections(data)
}

console.log('Dummy Output 1 : ' + formatInput(dummyInput))
// console.log('Dummy Output 2 : ' + formatInput(dummyInput2))
console.log('Actual Output : ' + formatInput(actualInput))