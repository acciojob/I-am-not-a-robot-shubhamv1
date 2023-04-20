//your code here
// Get the main container element
var mainContainer = document.querySelector('main');

// Create an array of image URLs
var imageUrls = [
  'https://picsum.photos/id/237/200/300',
  'https://picsum.photos/seed/picsum/200/300',
  'https://picsum.photos/200/300?grayscale',
  'https://picsum.photos/200/300/',
  'https://picsum.photos/200/300.jpg'
];

// Shuffle the array of image URLs
imageUrls = shuffle(imageUrls);

// Choose a random image URL to repeat
var repeatImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];

// Create image elements for each image URL
for (var i = 0; i < 6; i++) {
  var img = document.createElement('img');
  img.src = (imageUrls[i] === repeatImageUrl) ? repeatImageUrl : imageUrls[i];
  img.classList.add('img' + (i + 1));
  img.addEventListener('click', onImageClick);
  mainContainer.appendChild(img);
}

// Create the h3 tag with id "h"
var h3 = document.createElement('h3');
h3.id = 'h';
h3.textContent = 'Please click on the identical tiles to verify that you are not a robot.';
mainContainer.appendChild(h3);

// Set initial state to State 1
var state = 1;

// Function to handle image click events
function onImageClick(event) {
  var clickedImage = event.target;

  // Check if clicked image is already selected
  if (clickedImage.classList.contains('selected')) {
    return;
  }

  // Check current state
  switch (state) {
    case 1: // State 1: No tiles clicked
      clickedImage.classList.add('selected');
      state = 2;
      createResetButton();
      break;
    case 2: // State 2: One tile clicked
      clickedImage.classList.add('selected');
      state = 3;
      createVerifyButton();
      break;
    case 3: // State 3: Two tiles clicked
      // Do nothing, wait for verify button click
      break;
    case 4: // State 4: Verify button clicked
      // Do nothing, state cannot be changed after verify button is clicked
      break;
  }
}

// Function to create the reset button
function createResetButton() {
  var resetButton = document.createElement('button');
  resetButton.id = 'reset';
  resetButton.textContent = 'Reset';
  resetButton.addEventListener('click', onResetButtonClick);
  mainContainer.appendChild(resetButton);
}

// Function to handle reset button click events
function onResetButtonClick() {
  // Reset state to State 1
  state = 1;

  // Reset selected images and remove reset button
  var selectedImages = mainContainer.querySelectorAll('.selected');
  selectedImages.forEach(function(image) {
    image.classList.remove('selected');
  });

  var resetButton = document.getElementById('reset');
  resetButton.parentNode.removeChild(resetButton);

  // Reset verify button and result paragraph if present
  var verifyButton = document.getElementById('verify');
  if (verifyButton) {
    verifyButton.parentNode.removeChild(verifyButton);
  }

  var resultParagraph = document.getElementById('para');
  if (resultParagraph) {
    resultParagraph.parentNode.removeChild(resultParagraph);
  }
}

// Function to create the verify button
function createVerifyButton() {
  var verifyButton = document.createElement('button');
  verifyButton.id = 'verify';
  verifyButton.textContent = 'Verify';
  verify
