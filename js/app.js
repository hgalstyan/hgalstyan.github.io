const projects = document.querySelector("#projects");
const skills = document.querySelector(".skills");
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const header = document.querySelector('.navigation-container');




const data = {
  skills: ["HTML","CSS","JS","SASS","JQ","React"],
  projects: [
    {
      name: "Responsive Layout",
      src: "img/projects/project-2.PNG",
      description: "There are a lot of different devices, with different display sizes. That's why responsive design is important part of a modern web development. In two words responsive website is a website, wich is good looking on every device. I hope like this one.",
      skills: ["HTML", "CSS"],
      repo: "https://github.com/hgalstyan/responsive_layout",
      link: "https://hgalstyan.github.io/responsive_layout/"
    },
    {
      name: "Online Registration",
      src: "img/projects/project-3.PNG",
      description: "When you are subscribing or registering, you need to fill a form with your info. Well, here it is.",
      skills: ["HTML", "CSS"],
      repo: "https://github.com/hgalstyan/online_registration_v3",
      link: "https://hgalstyan.github.io/online_registration_v3/"
    },
    {
      name: "Photo Gallery",
      src: "img/projects/project-4.PNG",
      description: "There are a lot of great frameworks. I'm using one of them here to display photos.",
      skills: ["HTML", "CSS","JS","JQ"],
      repo: "https://github.com/hgalstyan/photo_gallery_v4",
      link: "https://hgalstyan.github.io/photo_gallery_v4/"
    },
    {
      name: "Style Guide",
      src: "img/projects/project-5.PNG",
      description: "If you search the internet, you'll find a ton of different web-styles. With guide of course.",
      skills: ["HTML", "CSS","SCSS"],
      repo: "https://github.com/hgalstyan/style_guide_v5",
      link: "https://hgalstyan.github.io/style_guide_v5/"
    },
    {
      name: "Video Player",
      src: "img/projects/project-6.PNG",
      description: "Also great framework but this time it's a video player. Who doesn't want a good looking video player with closed captions. Just in case it's also interactive",
      skills: ["HTML", "CSS","JS","JQ"],
      repo: "https://github.com/hgalstyan/video_player_v6",
      link: "https://hgalstyan.github.io/video_player_v6/"
    },
    {
      name: "Game Show App",
      src: "img/projects/project-7.PNG",
      description: "Let's play some game. You should guess the word, by clicking on the letters, placed on display. You can miss only five times. Good luck.",
      skills: ["HTML", "CSS","JS","JQ"],
      repo: "https://github.com/hgalstyan/game_show_app_v7",
      link: "https://hgalstyan.github.io/game_show_app_v7/"
    },
    {
      name: "SVG Animations",
      src: "img/projects/project-8.PNG",
      description: "Is's a webpage about corgi dogs. All SVG are animated here. Just try. The goal of this project was SVG creation and animation.",
      skills: ["HTML", "CSS"],
      repo: "https://github.com/hgalstyan/svg_animations_v8",
      link: "https://hgalstyan.github.io/svg_animations_v8/"
    },
    {
      name: "Web App Dashboard",
      src: "img/projects/project-9.PNG",
      description: "With chart.js, SASS, and JS, I created this dashboard. It's also have local memory. So changes in settings will be saved.",
      skills: ["HTML", "CSS","SCSS","JS","JQ"],
      repo: "https://github.com/hgalstyan/web-app-dashboard",
      link: "https://hgalstyan.github.io/web-app-dashboard/"
    },
    {
      name: "Public API",
      src: "img/projects/project-10.PNG",
      description: "API(Application Programming Interface) is a tool which web developers are using to communicate with the servers. This project is an example of that. It's getting random 12 people from another server and displaying them.",
      skills: ["HTML", "CSS", "JS", "JQ"],
      repo: "https://github.com/hgalstyan/public-API-2",
      link: "https://hgalstyan.github.io/public-API-2"
    },
    {
      name: "Flicr Gallery",
      src: "img/projects/project-11.PNG",
      description: "React is a JavaScript library for building user interfaces. It's fast, easy and manageable. For first time it's a pain in some lower body part. In this project I'm using Flickrs API and displaying photo via search or by pushing the buttons.",
      skills: ["HTML", "CSS","JS","React"],
      repo: "https://github.com/hgalstyan/React-gallery",
      link: "https://github.com/hgalstyan/React-gallery/blob/master/README.md"
    }
  ]
}


//adding skillList in about section
data.skills.forEach( skill => {
  let skillList = `<p class="skills-${skill.toLowerCase()}">${skill}</p>`;
  skills.innerHTML += skillList;
});

//adding projects
data.projects.forEach(project => {
  const li = project.skills.map( skill => `<li class="skills-${skill.toLowerCase()}">${skill}</li>`);
  const list = li.join(" ");

  let projectList = `
  <div class="grid__col--6">
    <h3>${project.name}</h3>
    <img class="img--frame" src="${project.src}" alt="${project.Name} image"/>
    <p>${project.description}</p>
    <h4>Skills</h4>
    <ul class="grid__col--12 ">
      ${list}
    </ul>
    <div class="project-nav">
      <a href="${project.repo}">
        <div class="nav__link">
          <img src="img/github.svg" class="nav__link--item" alt="giyhub logo"/>
          <p class="nav__link--item">REPO</p>
        </div>
      </a>
      <a href="${project.link}">
        <div class="nav__link">
          <img src="img/play.svg" class="nav__link--item" alt="play logo"/>
          <p class="nav__link--item">VIEW</p>
        </div>
      </a>
    </div>
  </div>`;
  projects.innerHTML += projectList;
});




hamburger.onclick = (e) => {
  //const nav = document.getElementsByTagName("nav")[0];
  hamburger.classList.toggle("is-active");

  (hamburger.classList[2] === "is-active") ? toggleHeight("300px","block") : toggleHeight("64px","none");
};

toggleHeight = (height, display) => {
  nav.style.display = display;
  header.style.height = height;
}

document.querySelector("body").onresize = () =>{
  hamburger.classList.remove("is-active");
  if(window.innerWidth > 1000) {
    toggleHeight("auto", "block");
  } else {
    toggleHeight("64px", "none");
  }
};

nav.onclick = () => {
  if(window.innerWidth < 1000){
    hamburger.classList.remove("is-active");
    toggleHeight("64px", "none");
  }
}
