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

console.log("**************ARRAY***************8");
let numbers = [23, 45, 65, 89, 87, 57, 64, 12, 54, 19];
console.log(numbers);

//looping

// numbers.forEach((v)=>console.log(v*v))

console.log(numbers.push(31)); //return index

console.log(numbers.indexOf(65));

// remove an element by its index position from the array
let position = 2; // it defines from which index item to be removed
let n = 1; // it defines how much item you want to remove
let removedItem = numbers.splice(position, n);
console.log(removedItem);

console.log(numbers.toString());

console.log("Length of an Array is " + numbers.length);
let newSubarray = numbers.slice(1, 6);
console.log(newSubarray);

console.log(numbers.slice()); //if does not specify the start and end index in slice method it will return the whole array

// console.log(numbers.isArray()); //
let result =numbers.filter(number => number > 50);
console.log(result);

// let r2 = numbers.flat(5)
// console.log(r2);   //The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

let m1= numbers.map(number => number**3);
console.log(m1);

// let sum1=0;
let reducer = (sum1,value)=>sum1+value;

console.log(numbers.reduce(reducer,0));  // 3 is initial value;
let r2 =numbers.sort();

console.log(r2);


////////////////////////////////////////////////////////////////////////////////////////////
//************************************************************************************************* *//
/* OOP*/

// ******************Classs*********************

// Hoisting using class is not possible
// we have to declare the class before using it unlike the function

class vehicle{
    name;
    price;
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    getNAme(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getPrice(){
        return this.price;
    }
    setPrice(price){
        this.price=price;
    }
    
}

let v1 = new vehicle("cycle",4568);
console.log(v1);
console.log(v1.getNAme());
console.log(v1.getPrice());

class Car extends vehicle{
    carBrand;
    modelName;
    constructor(name,price,carBrand,modelName){
        super(name,price);
        this.carBrand = carBrand;
        this.modelName = modelName;
    }
}

let v2= new Car("Car",5868,"mahindra","XUV");
console.log(v2);
