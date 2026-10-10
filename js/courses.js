
document.addEventListener("DOMContentLoaded", function () {
    const enrollButton = document.querySelector(".btn-main");
    const signup = document.querySelector(".signup-wrap");

    if (enrollButton && signup) {
        enrollButton.addEventListener("click", function () {
            signup.hidden = false;

            signup.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    } else {
        console.error("Missing enroll button or signup section.");
    }
});
