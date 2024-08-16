const input = document.getElementById("input");
const buttons = ["seven", "eight", "nine", "divide", "four", "five", "six", "multiple", "one", "two", "three", "plus", "clear", "zero", "equals", "minus"];

const getButtons = buttons.map(id => document.getElementById(id));
console.log(getButtons);

let firstPart = null;
let secondPart = null;
let operator = null;
let final = 0;

getButtons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;
        input.value += buttonText;

        if(buttonText === "C") {
            input.value = "";
        }
        
        if(["/", "x", "+", "-"].includes(buttonText)) {
            firstPart = input.value.slice(0, -1);
            input.value = "";
            operator = buttonText;
            console.log(firstPart);
            console.log(`${operator} has been selected`);
        }
        
        if(buttonText === "=") {
            secondPart = input.value.slice(0, -1);
            final = eval(`${firstPart} ${operator === 'x' ? '*' : operator === 'divide' ? '/' : operator} ${secondPart}`);
            input.value = final;
            console.log(secondPart);
            console.log(`equal sign selected. caluculating total.`);
            console.log(`the final is ${final}`)
        }
    })
})