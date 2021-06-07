// Blob Settings Tool Variables
const randomColor = document.getElementById('btn-random');
const randomColorCard = document.getElementById('btn-random-card');
const favColor = document.getElementById('favcolor');
const favColorCardBlob = document.getElementById('cardblob');

// Course Card Blobs Variables
const cardBlobs = document.querySelectorAll('.card-blob');

const blob1 = document.querySelectorAll('.card-blob-1');
const blob2 = document.querySelectorAll('.card-blob-2');
const blob3 = document.querySelectorAll('.card-blob-3');
const cardBlobSample = document.querySelector('.card-blob-sample');

// Define an array of colors for random color selection
const colors = ['#F7DDDD','#f3d6d6','#B9E6BE','#f7d0f5','#f5e7b9','#d8f0c5','#F4E6E6','#f5dbdb','#ede2ca','#f5dbbf','#d0f7dd','#b9f5ed','#d1cdf8','#f7ced4'];

// Select the SVG paths for floating blobs
var blobs = document.querySelectorAll("path");

// Randomly apply colors to the SVG fill property of floating blobs at page load
blobs.forEach(blob => {
  blob.style.fill = colors[Math.floor(Math.random() * colors.length)];
});

// Apply favourite color choosen from color picker to floating blobs
favColor.addEventListener('input', (e) => {
  console.log('value: ', favColor.value)
    blobs.forEach(blob => {
      blob.style.fill = favColor.value;
    });
})

// Randomly apply colors to the SVG fill property of floating blobs using settings tool
randomColor.addEventListener('click', (e) => {
  blobs.forEach(blob => {
    blob.style.fill = colors[Math.floor(Math.random() * colors.length)];
  });
})

// Apply favourite color choosen from color picker to card blobs
favColorCardBlob.addEventListener('input', (e) => {
    cardBlobs.forEach(blb => {
      blb.style.background = cardblob.value;
    })
    cardBlobSample.style.background = cardblob.value;
})

randomColorCard.addEventListener('click', (e) => {
  generateRandomStyle(blob1);
  generateRandomStyle(blob2);
  generateRandomStyle(blob3);
  generateRandomStyle(cardBlobSample, 'single');
})

const generateRandomStyle = (blob, noOfBlobs='many') => {
  if(noOfBlobs === 'many'){
    blob.forEach(blb => {
      randomizer(blb);
  })
  } else {
    randomizer(blob);
  }
}

const randomizer = (blb) => {
  // Generate randon number between two numbers
  // Math.floor(Math.random() * (max - min + 1)) + min;

  const width = Math.floor(Math.random() * (150 - 110 + 1) + 110);
  const height = Math.floor(Math.random() * (180 - 110 + 1) + 110);
  
  const percentage1 = Math.floor(Math.random() * (100 - 40 + 1) + 40);
  const percentage2 = Math.floor(Math.random() * (100 - 40 + 1) + 40);
  const percentage3 = Math.floor(Math.random() * (100 - 40 + 1) + 40);
  const percentage4 = Math.floor(Math.random() * (100 - 40 + 1) + 40);

  blb.style.background = colors[Math.floor(Math.random() * colors.length)];
      blb.style.borderRadius = `${percentage1}% ${percentage2}% ${percentage3}% ${percentage4}% / ${percentage1}% ${percentage3}% ${percentage2}% ${percentage4}%`;
      blb.style.width = `${width}px`;
      blb.style.height = `${height}px`;
}

// Blob Settings Tool
const rangeInputs = document.querySelectorAll("input[type=range]");
const code = document.querySelector(".code");

let root = window.getComputedStyle(document.documentElement);
let radius = [
  root.getPropertyValue("--radius-1"),
  root.getPropertyValue("--radius-2"),
  root.getPropertyValue("--radius-3"),
  root.getPropertyValue("--radius-4"),
  "/ " + root.getPropertyValue("--radius-5"),
  root.getPropertyValue("--radius-6"),
  root.getPropertyValue("--radius-7"),
  root.getPropertyValue("--radius-8")
];

code.innerHTML = "border-radius: " + radius.join(' ') + ";";
rangeInputs.forEach((el, index) => {
  el.addEventListener("input", (e) => {
    document.documentElement.style.setProperty("--radius-" + (index + 1), e.target.value + "%");
    el.setAttribute("data-value", e.target.value + "%");
    
    if (index === 4) {
      radius[index] = "/ " + e.target.value + "%";
    } 
    else {
      radius[index] = e.target.value + "%";
    }
    code.innerHTML = "border-radius: " + radius.join(' ') + ";";
  });
})

