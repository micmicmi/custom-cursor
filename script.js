

// Get the custom cursor element
const customCursor = document.getElementById('custom-cursor');

// Load the Lottie animation
const animation = lottie.loadAnimation({
    container: customCursor,
    renderer: 'svg', // Use SVG renderer
    loop: false, // Set to true if you want the animation to loop
    autoplay: false, // Set to true to autoplay the animation
    path:'./coins explode.json'// Path to your Lottie animation file
});

// Variables to store mouse position
let mouseX = 0;
let mouseY = 0;

// Track mouse movement
document.addEventListener('mousemove', (e) => {
    // Adjust the position to center the animation based on its size
    const cursorWidth = customCursor.offsetWidth;
    const cursorHeight = customCursor.offsetHeight;

    customCursor.style.left = `${e.clientX - cursorWidth / 2}px`;
    customCursor.style.top = `${e.clientY - cursorHeight / 2}px`;
});

// Add click event listener to play the animation on any click
document.addEventListener('click', () => {
    // Stop the animation and reset it to the beginning
    animation.stop();
    animation.goToAndStop(0, true); // Reset to the beginning

    // Play the animation when the mouse is clicked
    animation.play();
});

const accordionButtons = document.querySelectorAll('.accordion-button');

function togglePlusMinus(plusMinus) {
  plusMinus.classList.toggle('minus');
}

accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const card = button.parentElement; // Get the parent card element
    const plusMinus = card.querySelector('svg.plusx'); // Query plusMinus within the current card

    // Toggle active state for the clicked card with transition
    card.classList.toggle('active');

    // Close other cards
    accordionButtons.forEach(otherButton => {
      const otherCard = otherButton.parentElement;
      if (otherButton !== button) {
        otherCard.classList.remove('active'); // Remove active class with transition
        const otherPlusMinus = otherCard.querySelector('svg.plusx');
        if (otherPlusMinus) {
          otherPlusMinus.classList.remove('minus'); // Reset other icons
        }
      }
    });

    // Toggle the plus/minus icon for the clicked card
    togglePlusMinus(plusMinus);
  });
});
