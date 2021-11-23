
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
console.log(fruit.indexOf('nan'));
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