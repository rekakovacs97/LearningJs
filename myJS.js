
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

console.log(groceries);
console.log(groceries.slice(2,6));















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