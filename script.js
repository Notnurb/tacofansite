// Array of taco facts
const tacoFacts = [
    "Tacos originated in Mexico before the Spanish conquest.",
    "The word 'taco' means 'plug' or 'wad' in Spanish, referring to the way food is packed into a tortilla.",
    "Fish tacos were popularized in Baja California, Mexico.",
    "Tacos can be made with over 50 different fillings!",
    "The largest taco ever made was over 246 feet long."
];

// Function to display a random taco fact
function showTacoFact() {
    const factElement = document.getElementById('taco-fact');
    const randomIndex = Math.floor(Math.random() * tacoFacts.length);
    factElement.textContent = tacoFacts[randomIndex];
}

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('form-message');

    // Basic form validation
    if (name && email && message) {
        formMessage.textContent = `Thanks, ${name}! We'll taco 'bout it soon!`;
        formMessage.style.color = '#d84315';
        this.reset(); // Reset form
    } else {
        formMessage.textContent = 'Please fill out all fields!';
        formMessage.style.color = 'red';
    }
});
