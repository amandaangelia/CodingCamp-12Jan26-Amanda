// Call the welcomeMessage function when the script loads
welcomeMessage();

function welcomeMessage() {
    // Prompt the user for their name
    let userResponse = prompt("What is your name?");

    // If userResponse is null or empty, set a default name
    if (userResponse == null || userResponse.trim() == "") {
        userResponse = "Guest";
    }

    // Display the welcome message in the element with id "welcome-speech"
    document.getElementById("welcome-speech").innerText = `Welcome, ${userResponse}! to Amanda Website.`;
}


function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const result = document.getElementById("form-result");

    if (name === "" || email === "" || message === "") {
        alert("All fields must be filled!");
        return false;
    }

    result.classList.remove("hidden");
    result.innerHTML = `
        <h3 class="font-bold mb-2">Message Received</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;

    return false; // prevent reload
}