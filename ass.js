Q1.Find Grades

let  m=parseInt(prompt("Enter  Your choice "));

switch(true)
{
case m<=10:
    console.log("E");
    break;
case 11>=m || m<=20:
    console.log("D");
    break;
    case 21>=m || m<=30:
        console.log("C");
        break;
    case 31>=m || m<=40:

        console.log("B");
        break;
        
    case 41>=m || m<=50:
        console.log("A");
        break;
default:
    console.log("wrong choice");

  }

Get value
let k= prompt(" Enter character p or P,Z or z,E or e,D or d");
 k=k.toLowerCase();

switch(k)
{
case k='p' :
    
    console.log("PrepBytes");
    break;

case k='Z':
    console.log("Zenith");
    break;
case k='E' :
    console.log("Expert Coder");
    break;

case k='D' :
    console.log("Data Structure");
    break;
default:
    console.log("wrong choice");

}
//Q3. Find the maximum out of three numbers

let a=3,b=4,c=7;
if(a>b && a>c )

{
console.log(a)
}
else

if(b>c&&b>a){
    console.log(b);

}
else  
    {
console.log(c);
}
*/
//Q4. Second Smallest
/*let arr=[3,5,1];

let second =3;
let  smallest=3;
for(let num of arr)
{

if(num<smallest)
{
    second=smallest;
    smallest=num;
  
}
else if(num<second && num!==smallest)

{
second=num;
console.log("secod",second);
}
}
if(second===3)

{
    console.log("ull");
}

else

{
   console.log("second smallest number",second); 
}
 
*/
//Q5. Check whether the triangle is Acute or Obtuse
/*
let a=100,b=39,c=67;
if(a<90 &&b<90 && c<90)
{
    console.log("acute triagle");
}
else if(a<90||b<90||c<90)
{
  console.log("obtuse triagle");  
}
else{
    console.log("Right triagle")
}
    */