
const planetFacts = {
  Mercury: "Mercury is the closest planet to the Sun. It is the smallest planet in our Solar System.",
  Venus: "Venus is the second planet from the Sun. Its thick atmosphere makes it the hottest planet.",
  Earth: "Earth is our home planet. It has liquid water on its surface and supports known life.",
  Mars: "Mars is called the Red Planet because of iron-rich dust on its surface.",
  Jupiter: "Jupiter is the largest planet in the Solar System. It has a giant storm called the Great Red Spot.",
  Saturn: "Saturn is famous for its beautiful rings, made mostly of ice and rocky particles.",
  Uranus: "Uranus is an ice giant that rotates on its side compared with most other planets.",
  Neptune: "Neptune is the farthest recognized planet from the Sun. It has very strong winds."
};

const space = document.querySelector(".space");
const planetName = document.getElementById("planet-name");
const planetInfo = document.getElementById("planet-info");
const toggleButton = document.getElementById("toggle-animation");

function showPlanet(name) {
  if (!planetFacts[name]) return;

  planetName.textContent = name;
  planetInfo.textContent = planetFacts[name];

  document.querySelectorAll(".planet").forEach((planet) => {
    planet.setAttribute(
      "aria-pressed",
      String(planet.dataset.name === name)
    );
  });
}

document.querySelectorAll("[data-name]").forEach((element) => {
  element.addEventListener("click", () => {
    showPlanet(element.dataset.name);
  });
});

toggleButton.addEventListener("click", () => {
  const paused = space.classList.toggle("paused");

  toggleButton.textContent = paused
    ? "▶ Resume Orbits"
    : "⏸ Pause Orbits";

  toggleButton.setAttribute("aria-pressed", String(paused));
});
