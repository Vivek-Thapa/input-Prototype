// 1 selecting the input tag
let newValue = document.querySelector('.input');
// all your input values will be saved here
let listmail=[];

// 2 after selecting the input tag, we will add the event listener to the input, which will call the event 'keyup'. and this event 'keyup' will save the input in the 'listmail' everytime the user press the enter key. and with that we also add a function naming 'emailList' 

newValue.addEventListener("keyup" , emailList);

//  3 press enter key to save the emails. to check whether the user has pressed the enetr button or not we will add a function for it and give that function a class of 'emaiList(event)'. our function will work as :

function  emailList(event){
    if (event.keyCode==13){
       let general=document.querySelector(".general");
      var text=document.createElement("p");  //adding the value inside the input
      text.innerText=newValue.value; //adding the value to the innertext
      general.appendChild(text); //appending the text inside the div "general"
      listmail.push(newValue.value); //print and save the input
    
    }
    }
    




