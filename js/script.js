const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector(".lightbox__image");
const lightboxTriggers = document.querySelectorAll("[data-lightbox]");
const lightboxCloseButtons =
    document.querySelectorAll("[data-lightbox-close]");

function openLightbox(src, alt){
    lightboxImage.src = src;
    lightboxImage.alt = alt || "";

    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    lightboxImage.src = "";
}

lightboxTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
        openLightbox(
            trigger.dataser.lightbox,
            trigger.dataset.lightboxAlt
        );
    });
});

lightboxCloseButtons.forEach((button) => {
    button.addEventListener("click", closeLightbox);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape"){
        closeLightbox();
    }
});