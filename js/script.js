const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector(".lightbox__image");
const lightboxTriggers = document.querySelectorAll("[data-lightbox]");
const lightboxCloseButtons = document.querySelectorAll("[data-lightbox-close]");
const letter = document.querySelector("#letter");
const openLetterButton = document.querySelector("#openLetter");

function openLetter() {
    if (!letter) return;

    letter.classList.add("is-open");
    letter.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
}

function closeLetter() {
    if (!letter) return;

    letter.classList.remove("is-open");
    letter.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
}

if (openLetterButton){
    openLetterButton.addEventListener(
        "click",
        openLetter
    );
}

letterCloseButtons.forEach((button) => {
    button.addEventListener(
        "click",
        closeLetter
    );
});

function openLightbox(src, alt){
    if (!lightbox || !lightboxImage) return;

    lightboxImage.src = src;
    lightboxImage.alt = alt || "";

    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    if (!lightbox || !lightboxImage) return;

    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    lightboxImage.src = "";
    lightboxImage.alt ="";
}

lightboxTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
        openLightbox(
            trigger.dataset.lightbox,
            trigger.dataset.lightboxAlt
        );
    });
});

lightboxCloseButtons.forEach((button) => {
    button.addEventListener("click",
        closeLightbox
    );
});

document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
        closeLightbox();
        closeLetter();
});