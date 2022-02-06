/*
* Excercise 1
*
*/

var element = document.getElementById("color-block");
var text = document.getElementById("color-name"); 
var count = 0;
element.onclick = function changeColor() {
/*
* Then write a function that changes the text and the color inside the div
*
*/
    count ++;
    //Write a condition determine what color it should be changed to
    if(count % 3==1){ 
        //change the background color using JS
        element.style.background="#FFFF00";
        //Change the text of the color using the span id color-name
        text.textContent = "#FFFF00";
    }
    else{
        //change the background color using JS
        element.style.backgroundColor="#F08080";
        //Change the text of the color using the span id color-name
        text.textContent = "#F08080";
    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/
let c = document.getElementById("c-output").value;
let f = document.getElementById("f-input").value; 

document.getElementById("convertbtn").addEventListener("click", convertTemp);

function convertTemp(){
    let f = document.getElementById("f-input").value;
    let c = document.getElementById("c-output").value;
    //Calculate the temperature here
    //Send the calculated temperature to HTML
    c = Math.round((f - 32) * 5 / 9);
    document.getElementById("c-output").textContent = c;
}



