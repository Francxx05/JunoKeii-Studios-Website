
const intro = document.getElementById("intro");

if (intro) {
    const cameFromAnotherPage = sessionStorage.getItem("skipIntro");

    if (cameFromAnotherPage === "true") {
        intro.style.display = "none";
        sessionStorage.removeItem("skipIntro");
    } else {
        sessionStorage.setItem("introPlayed", "true");
    }
}

// When leaving the landing page through a link,
// skip the intro when returning.
document.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener("click", function () {
        const url = new URL(this.href, window.location.href);

        if (
            url.origin === window.location.origin &&
            !url.pathname.endsWith("index.html") &&
            url.pathname !== "/"
        ) {
            sessionStorage.setItem("skipIntro", "true");
        }
    });
});