const myText = document.getElementById("myText");
const resultElement = document.getElementById("resultElement");
const mySubmit = document.getElementById("mySubmit");
let age;
mySubmit.onclick = function(){
    age = myText.value;
    age = Number(age);

 
if(age >= 100){
resultElement.textContent = `You are too old to enter this site`;
}
else if (age >= 18){
resultElement.textContent = `You are old enough to enter this site`;
}
else if(age == 0){
    resultElement.textContent = `You were just born`;
    }
else if(age < 18){
resultElement.textContent = `You must be 18+ to enter this site`;
}
else if( age <= 0){
resultElement.textContent = `Your age cannot be 0`;
}

}