/*
Peter can see a clock in the mirror from the place he sits in the office. When he saw the clock shows 12:22

1
2
3
4
5
6
7
8
9
10
11
12
He knows that the time is 11:38

1
2
3
4
5
6
7
8
9
10
11
12
in the same manner:

05:25 --> 06:35

01:50 --> 10:10

11:58 --> 12:02

12:01 --> 11:59

Please complete the function WhatIsTheTime(timeInMirror), where timeInMirror is the mirrored time (what Peter sees) as string.

Return the real time as a string.

Consider hours to be between 1 <= hour < 13.

So there is no 00:20, instead it is 12:20.

There is no 13:20, instead it is 01:20.
*/

function WhatIsTheTime(timeInMirror){
    let hour = +timeInMirror.split(":")[0]
    let min = +timeInMirror.split(":")[1]
    
    hour = 12 - hour === 0 ? 12 : 12 - hour
    if(min > 0) hour = hour-1  === 0 ? 12 : hour-1 
    
    min = 60 - min === 60 ? "00" : (60 - min).toString().padStart(2, '0')
    
    return hour.toString().padStart(2, '0') + ":" + min
}