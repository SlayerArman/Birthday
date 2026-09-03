function openNavigation() {
    if (!navigationMenu || !navigationLinks) return;

    navigationMenu.classList.add("is-open");
    navigationLinks.classList.add("is-open");

    navigationMenu.setAttribute(
        "aria-expanded",
        "true"
    );

    navigationMenu.setAttribute(
        "aria-label",
        "Close menu"
    );
}


function closeNavigation() {
    if (!navigationMenu || !navigationLinks) return;

    navigationMenu.classList.remove("is-open");
    navigationLinks.classList.remove("is-open");

    navigationMenu.setAttribute(
        "aria-expanded",
        "false"
    );

    navigationMenu.setAttribute(
        "aria-label",
        "Open menu"
    );
}


function toggleNavigation() {
    if (!navigationMenu) return;

    const isOpen =
        navigationMenu.classList.contains("is-open");

    if (isOpen) {
        closeNavigation();
    } else {
        openNavigation();
    }
}


if (navigationMenu) {
    navigationMenu.addEventListener(
        "click",
        toggleNavigation
    );
}


navigationLinksItems.forEach((link) => {
    link.addEventListener(
        "click",
        closeNavigation
    );
});