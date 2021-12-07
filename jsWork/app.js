console.log("hi")

var a= 1000;




// setTimeout(alertFunc, 3000);

// function alertFunc() {
//   alert("Hello!");
// }

var sum=0
var array =[1,3,4,5,67,77,8]

array.forEach(function(item){
 sum += item;   

})

console.log(sum);


console.log("__________________________________________________---")
let SUM=0;
let index=0;
do{
    SUM +=array[index];
    index++;
}while(index<array.length);

console.log("New SUM" +"="+SUM);


for (i in array){
    console.log(array[i]);
}
console.log("*************************")
for(var i =0;i<array.length;i++){
    if(i==2){
        continue;
    }
    else{
        console.log(array[i]);
    }
}


var x=1775894

switch(x%2){
    case 0:
        console.log("Even");
        break;
    default:
        console.log("odd");
}

console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");

console.log("REGEX___________________");

// let re=/.a/;
// let rexp =new RegExp("/a+bc/");
const chessStory = 'Heplayed the King in a8 and she moved her Queen in c2.';
console.log(chessStory.match(/\d/));  //any digit 
console.log(chessStory.match(/\D/)); //which is not digit
// console.log(chessStory.match(/[A-Za-z0-9_]/))
console.log(chessStory.match(/[^a-zA-Z0-9_]/));
console.log(chessStory.match(/\W/));

console.log("#############################");
//exec() method executes a search for a match in a specified string. Returns a result array, or null.

console.log("ARRAY")
