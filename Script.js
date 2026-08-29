document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.getElementById("openBtn");
    const sorpresa = document.getElementById("sorpresa");

    if (openBtn && sorpresa) {
        openBtn.addEventListener("click", function () {
            sorpresa.classList.remove("hidden");

            sorpresa.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            openBtn.style.display = "none";
        });
    }
});
