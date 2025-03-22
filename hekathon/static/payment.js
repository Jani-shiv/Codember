function togglePaymentFields() {
    let paymentMethod = document.getElementById("payment-method").value;
    document.getElementById("card-fields").style.display = (paymentMethod === "card") ? "block" : "none";
    document.getElementById("upi-field").style.display = (paymentMethod === "upi") ? "block" : "none";
}
function homeURL(){
    location.assign('./index.html')
}
function aboutURL(){
    location.assign('./About.html')
}
function productURL(){
    location.assign('./Products.html')
}
function blogURL(){
    location.assign('./Blog.html')
}
function contactURL(){
    location.assign('./Contact.html')
}
function paymentURL() {
    location.assign('./payment.html')
}
function loginURL() {
    location.assign('./loginpage.html')
}
document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission until validation

    let isValid = true;

    // Get form values
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let paymentMethod = document.getElementById("payment-method").value;
    let cardNumber = document.getElementById("card-number");
    let expiry = document.getElementById("expiry");
    let cvv = document.getElementById("cvv");
    let upiId = document.getElementById("upi-id");

    // Clear previous error messages
    document.querySelectorAll(".error").forEach(el => el.remove());

    // Name validation (should not be empty)
    if (name.value.trim() === "") {
        showError(name, "Full name is required.");
        isValid = false;
    }

    // Email validation (basic pattern)
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value)) {
        showError(email, "Enter a valid email.");
        isValid = false;
    }

    // Payment method-specific validation
    if (paymentMethod === "card") {
        // Card number validation (16-digit numeric)
        let cardPattern = /^\d{16}$/;
        if (!cardPattern.test(cardNumber.value)) {
            showError(cardNumber, "Enter a valid 16-digit card number.");
            isValid = false;
        }

        // Expiry date validation (should not be in the past)
        let today = new Date();
        let selectedDate = new Date(expiry.value + "-01");
        if (selectedDate < today) {
            showError(expiry, "Card expiry date must be in the future.");
            isValid = false;
        }

        // CVV validation (3-digit numeric)
        let cvvPattern = /^\d{3}$/;
        if (!cvvPattern.test(cvv.value)) {
            showError(cvv, "Enter a valid 3-digit CVV.");
            isValid = false;
        }
    } else if (paymentMethod === "upi") {
        // UPI ID validation (basic pattern)
        let upiPattern = /^[\w.-]+@[\w]+$/;
        if (!upiPattern.test(upiId.value)) {
            showError(upiId, "Enter a valid UPI ID.");
            isValid = false;
        }
    }

    // If all validations pass, submit the form
    if (isValid) {
        alert("Payment successful!");
        document.getElementById("paymentForm").reset();
    }
});

// Function to show error messages
function showError(input, message) {
    let error = document.createElement("small");
    error.className = "error";
    error.style.color = "red";
    error.style.display = "block";
    error.innerText = message;
    input.parentNode.appendChild(error);
}

// Function to toggle payment fields
function togglePaymentFields() {
    let paymentMethod = document.getElementById("payment-method").value;
    document.getElementById("card-fields").style.display = (paymentMethod === "card") ? "block" : "none";
    document.getElementById("upi-field").style.display = (paymentMethod === "upi") ? "block" : "none";
}
