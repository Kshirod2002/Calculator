let string = "";
//select all elements with the class
let buttons = document.querySelectorAll('.button'); 
const sanitizeInput = (input) => {
    return input.replace(/\s+/g, ''); // Remove all whitespace
};
//Loop through each button amd an event listener for the click event
Array.from(buttons).forEach((button) => { 
    //When a button is clicked
    button.addEventListener('click', (e) => { 
        //check if the clicked button is the "="
        if (e.target.innerHTML === '=') { 
            //update the input value
            try {
                string = sanitizeInput(string); // Sanitize the string
                string = eval(string); // Evaluate the expression
                document.querySelector('input').value = string; 
            } catch {
                document.querySelector('input').value = 'Error'; // Handle errors
                string = ""; // Reset the string
            }
        //clicked the button to all clear
        } else if (e.target.innerHTML === 'AC') { 
            //Reset the string to empty
            string = ""; 
            //Update the input value
            document.querySelector('input').value = string; 
        } else { 
            //append the buttons inner Html to the string
            string += e.target.innerHTML; 
            //Update the input value
            document.querySelector('input').value = string; 
        } 
    }); 
});
