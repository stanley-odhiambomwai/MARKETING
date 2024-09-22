// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Form Validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Mock submission action
    alert("Thank you for your message, " + name + "! We will get back to you soon.");
    this.reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}


// Select the buttons
const buyBasic = document.getElementById('buy-basic');
const buyPro = document.getElementById('buy-pro');
const buyEnterprise = document.getElementById('buy-enterprise');

// Handle click events
buyBasic.addEventListener('click', function(event) {
    event.preventDefault();
    handlePurchase('Basic Plan', 19.99);
});

buyPro.addEventListener('click', function(event) {
    event.preventDefault();
    handlePurchase('Pro Plan', 49.99);
});

buyEnterprise.addEventListener('click', function(event) {
    event.preventDefault();
    handlePurchase('Enterprise Plan', 99.99);
});

// Purchase function
function handlePurchase(plan, price) {
    // Simulate a purchase process
    alert(`You have selected the ${plan} for $${price}/month. Redirecting to payment...`);
    
    // Here, you'd typically redirect to a payment gateway, for example:
    // window.location.href = "https://payment-gateway.com/checkout?plan=" + plan + "&price=" + price;
}