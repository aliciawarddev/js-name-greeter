// Get references to HTML elements
const nameInput = document.getElementById('nameInput');         // The input field where user types their name
const greetButton = document.getElementById('greetButton');     // The button that triggers the greeting
const greetingDiv = document.getElementById('greeting');     // The div where the greeting will be displayed

// Function to create and display the greeting
function generateGreeting() {
    const name = nameInput.value.trim();    // Get the input value and remove extra spaces

    // Check if the name field is empty
    if (name === '') {
        nameInput.classList.add('error');   // Add error styling to the input
        
        // Store original placeholder and change it to error message
        const originalPlaceholder = nameInput.placeholder;
        nameInput.placeholder = "Please enter your name first...";
        
        // Remove error styling and restore placeholder after 2 seconds (not 500ms!)
        setTimeout(() => {
            nameInput.classList.remove('error');
            nameInput.placeholder = originalPlaceholder;
        }, 2000);     // 2000ms = 2 seconds - gives time to see the red!
        
        nameInput.focus();      // Put cursor back in the input field
        return;     // Exit the function early if no name was entered     
    }

    // Create the greeting message with proper capitalization
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1); // Capitalize first letter
    const greetingMessage = `Hello, ${capitalizedName}!`;  // Create the greeting text

    // Display the greeting with animation
    greetingDiv.textContent = greetingMessage;  // Set the greeting text
    greetingDiv.classList.add('show');     // Add class to trigger fade-in animation
}

// Function to handle Enter key press in the input field
function handleEnterKey(event) {
    if (event.key === 'Enter') {    // Check if the pressed key is Enter
        generateGreeting();         // Call the greeting function
    }
}

// Function to reset the greeting when user starts typing again
function resetGreeting() {
    if (greetingDiv.classList.contains('show')) { // Check if greeting is currently visible
        greetingDiv.classList.remove('show'); // Hide the greeting with animation
    }
}

// Add event listeners to make the app interactive
greetButton.addEventListener('click', generateGreeting); // Listen for button clicks
nameInput.addEventListener('keypress', handleEnterKey); // Listen for Enter key in input
nameInput.addEventListener('input', resetGreeting); // Listen for any typing in the input

// Focus on the input field when the page loads
window.addEventListener('load', () => {
    nameInput.focus(); // Automatically place cursor in the input field
});

// DELETE THESE LINES - they're running immediately and not part of the error handling!
// nameInput.placeholder = "Please enter your name first...";
// setTimeout(() => {
//     nameInput.placeholder = "Type your name and press Enter...";
// }, 2000);
// 
// window.addEventListener('load', () => {
//     nameInput.focus(); 
// });