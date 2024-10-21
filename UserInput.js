// Window Prompt Method

let name;

name = window.prompt(`What is your name?`);
console.log(`Hello ${name}`);


// HTML Textbox Method

document.getElementById("myButton").onclick = function() {
    name = document.getElementById("myTextbox").value;
    document.getElementById("myHeading").textContent = `Welcome ${name}`;

}

// By default, the input type in JS is a string. 
// So to perform calculations, the input must be converted to number type and then do required operations