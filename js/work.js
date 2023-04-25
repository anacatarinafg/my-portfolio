const PROJECTS = [
  {
    id: 1,
    name: "Real-time weather",
    description:
      "You look at the sky and you’re worried that may be a rainy day? With this application, you’ll be able to check the current weather with detailed highlights such as wind, pressure, visibility & humidity PLUS you can also check the weather in the next hours of the day. Cooool, right?! What if I told you that you’ll ALSO be able to check the weather for the next five days? Now you’re free to put you’re clothes on the clotches-line without fear of them getting wet by the rain.",
    img: "/assets/weather-figma.png",
    link: "https://github.com/anacatarinafg/weather-app",
    list: [
      "Project designed on FIGMA",
      "Project coded with HTML, CSS & JAVASCRIPT",
      "API provived by https://openweathermap.org",
    ],
  },
  {
    id: 2,
    name: 'E-commerce "ecologic memories',
    description: "Project 2 description",
    img: "/assets/ecologic-memories.png",
    link: "",
    list: [
      "Project designed on FIGMA",
      "Project coded with HTML, CSS & JAVASCRIPT",
      "API provived by https://openweathermap.org",
    ],
  },
  {
    id: 3,
    name: "Solar system",
    description: "Project 3 description",
    img: "/assets/planets.png",
    link: "https://github.com/anacatarinafg/solar-system",
    list: [
      "Project designed on FIGMA",
      "Project coded with HTML, CSS & JAVASCRIPT",
      "API provived by https://openweathermap.org",
    ],
  },
  {
    id: 4,
    name: "Calculator",
    description: "Project 4 description",
    img: "/assets/calculator.png",
    link: "https://github.com/anacatarinafg/simple-calculator",
    list: [
      "Project designed on FIGMA",
      "Project coded with HTML, CSS & JAVASCRIPT",
      "API provived by https://openweathermap.org",
    ],
  },
];

console.log(PROJECTS[0]);

const mainWork = document.querySelector(".main__work");
PROJECTS.forEach((project) => {
  const workSection = document.createElement("section");
  workSection.classList.add("work");
  workSection.innerHTML = `
    <div class="work__box">
    <img src="${project.img}" alt="weather-app-designed-on-figma" class="work__image">
    <div class="work__info">
        <h2 class="work__name">${project.name}</h2>
        <p class="work__description">${project.description}
        </p>
        <ul class="work__list">
            <li class="work__item">${project.list[0]}</li>
            <li class="work__item">${project.list[1]}</li>
            <li class="work__item">${project.list[2]}</li>
        </ul>
        <div class="work__links">
        <a href="${project.link}" class="work__link" target="_blank">Source code</a>
        <a href="#" class="work__link" target="_blank">Web page</a>
    </div> 
    </div>
</div>
            `;
  mainWork.appendChild(workSection);
});
