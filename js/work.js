const PROJECTS = [
  {
    id: 1,
    name: "Real-time weather",
    description:
      "The weather app is a web application developed using HTML, CSS, and JavaScript to provide users with real-time weather information for a specific location.",
    img: "./assets/weather-app.png",
    sourceCode: "https://github.com/anacatarinafg/weather-app",
    webpage: "https://anacatarinafg.github.io/weather-app/#/current-location",
    list: [
      "Project designed on FIGMA",
      "Project coded with HTML, CSS & JAVASCRIPT",
      "API provived by https://openweathermap.org",
    ],
  },
  {
    id: 2,
    name: 'E-commerce "ecologic memories"',
    description:
      "The e-commerce website is a web application developed using Next.js, a React framework, to provide users with an online shopping experience.",
    img: "./assets/ecologic-memories.png",
    sourceCode: "https://github.com/anacatarinafg/e-commerce_ecologic-memories",
    webpage: "https://anacatarinafg.github.io/E-commerce_Ecologic_Memories/",
    list: [
      "Project designed on FIGMA",
      "Project coded with NEXTJS & CSS",
      "Images of the products stored on Sanity",
    ],
  },
  {
    id: 3,
    name: "Tesla clone",
    description:
      "The Tesla clone is a static web page created using only HTML and CSS to replicate the design and appearance of Tesla website.",
    img: "./assets/tesla-project.png",
    sourceCode: "https://github.com/anacatarinafg/tesla-frontpage-clone/tree/gh-pages",
    webpage: "https://anacatarinafg.github.io/tesla-frontpage-clone/#solarPanels",
    list: [
      "Tesla webpage: https://www.tesla.com/",
      "Project coded with HTML & TAILWIND",
      "NOTE: I only coded the front page.",
    ],
  },
  {
    id: 4,
    name: "NOS Alive clone",
    description: "The NOS Alive clone is a static web page created using only HTML and CSS to replicate the design and appearance of NOS Alive website.",
    img: "./assets/nos-alive.png",
    sourceCode: "https://github.com/anacatarinafg/nos-alive-clone",
    webpage: "https://anacatarinafg.github.io/nos-alive-clone/",
    list: [
      "NOS Alive webpage: https://nosalive.com/",
      "Project coded with HTML & CSS",
      "NOTE: I only coded the front page.",
    ],
  },
  {
    id: 5,
    name: "Solar system",
    description:
      "A solar system simulation is a web application created using HTML and CSS to visually represent the celestial bodies in our solar system.",
    img: "./assets/planets.png",
    sourceCode: "https://github.com/anacatarinafg/solar-system",
    webpage: "https://anacatarinafg.github.io/solar-system/index.html",
    list: [
      "Project designed on FIGMA",
      "Project coded with HTML, CSS & JAVASCRIPT",
      "All images provided by SPACEPEDIA",
    ],
  },
  {
    id: 6,
    name: "Todo",
    description: "The todo list is a web application developed using REACT to help users manage and organize their tasks and to-do items.",
    img: "./assets/todo-app.png",
    sourceCode: "https://github.com/anacatarinafg/Todo",
    webpage: "https://anacatarinafg.github.io/Todo/",
    list: ["Project designed on FIGMA", "Project coded with REACT & CSS", "Simple projects to practice my development skills."],
  },
  {
    id: 7,
    name: "Calculator",
    description: "The calculator is a web application developed using HTML, CSS, and JavaScript to provide users with a digital calculator for performing arithmetic calculations.",
    img: "./assets/calculator.png",
    sourceCode: "https://github.com/anacatarinafg/simple-calculator",
    webpage: "https://anacatarinafg.github.io/simple-calculator/",
    list: [
      "Project designed on FIGMA",
      "Project coded with HTML, CSS & JAVASCRIPT",
      "Simple projects to practice my development skills.",
    ],
  },
  {
    id: 8,
    name: "Clock",
    description: "The clock is a digital timekeeping application built using HTML, SASS, and JavaScript. It provides a user-friendly interface that displays the current time accurately.",
    img: "./assets/watch.png",
    sourceCode: "https://github.com/anacatarinafg/clock",
    webpage: "https://anacatarinafg.github.io/clock/",
    list: [
      "Project designed on FIGMA",
      "Project coded with HTML, SASS & JAVASCRIPT",
      "Simple projects to practice my development skills.",
    ],
  },
  {
    id: 9,
    name: "Dictionary",
    description: "The dictionary is a web application developed using HTML, CSS, and JavaScript to provide users with a convenient way to search for word definitions and meanings.",
    img: "./assets/dictionary.png",
    sourceCode: "https://github.com/anacatarinafg/dictionary",
    webpage: "https://anacatarinafg.github.io/dictionary/",
    list: [
      "Project designed on FIGMA",
      "Project coded with HTML, CSS & JAVASCRIPT",
      "Simple projects to practice my development skills.",
    ],
  },
  {
    id: 10,
    name: "Github search profile",
    description: "The GitHub search profile is a web application developed using HTML, SASS, and JavaScript to enable users to search for GitHub profiles and view relevant information about the searched users.",
    img: "./assets/githubprofile.png",
    sourceCode: "https://github.com/anacatarinafg/github-profile",
    webpage: "https://anacatarinafg.github.io/github-profile/",
    list: [
      "Project designed on FIGMA",
      "Project coded with HTML, SASS & JAVASCRIPT",
      "Simple projects to practice my development skills.",
    ],
  },
  {
    id: 10,
    name: "Gradient generator",
    description: "The gradient generator is a web application developed using HTML, SASS, and JavaScript to allow users to create and customize gradient backgrounds for their projects.",
    img: "./assets/gradient.jpg",
    sourceCode: "https://github.com/anacatarinafg/gradient-generator",
    webpage: "https://anacatarinafg.github.io/gradient-generator/",
    list: [
      "Project designed on FIGMA",
      "Project coded with HTML, SASS & JAVASCRIPT",
      "Simple projects to practice my development skills.",
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
        <a href="${project.sourceCode}" class="work__link" target="_blank">Source code</a>
        <a href="${project.webpage}" class="work__link" target="_blank">Web page</a>
    </div> 
    </div>
</div>
            `;
  mainWork.appendChild(workSection);
});
