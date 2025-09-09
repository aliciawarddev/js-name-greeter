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
        setTimeout(() => nameInput.classList.remove('error'), 500);     // Remove error class after animation
        nameInput.focus();      // Put cursor back in the input field
        return;     // Exit the function early if no name was entered     
     }

     // Create the greeting message with proper capitalization
     const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1); // Capitalize first letter
     const greetingMessage = `Hello, ${capitalizedName}!`;  // Create the greeting text

     // Display the greeting with animation
     greetingDiv.textContent = greetingMessage  // Set the greeting text
     greetingDiv.classList.add('show');     // Add class to trigger fade-in animation
}

// Function to handle Enter key press in the input field
function handleEnterKey(event) {
    if (event.key === 'Enter') {    // Check if the pressed key is Enter
        generateGreeting();         // Call the greeting function
    }
}

// Reset greeting
function resetGreeting() {
    greetingDiv.textContent = '';
    greetingDiv.classList.remove('show');
}

// Add event listeners to make the app interactive
greetButton.addEventListener('click', generateGreeting);    // Listen for button clicks
nameInput.addEventListener('keypress', handleEnterKey);     // Listen for Enter key in input
nameInput.addEventListener('input', resetGreeting);         // Listen for any typing in the input

// Focus on the input field when the page loads 
window.addEventListener('load', () => {
    nameInput.focus();  // Automatically place cursor in the input field
});