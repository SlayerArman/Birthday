# Birthday Website 🎂

> A Personalized, Iteractive Birthday Website to Wish a Happy Birthday to Your Close Ones.

## Screenshots 📸
<img width="944" height="413" alt="Screenshot 2026-08-24 173700" src="https://github.com/user-attachments/assets/ed688d1f-34e6-4f59-a1dc-360ff4137e1e" />
<img width="947" height="419" alt="Screenshot 2026-08-24 173716" src="https://github.com/user-attachments/assets/8b59d309-d721-4507-9dbe-476dcb1fc5ab" />
<img width="938" height="408" alt="Screenshot 2026-08-24 173733" src="https://github.com/user-attachments/assets/379cd679-dc4c-4746-9018-41222098f82f" />

## How to Edit? ✏️

1. Clone the repository.
2. Replace the image of birthday person.
3. Replace the 6 memories images.
4. Change Name and Date.

```javascript
button.addEventListener("click", () => {
    openCelebrationOverlay(card.dataset.celebration);
});
```

## Built With 🛠️

- **HTML5**
- **CSS3**
- **JavaScript**

```css
.celebration-overlay.is-open {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
}
```

## Project Structure 📁

```text
Birthday/
│
├── index.html
│
├── css/
│   └── main.css
│
├── js/
│   └── script.js
│
└── assets/
    └── images/
        ├── decorations/
        ├── memories/
        └── ui/
```

## Support the Project ⭐

If you enjoyed this project or found it useful, consider giving the repository a **star** ⭐

> Made with ❤️ by Arman Ahmad
