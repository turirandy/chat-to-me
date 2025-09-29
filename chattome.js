document.addEventListener("DOMContentLoaded"), function () {
// Join form
document.addEventListener("DOMContentLoaded"), function () {
    const signUp = document.getElementById("signup");
    if (signUp) {
        signUp.addEventListener("submit", function (event) {
            event.preventDefault(); // prevent default form submission
            // Simulate save
            setTimeout(() => {
                // Scroll or redirect to top (home)
                window.location.hash = "", // scrolls to top of page
                // Alternatively: window.location.href ="index.html";
                alert("Welcome to the Fam ");
                 signUp.reset();
                window.scrollTo({ top: 0, behavior: "smooth" });
            }, 500);
        });
    }  
}}
// handle ""
