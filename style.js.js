// Wait for the document to be ready before executing any JS code
document.addEventListener("DOMContentLoaded", function () {
    
    // Get the form element
    const contactForm = document.querySelector(".contact-form");
    
    // Add an event listener to handle form submission
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission behavior (refreshing the page)
        
        // Get the form inputs
        const name = contactForm.querySelector("input[type='text']").value;
        const email = contactForm.querySelector("input[type='email']").value;
        const message = contactForm.querySelector("textarea").value;
        
        // Basic form validation
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields before submitting.");
            return;
        }
        
        // Simulate successful form submission
        alert("Thank you for your message, " + name + "! I'll get back to you soon.");
        
        // Clear the form fields after submission
        contactForm.reset();
    });
});

        