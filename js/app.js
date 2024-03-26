var num1=7;
var num2=6;
console.log(num1+num2);

alert("welcome")

var promptName=prompt("please enter your name");
var promptGender=prompt("please enter your gender. The answer should be either (male or female)");
var promptAge=prompt("please enter your age");
if(promptAge<0 || promptAge==0){
    alert("the age should not be less than or equal to zero");
  promptAge=prompt("please enter your age again");

}
 var confermMessage =confirm ("You want to skip the welcoming message?");
if(!confermMessage){
    if(promptGender== "male"){
        alert("welcome Mr "+promptName +" your age "+promptAge);

    }
    else
    { 
        alert("welcome Ms "+promptName +" your age "+promptAge);
}
 
}

 
  

