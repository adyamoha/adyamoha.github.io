// songs-script.js
document.getElementById("password-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const inputPassword = this.value;
        const correctPassword = "canthurry";

        if (inputPassword === correctPassword) {
            document.getElementById("password-input").classList.remove("shake");
            document.getElementById("content").style.opacity = 1;
        } else {
            document.getElementById("password-input").classList.add("shake");
            setTimeout(() => {
                document.getElementById("password-input").classList.remove("shake");
            }, 500); // Adjust the delay as needed
        }
    }
});
