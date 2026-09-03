function openLightbox(src, alt) {
    if (!lightbox || !lightboxImage) return;

    lightboxImage.src = src;
    lightboxImage.alt = alt || "";

    lightbox.classList.add("is-open");

    lightbox.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";
}


function closeLightbox() {
    if (!lightbox || !lightboxImage) return;

    lightbox.classList.remove("is-open");

    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";

    lightboxImage.src = "";
    lightboxImage.alt = "";
}


lightboxTriggers.forEach((trigger) => {
    trigger.addEventListener(
        "click",
        () => {
            openLightbox(
                trigger.dataset.lightbox,
                trigger.dataset.lightboxAlt
            );
        }
    );
});


lightboxCloseButtons.forEach((button) => {
    button.addEventListener(
        "click",
        closeLightbox
    );
});

document.addEventListener(
    "keydown",
    (event) => {
        if (event.key !== "Escape") return;

        closeLightbox();
        closeLetter();
        closeNavigation();
        closeCelebrationOverlay();
    }
);