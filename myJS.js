
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