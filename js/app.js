'use strect';
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
// <------------------ lab-06 ------------------>

function askQuestion(number) {
    var answer;
    if(number==1){
         answer = prompt("do you love pitza? " + " (Yes/No)");
    }
    else if(number==2){
         answer = prompt("do you love mansaf? " + " (Yes/No)");
    }
    else{
         answer = prompt("do you love eag? " + " (Yes/No)");
    }


    if (answer !== "yes" && answer !== "no") {
        answer = "Invalid input";
    }
    return answer;
}

function puttingInArray() {
    let gatharingArray = [];
    for (let i = 0; i < 3; i++) {
        let answer = askQuestion(i+1);
        gatharingArray.push(answer );
    }
    return gatharingArray;
}

function printResponses(array) {
    console.log(array);
}

let responses = puttingInArray();
printResponses(responses);
  

