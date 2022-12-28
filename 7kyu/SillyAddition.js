/*
For this kata you will have to forget how to add two numbers.

It can be best explained using the following meme:

Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.

Examples
16+1821426+39515122+811103\large \begin{array}{lll} & 1 & 6 \\ + & 1 & 8 \\ \hline & 2 & 1 4 \\ \end{array} \qquad \large \begin{array}{lll} & 2 & 6 \\ + & 3 & 9 \\ \hline & 5 & 15 \\ \end{array} \qquad \large \begin{array}{lll} & 1 & 2 & 2 \\ + & & 8 & 1 \\ \hline & 1 & 10 & 3 \\ \end{array} 
+
​
  
1
1
2
​
  
6
8
14
​
 
​
  
+
​
  
2
3
5
​
  
6
9
15
​
 
​
  
+
​
  
1
1
​
  
2
8
10
​
  
2
1
3
​
 
​
 

*/

function add(num1, num2) {
    let n1 = num1.toString(), n2 = num2.toString() 
    
    while(n1.length != n2.length){
      if(n1.length > n2.length) n2 = "0" + n2
      else n1 = "0" + n1
    }
    
    return +n1.split("").map((n,i)=> +n + +n2[i]).join("")
}