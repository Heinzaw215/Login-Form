// Toggle Password Visibility
function togglePassword() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
        x.classList.toggle("fa-solid fa-eye")
    } else {
        x.type = "password";
        x.classList.toggle("fa-eye-slash-solid");
    }
}
