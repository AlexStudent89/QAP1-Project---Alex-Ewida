// Multimedia controls and interactivity

// Example: Codes for controlling audio and video elements

// const audio = document.querySelector('audio');
// const video = document.querySelector('video');

// Function to play audio
// function playAudio() {
//     audio.play();
// }

// Function to play video
// function playVideo() {
//     video.play();
// }

// Video and audio or other interactive features needed

// Elements to change color
const articleTitle = document.querySelector('h1');
const authorName = document.querySelector('h2');

// Mouseover event to change the color
articleTitle.addEventListener('mouseover', () => {
    articleTitle.style.color = 'blue';
});

authorName.addEventListener('mouseover', () => {
    authorName.style.color = 'blue';
});

// Mouseout event to reset the color
articleTitle.addEventListener('mouseout', () => {
    articleTitle.style.color = ''; // Reset to default color
});

authorName.addEventListener('mouseout', () => {
    authorName.style.color = ''; // Reset to default color
});

// Menu buttons
const menuButtons = document.querySelectorAll('.menu a');

menuButtons.forEach((button) => {
    button.addEventListener('mouseover', () => {
        button.style.color = 'light blue';
    });

    button.addEventListener('mouseout', () => {
        button.style.color = 'light blue';
    });
});