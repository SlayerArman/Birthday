const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector(".lightbox__image");
const lightboxTriggers = document.querySelectorAll("[data-lightbox]");
const lightboxCloseButtons = document.querySelectorAll("[data-lightbox-close]");

const letter = document.querySelector("#letter");
const openLetterButton = document.querySelector("#openLetter");
const letterCloseButtons = document.querySelectorAll("[data-letter-close]");

const navigationMenu = document.querySelector(".navigation__menu");
const navigationLinks = document.querySelector(".navigation__links");
const navigationLinksItems = document.querySelectorAll(".navigation__links a");

const celebrationCards = document.querySelectorAll("[data-celebration]");
const celebrationOverlay = document.querySelector("#celebrationOverlay");
const celebrationOverlayTitle = document.querySelector("#celebrationOverlayTitle");
const celebrationOverlayText = document.querySelector("#celebrationOverlayText");
const celebrationOverlayImage = document.querySelector("#celebrationOverlayImage");
const celebrationCloseButtons = document.querySelectorAll("[data-celebration-close]");

const celebrationContent = {
    moments: {
        title: "More moments",
        text: "Here's to all the little moments that become beautiful memories — the unexpected laughs, shared smiles, and days worth remembering.",
        image: "assets/images/ui/heart.png"
    },

    happiness: {
        title: "Endless happiness",
        text: "May this year bring you countless reasons to smile, people who make your days brighter, and happiness that stays with you through every season.",
        image: "assets/images/ui/love.png"
    }
};

function openCelebrationOverlay(type) {
    const content = celebrationContent[type];

    if (
        !content ||
        !celebrationOverlay ||
        !celebrationOverlayTitle ||
        !celebrationOverlayText ||
        !celebrationOverlayImage
    ) {
        return;
    }

    celebrationOverlayTitle.textContent = content.title;
    celebrationOverlayText.textContent = content.text;

    celebrationOverlayImage.src = content.image;
    celebrationOverlayImage.alt = content.title;

    celebrationOverlay.classList.add("is-open");
    celebrationOverlay.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
}

function closeCelebrationOverlay() {
    if (!celebrationOverlay) return;

    celebrationOverlay.classList.remove("is-open");
    celebrationOverlay.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
}

celebrationCards.forEach((card) => {
    const button = card.querySelector(".birthday-card__button");

    if (!button) return;

    button.addEventListener("click", () => {
        openCelebrationOverlay(card.dataset.celebration);
    });
});

celebrationCloseButtons.forEach((button) => {
    button.addEventListener("click", closeCelebrationOverlay);
});

function openLetter() {
    if (!letter) return;

    letter.classList.add("is-open");

    letter.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";
}


function closeLetter() {
    if (!letter) return;

    letter.classList.remove("is-open");

    letter.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";
}


if (openLetterButton) {
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