
document.getElementById("info").addEventListener("click", function() {
    document.getElementById("info").innerHTML = "Hello Worldsdddsfsdd";
    document.getElementById("bla").innerHTML = "Blalba";
    document.getElementById("bla").style.color = "red";

  });


document.getElementById("test").addEventListener("click", function(){
  document.getElementById("third").innerHTML = "Hello Worldsdddsfsdd";
});
  
var a = "alma";
var b = 'alma';

if( a == b){
	console.log("igaz");
 }else{
	console.log("nem egyenlo");
 }

  
 var a = "14";
 var b = 14;
 
 if( a === b){
   console.log("igaz");
  }else{
   console.log("nem egyenlo");
  }

// Data types
let yourAge = 18; //number
let yourName = 'Joe' //string
let name = {fist: 'Jane' , last: 'Doe'}; //object
let truth = false;  //boolean
let groceries = ['apple' , 'banana' , 'tomato']; //array 
let car //undefined
let nothing = null //null

console.log(groceries);
console.log(groceries.slice(2,6));

//Strings in JS (common methods)

let fruit = 'banana, apple';
let moreFruit = 'banana\nadssdfdspple'; //new line \n

console.log(fruit.length);
console.log(moreFruit);
console.log(fruit.indexOf('b'));          // a b - a 0, pozition van, ezt megkapja es eremenykent kiirja a 0-at, a nan-nal 2ot ir ki
console.log(fruit.slice(2 , 6));               //kiirja a 2tol a 6. betuig
console.log(fruit.replace('ana' , '1234'));   //replace ana to 1234
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));  //same    kiirja a masodik betut
console.log(fruit[2]);               //same
console.log(fruit.split(''));        // split by chracter  - vesszokkel kiirja, kulon a betuket
console.log(fruit.split(',')); 

//Array
let fruits = ['banana' , 'apple' , 'orange' , 'pineapples'] //a way to create an array

fruits = new Array('banana' , 'apple' , 'orange' , 'pineapples')  //other ay to creata an array

//alert(fruits[1]);     //acces valuea at index 1 
fruits[0] = 'pear'; //change the value
console.log(fruits);

for(let i = 0; i < fruits.length; i++) { //i=0 a 0.a pear 0 kisebb mint 4 (4elem=length, 0+1 )
  console.log(fruits[i]);
}

function onFruitsClick(fruit) {
 for (let i = 0; i < fruits.length; i++ ) {
   if(fruit === fruits[i]) {
     console.log('found the following fruit: ' + fruit);
   }
 } 
}

//array common methods
console.log('to string \n' , fruits.toString());
console.log(fruits.join(' hi- ')); //join element
console.log(fruits, fruits.pop() , fruits);//pop off the last element  REMOVE LAST ITEM
console.log(fruits.push('blackberry') , fruits); // add a new element  APPENDS
//console.log(fruits); // a folotte levo ugyanez csak leroviditve

console.log(fruits[3]);

fruits[4] = 'new fruit';   //adding a new item to the array / list
console.log(fruits);

fruits[fruits.length] = 'tomato';  //adding a new item 
console.log(fruits);

console.log(fruits.shift(), fruits ); //remove first element in an array
fruits.unshift('kiwi'); //add first element to the array
console.log(fruits);

let vegetables = ['tomato' , 'potato' , 'broccoli'];  //combine two arrays + 
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1,4)) ; //kiirja a 1,2,3 itemet
console.log(allGroceries.reverse());    //reverse an array - megfordirja as sorrendet
console.log(allGroceries.sort())  //sort alphabet - abc sorrenbe rakja

vegetables.splice(1, 0 , 'karfiol'); //beteszi az elsoo poziciora, 1   0-uj elemet adok hozza 
console.log(vegetables);

vegetables.splice(2, 3, 'karfiol'); //a 2.pozociotol egy darabot helyetesit karfiollal 
console.log(vegetables);

vegetables.splice(0, 1); //a 0. poziciorol kitorol egy(db) elemet 
console.log(vegetables);

let someNumber = [ 5, 6, 3, 555, 18, 25, 94];
console.log(someNumber[4]);
console.log(someNumber.sort(function(a, b) {return a-b})); //novekvo sorted in ascending order
console.log(someNumber.sort(function(a, b) {return b-a}));  //csokkeno   sorted in descending order

let emptyArray = new Array; 
for (let num = 5; num < 10; num++) {  //kiirja a szamokat 5tol 9ig
    emptyArray.push(num);
}
console.log(emptyArray);

//Objects in Javascript
//dictionaries is Python 

let student = {          // student = {first: 'reka'} , last:'kovacs'};
  first: 'kovacs' , 
  last: 'reka' ,
  age:25,
  height:170,
  studentInfo: function () {
    return this.first + '\n' + this.last; 
  }
};

//console.log(student.first);
//student.first = 'notReka';   //change value
//console.log(student.first);
//student.age++;
//console.log(student.age);

console.log(student.studentInfo());
















/*function myFunction(){
  document.getElementById("first").classList.add("first--test'");
}



document.getElementById("info").addEventListener("click", function() {
   document.getElementsByClassName("first").addClass("first--test");
  });

}

document.getElementById("MyElement").classList.add('MyClass');



function myFunction() {
    document.getElementById("info").addEventListener("click", function() {
        document.getElementById("first").addId("first--test");
      });
  }

  $(".something").click(function(){
    $(this).addClass("style");
});


$( document ).ready(function() {
     $( ".first" ).addClass( "first--test" );
});
*/