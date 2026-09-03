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

const keyboardPointer = document.querySelector("#keyboardPointer");
const keyboardTargets = [
        "navigation__logo",
        "navigation__menu",
        "navigation__links a",
        "hero__button",
        ".birthday-card__image",
        ".birthday-card__button",
        ".memory-card",
        ".message__button",
        ".lightbox__close",
        ".letter__close",
        ".celebration-overlay__close"
];

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

(function () {

    const pointer = document.getElementById("keyboardPointer");

    if (!pointer) return;

    /* Mobile = completely disabled */
    if (window.innerWidth <= 600) {
        pointer.style.display = "none";
        return;
    }

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    const speed = 20;


    function renderPointer() {

        pointer.style.left = x + "px";
        pointer.style.top = y + "px";

    }


    function movePointer(key) {

        if (key === "ArrowLeft") {
            x -= speed;
        }

        if (key === "ArrowRight") {
            x += speed;
        }

        if (key === "ArrowUp") {
            y -= speed;
        }

        if (key === "ArrowDown") {
            y += speed;
        }

        const edge = 40;

        if (
            key === "ArrowDown" &&
            y >= window.innerHeight - edge
        ) {
            window.scrollBy(0, 50);
        }

        if (
            key === "ArrowUp" &&
            y <= edge &&
            window.scrollY > 0
        ) {
            window.scrollBy(0, -50);
        }

        const radius = 10;

        x = Math.max(
            radius,
            Math.min(
                window.innerWidth - radius,
                x
            )
        );

        y = Math.max(
            radius,
            Math.min(
                window.innerHeight - radius,
                y
            )
        );

        renderPointer();
        checkInteractionTarget();
    }


    function checkInteractionTarget() {
    document
        .querySelectorAll(".keyboard-pointer-hover")
        .forEach((element) => {
            element.classList.remove(
                "keyboard-pointer-hover"
            );
        });

    pointer.style.display = "none";

    const element =
        document.elementFromPoint(x, y);

    pointer.style.display = "block";

    if (!element) return;

    const target =
        element.closest(
            "button, a, [role='button'], .memory-card, .birthday-card__image"
        );

    if (target) {
        target.classList.add(
            "keyboard-pointer-hover"
        );
    }
}
    function interact() {
        pointer.style.display = "none";

        const element =
            document.elementFromPoint(x, y);

        pointer.style.display = "block";

        if (!element) return;

        const target =
            element.closest(
                "button, a, [role='button'], .memory-card, .birthday-card__image"
            );

        if (!target) return;

        pointer.classList.add("is-pressed");

        setTimeout(function () {
            pointer.classList.remove(
                "is-pressed"
            );
        }, 120);

        target.click();

    }

    window.addEventListener(
        "keydown",
        function (event) {

            if (window.innerWidth <= 600) return;


            if (
                event.key === "ArrowUp" ||
                event.key === "ArrowDown" ||
                event.key === "ArrowLeft" ||
                event.key === "ArrowRight"
            ) {

                event.preventDefault();
                event.stopPropagation();

                movePointer(event.key);

            }


            if (event.key === "Enter") {

                event.preventDefault();
                event.stopPropagation();

                interact();
            }
        },
        true
    );

    window.addEventListener(
        "load",
        function () {

            if (window.innerWidth <= 600) {
                pointer.style.display = "none";
                return;
            }

            pointer.style.display = "block";

            x = window.innerWidth / 2;
            y = window.innerHeight / 2;

            renderPointer();
        }
    );

    window.addEventListener(
        "resize",
        function () {

            if (window.innerWidth <= 600) {

                pointer.style.display = "none";

                return;
            }

            pointer.style.display = "block";

            x = Math.min(
                x,
                window.innerWidth - 10
            );

            y = Math.min(
                y,
                window.innerHeight - 10
            );

            renderPointer();
        }
    );

})();