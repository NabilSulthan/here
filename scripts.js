// Function to display the hidden messages and play music
function showMessage() {
    var message = document.getElementById("specialMessage");
    var happyMessage = document.getElementById("happyMessage");
    var music = document.getElementById("backgroundMusic");

    // Play music when the button is clicked
    music.play();

    // Remove the hidden class to display the first message
    message.classList.remove("hidden");

    // After 2 seconds, show the "happy aayo" message
    setTimeout(function() {
        happyMessage.classList.remove("hidden");
    }, 2000); // 2000 milliseconds = 2 seconds
}

