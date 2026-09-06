// Tip pool — swap these for whatever the widget ends up needing.
const tips = [
  "AC not cooling? Check the thermostat setting first — guests change it more than you'd think.",
  "Before assuming a unit is broken, confirm it's actually getting power.",
  "Stay calm on clogged toilet and sink calls — rushing causes more mistakes, not fewer.",
  "Double-check your work before leaving the room so the guest doesn't have to call again.",
  "TV not working? Check the remote and input source before touching any cables.",
  "Be coachable — every experienced tech has their own way of doing things. Take what works for you.",
  "Write down what you fix every day. Tracking your work turns experience into real knowledge.",
  "Small details matter — double-checking your work is what sets you apart.",
  "Always kill the power before working on electrical components.",
  "Check HVAC filters regularly — most preventable issues start there.",
  "Keep guests informed about what you're doing. Clear communication builds trust.",
  "Getting slammed with calls? Take a breath and handle them one at a time."
];

const tipText = document.getElementById("tipText");
const tipButton = document.getElementById("tipButton");

// Avoid showing the exact same tip twice in a row.
let lastIndex = -1;

function getRandomTipIndex() {
  let index;
  do {
    index = Math.floor(Math.random() * tips.length);
  } while (index === lastIndex && tips.length > 1);
  return index;
}

function showRandomTip() {
  const index = getRandomTipIndex();
  lastIndex = index;
  tipText.textContent = tips[index];
}

tipButton.addEventListener("click", showRandomTip);
