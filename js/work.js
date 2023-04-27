const PROJECTS = [
  {
    id: 1,
    name: "Real-time weather",
    description:
      "To create the real-time weather app, I used HTML to create the page structure, defining sections, headers, and other elements that make up the app. I also used CSS to style the web page, defining colors, fonts, layout, and other design elements. Additionally, used JavaScript to retrieve weather data from an API and display it on the web page in real-time. I also included a search bar for finding weather information for different locations.",
    img: "/assets/weather-app.png",
    sourceCode: "https://github.com/anacatarinafg/weather-app",
    webpage: "",
    list: [
      "Project designed on FIGMA",
      "Project coded with HTML, CSS & JAVASCRIPT",
      "API provived by https://openweathermap.org",
    ],
  },
  {
    id: 2,
    name: 'E-commerce "ecologic memories',
    description:
      "To create the e-commerce website, I used React components to build the user interface, defining components for the header, footer, product listings, shopping cart, and other elements that make up the site. Additionally, used Next.js to create server-side rendered pages, improving the performance and SEO of the website.",
    img: "/assets/ecologic-memories.png",
    sourceCode: "https://github.com/anacatarinafg/e-commerce_ecologic-memories",
    webpage: "",
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
      "To create the front page of Tesla website clone, I used HTML to create the page structure, defining sections, headers, footers, and other elements that make up the site. Additionally, used Tailwind to apply visual styles to the site, such as colors, fonts, spacing, and other design elements.",
    img: "/assets/tesla-project.png",
    sourceCode: "https://github.com/anacatarinafg/tesla-frontpage-clone",
    webpage: "",
    list: [
      "Tesla webpage: https://www.tesla.com/",
      "Project coded with HTML & TAILWIND",
      "NOTE: I only coded the front page.",
    ],
  },
  {
    id: 4,
    name: "NOS Alive clone",
    description: "To create the music festival page, I used HTML to create the page structure, defining sections, headers, and other elements that make up the page. Also included images and descriptions for the music festival, as well as information about the performers and schedule. Additionally, used CSS to style the web page, defining colors, fonts, layout, and other design elements. Also used CSS animations and transitions to add interactivity to the page.",
    img: "/assets/nos-alive.png",
    sourceCode: "https://github.com/anacatarinafg/nos-alive-clone",
    webpage: "",
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
      "To create the solar system project, I used HTML to create the page structure, defining sections, headers, and other elements that make up the site. I also included images and details for each planet. Additionally, used CSS to style the web page, defining colors, fonts, layout, and other design elements. I also used CSS animations to add interactivity to the project, such as rotating planets and orbiting moons.",
    img: "/assets/planets.png",
    sourceCode: "https://github.com/anacatarinafg/solar-system",
    webpage: "",
    list: [
      "Project designed on FIGMA",
      "Project coded with HTML, CSS & JAVASCRIPT",
      "All images provided by SPACEPEDIA",
    ],
  },
  {
    id: 6,
    name: "Todo",
    description: "Implemented features such as adding and deleting tasks, marking tasks as completed, and filtering tasks by status. Also used local storage to store the user's task data, allowing the data to persist even after the user closes the app.",
    img: "/assets/todo-app.png",
    sourceCode: "https://github.com/anacatarinafg/Todo",
    webpage: "",
    list: ["Project designed on FIGMA", "Project coded with REACT & CSS", "Simple projects to practice my development skills."],
  },
  {
    id: 7,
    name: "Calculator",
    description: "Used JavaScript to add functionality to the calculator, allowing users to perform basic mathematical operations such as addition, subtraction, multiplication, and division. Also included features such as a clear button for clearing the calculator's display, and a decimal button for entering decimal numbers.",
    img: "/assets/calculator.png",
    sourceCode: "https://github.com/anacatarinafg/simple-calculator",
    webpage: "",
    list: [
      "Project designed on FIGMA",
      "Project coded with HTML, CSS & JAVASCRIPT",
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
