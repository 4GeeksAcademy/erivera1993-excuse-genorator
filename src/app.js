const excuses = [
  "My dog ate my homework.",
  "I thought it was due next week.",
  "Aliens abducted me and just returned me.",
  "My computer exploded.",
  "I was busy binge-watching a series.",
  "There was a traffic jam in my hallway.",
  "My goldfish needed emotional support.",
  "I joined a secret mission. Can't talk about it.",
  "My alarm didn't go off... again.",
  "I slipped into a parallel universe."
];

const excuseElement = document.getElementById("excuse");
const button = document.getElementById("generateBtn");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * excuses.length);
  excuseElement.textContent = excuses[randomIndex];
});