import './output.css';
import { useState, useEffect, useRef } from 'react';

function Menu({changeEl}){
  return <div className="perspective w-full h-full flex flex-col items-start justify-center pl-5">
    <p onClick={() => changeEl("welcome")} className="font-size-1 font-bold cursor-pointer rotate-y">WELCOME<span className="font-bold stroke-2 text-black"> 01</span></p>
    <p onClick={() => changeEl("projects")} className="font-size-1 font-bold cursor-pointer rotate-y">PROJECTS<span className="font-bold stroke-2 text-black"> 02</span></p>
    <p onClick={() => changeEl("about")} className="font-size-1 font-bold cursor-pointer rotate-y">ABOUT ME<span className="font-bold stroke-2 text-black"> 03</span></p>
    <p onClick={() => changeEl("ed")} className="font-size-1 font-bold cursor-pointer rotate-y">EDUCATION<span className="font-bold stroke-2 text-black"> 04</span></p>
  </div>
}

function Welcome({changeEl}){
  return <div className="w-full h-full flex flex-col items-center justify-center">
    <div className="flex flex-col gap-1">
      <p className=" font-size-2 font-bold text-black stroke-1">Hey, I'm <span>Teo Kocev</span></p>
      <p className="font-size-3">React<span className="font-bold stroke-1 text-black"> Developer</span></p>
      <p className="font-size-3">Web<span className="font-bold stroke-1 text-black"> Developer</span></p>
      <div onClick={() => changeEl("projects")} className="flex items-center gap-2 hover:gap-4 cursor-pointer"><p className="font-size-3 nunito">&gt;</p><p className=" font-size-3">Projects</p></div>
      <div onClick={() => changeEl("about")} className="flex items-center gap-2 hover:gap-4 cursor-pointer"><p className="font-size-3 nunito">&gt;</p><p className=" font-size-3">About Me</p></div>
      <div onClick={() => changeEl("ed")} className="flex items-center gap-2 hover:gap-4 cursor-pointer"><p className="font-size-3 nunito">&gt;</p><p className=" font-size-3">Education</p></div>
    </div>
  </div>
}

function Projects({changeEl}){
  let projectD = [
    {
      title:"Uprize",
      desc:"This is a website I made for freelancing purposes. It was made using HTML, CSS and JS.",
      techs:["HTML", "CSS", "JavaScript"],
      link:"https://staticvoidteo.github.io/uprize/"
    },
    {
      title:"EvroPrint",
      desc:"This is a web website that I made for a company named EvroPrint. It was made using HTML, CSS and JS.",
      techs:["HTML", "CSS", "JavaScript"],
      link:"https://staticvoidteo.github.io/evroprint/"
    },
    {
      title:"Portfolio 1.0",
      desc:"This is my first portfolio website.",
      techs:["HTML", "CSS", "JavaScript"],
      link:"https://staticvoidteo.github.io/portfolio/"
    },
    {
      title:"Drink or Dare",
      desc:"This is a web/mobile app I made for fun.",
      techs:["React.js", "TailwindCSS"],
      link:"https://staticvoidteo.github.io/drink-or-dare/"
    },
    {
      title:"Twitter Clone",
      desc:"I cloned the Twitter user interface using only React.js and TailwindCSS.",
      techs:["React.js", "TailwindCSS"],
      link:"https://staticvoidteo.github.io/twitter-clone/"
    },
  ]
  return <div className="w-full h-full flex pl-5 items-center">
    <div className="perspective w-fit flex flex-col gap-1">
      <div className="flex justify-between w-full rotate-y no-hover">
        <p className="font-size-1 font-bold">Projects</p>
        <p className="font-size-1 font-bold">5</p>
      </div>
      <hr className="w-full rotate-y border-b-4 borderShrink:border-b-2 rounded-full no-hover"/>
      <p onClick={() => changeEl("project", projectD[0])} className="font-size-1 font-bold cursor-pointer rotate-y">Uprize<span className="font-bold stroke-2 text-black"> 01</span></p>
      <p onClick={() => changeEl("project", projectD[1])} className="font-size-1 font-bold cursor-pointer rotate-y">EvroPrint<span className="font-bold stroke-2 text-black"> 02</span></p>
      <p onClick={() => changeEl("project", projectD[2])} className="font-size-1 font-bold cursor-pointer rotate-y">Portfolio 1.0<span className="font-bold stroke-2 text-black"> 03</span></p>
      <p onClick={() => changeEl("project", projectD[3])} className="font-size-1 font-bold cursor-pointer rotate-y">Drink or Dare<span className="font-bold stroke-2 text-black"> 04</span></p>
      <p onClick={() => changeEl("project", projectD[4])} className="font-size-1 font-bold cursor-pointer rotate-y">Twitter Clone<span className="font-bold stroke-2 text-black"> 05</span></p>
    </div>
  </div>
}

function About(){
  return <div className="w-full h-full flex flex-col items-center justify-start gap-10">
    <div className="aboutDesc flex flex-col w-fit px-5 mt-1-3 gap-1">
      <p className=" font-size-2 font-bold text-black stroke-1 text-center">I'm <span>Teo Kocev</span></p>
      <p className="font-size-4 w-description">
      I am a passionate software developer striving towards bringing the best I can for software-driven companies. Ever since I was a child I knew I would be a software developer in the future!
      </p>
    </div>
    <card className="aboutCard1 aboutcard w-card flex flex-col gap-2 items-center p-5 rounded-3xl border-2 border-white bg-glass">
      <p className=" font-size-3 font-bold text-center">Front-End<br/>Developer</p>
      <hr className="w-full border-b-2 rounded-full"/>
      <p className=" font-size-4 text-center">I like to code websites and bring ideas to life!</p>
      <hr className="w-full border-b-2 rounded-full"/>
      <p className=" font-size-4 font-bold text-center">Front-End languages I speak:</p>
      <div>
        <p className=" font-size-4 text-center">HTML</p>
        <p className=" font-size-4 text-center">CSS</p>
        <p className=" font-size-4 text-center">JavaScript</p>
      </div>
      <hr className="w-full border-b-2 rounded-full"/>
      <p className=" font-size-4 font-bold text-center">Technologies I use:</p>
      <div>
        <p className=" font-size-4 text-center">React.js</p>
        <p className=" font-size-4 text-center">TailwindCSS</p>
      </div>
    </card>
    {/* CARD 2 */}
    <card className="aboutCard2 w-card flex flex-col gap-2 items-center p-5 rounded-3xl border-2 border-white bg-glass">
      <p className=" font-size-3 font-bold text-center">Web Designer</p>
      <hr className="w-full border-b-2 rounded-full"/>
      <p className=" font-size-4 text-center">I would say the design is the most important thing!</p>
      <hr className="w-full border-b-2 rounded-full"/>
      <p className=" font-size-4 font-bold text-center">Technologies I use:</p>
      <div>
        <p className=" font-size-4 text-center">Figma</p>
        <p className=" font-size-4 text-center">Canva</p>
        <p className=" font-size-4 text-center">Photoshop</p>
        <p className=" font-size-4 text-center">Corel Draw</p>
      </div>
    </card>
    {/* CARD 3 */}
    <card className="aboutCard3 w-card flex flex-col gap-2 items-center p-5 rounded-3xl border-2 border-white bg-glass">
      <p className=" font-size-3 font-bold text-center">Back-End<br/>Developer</p>
      <hr className="w-full border-b-2 rounded-full"/>
      <p className=" font-size-4 text-center">In addition to my front-end expertise, I also have strong back-end development skills!</p>
      <hr className="w-full border-b-2 rounded-full"/>
      <p className=" font-size-4 font-bold text-center">Technologies I use:</p>
      <div>
        <p className=" font-size-4 text-center">MySQL</p>
        <p className=" font-size-4 text-center">C++</p>
        <p className=" font-size-4 text-center">Python</p>
        <p className=" font-size-4 text-center">Django</p>
      </div>
    </card>
    <div className="min-h-5 w-full"></div>
  </div>
}

function Ed({changeEl}){
  let certD = [
    {title:"Programming with C++",
      desc:"During this course, I learned the fundamentals of the C++ programming language and advanced my algorithmic thinking by solving challenging coding problems. This is where my love for programming truly began.",
      techs:["C++"]},
    {title:"Advanced C++",
      desc:"During this course, I enhanced my skills with the C++ programming language and learned techniques that got me involved in Algorithms and Data Structures competitions. I've been competing ever since.",
      techs:["C++"]},
    {title:"Programming with C#",
      desc:"During this course, I was introduced to the C# programming language and the creation of Windows apps. I learned the fundamentals and how to work in Visual Studio.",
      techs:["C#"]},
    {title:"Front End Development",
      desc:"In this course, I was introduced to web development and the inner workings of the internet. I started learning HTML and CSS, and by the end of the course, I was able to create various types of static websites.",
      techs:["HTML", "CSS", "JavaScript"]},
    {title:"Programming with JavaScript",
      desc:"During this course, I learned JavaScript and how to use it to build fully functional web apps. I also learned testing with JEST and got a taste of React. This marked the beginning of my success as a developer.",
      techs:["JavaScript", "JEST"]},
    {title:"Version Control with Git",
      desc:"During this course, I learned how to use Git and GitHub to manage projects and collaborate with a team on development.",
      techs:["Git", "GitHub"]},
    {title:"JavaScript Algorithms and Data Structures",
      desc:"With this course, I enhanced my knowledge of solving problems using algorithms and data structures and became really comfortable using JavaScript.",
      techs:["JavaScript"]},
    {title:"Responsive Web Design",
      desc:"During this course, I became very comfortable using HTML, and I especially focused on CSS, learning tricks for better responsive design.",
      techs:["HTML", "CSS"]},
  ];
  return <div className="w-full h-full flex pl-5 items-start mt-20">
      <div className="perspective w-fit flex flex-col gap-2 max-w-min">
        <div className="flex justify-between gap-5 w-full rotate-y1 no-hover">
          <p className="font-size-1 font-bold">Certificates</p>
          <p className="font-size-1 font-bold">8</p>
        </div>
        <hr className="w-full rotate-y1 border-b-4 borderShrink:border-b-2 rounded-full no-hover"/>
        <p onClick={() => changeEl("cert", certD[0])} className="font-size-2 font-bold cursor-pointer rotate-y1">Programming with C++</p>
        <hr className="w-full rotate-y1 border-b-4 borderShrink:border-b-2 rounded-full no-hover"/>
        <p onClick={() => changeEl("cert", certD[1])} className="font-size-2 font-bold cursor-pointer rotate-y1">Advanced C++</p>
        <hr className="w-full rotate-y1 border-b-4 borderShrink:border-b-2 rounded-full no-hover"/>
        <p onClick={() => changeEl("cert", certD[2])} className="font-size-2 font-bold cursor-pointer rotate-y1">Programming with C#</p>
        <hr className="w-full rotate-y1 border-b-4 borderShrink:border-b-2 rounded-full no-hover"/>
        <p onClick={() => changeEl("cert", certD[3])} className="font-size-2 font-bold cursor-pointer rotate-y1">Front End Development</p>
        <hr className="w-full rotate-y1 border-b-4 borderShrink:border-b-2 rounded-full no-hover"/>
        <p onClick={() => changeEl("cert", certD[4])} className="font-size-2 font-bold cursor-pointer rotate-y1">Programming with JavaScript</p>
        <hr className="w-full rotate-y1 border-b-4 borderShrink:border-b-2 rounded-full no-hover"/>
        <p onClick={() => changeEl("cert", certD[5])} className="font-size-2 font-bold cursor-pointer rotate-y1">Version Control with Git</p>
        <hr className="w-full rotate-y1 border-b-4 borderShrink:border-b-2 rounded-full no-hover"/>
        <p onClick={() => changeEl("cert", certD[6])} className="font-size-2 font-bold cursor-pointer rotate-y1">JavaScript Algorithms and Data Structures</p>
        <hr className="w-full rotate-y1 border-b-4 borderShrink:border-b-2 rounded-full no-hover"/>
        <p onClick={() => changeEl("cert", certD[7])} className="font-size-2 font-bold cursor-pointer rotate-y1">Responsive Web Design</p>
      </div>
    </div>
}

function Project({changeEl, data}){
  let skills = data.techs.map((el) => <p className="roboto-mono font-size-4 px-5 py-2 bg-white rounded-full text-black">{el}</p>);
  return <div className="w-full h-full flex items-center justify-center">
    <div className="flex flex-col gap-5 items-center p-5 border-2 border-white rounded-3xl w-certificate bg-glass">
      <p className="font-size-2 font-bold w-description text-center">{data.title}</p>
      <p className="font-size-4 text-center w-description">{data.desc}</p>
      <div className="flex gap-2 items-center flex-wrap justify-center">
        {skills}
      </div>
      <p onClick={() => window.location = data.link} className="group roboto-mono font-size-4 px-5 py-2 border-2 border-white rounded-full cursor-pointer bg-transparent hover:bg-white hover:text-black">Visit Site <span className="nunito group-hover:text-black">&gt;</span></p>
    </div>
    <p onClick={() => changeEl("projects")} className="fixed top-10 left-12 text-5xl cursor-pointer nunito font-bold">&lt;</p>
  </div>
}

function Cert({changeEl, data}){
  let skills = data.techs.map((el) => <p className="roboto-mono font-size-4 px-5 py-2 bg-white rounded-full text-black">{el}</p>);
  return <div className="w-full h-full flex items-center justify-center">
    <div className="flex flex-col gap-5 items-center p-5 border-2 border-white rounded-3xl w-certificate bg-glass">
      <p className="font-size-2 font-bold w-description text-center">{data.title}</p>
      <p className="font-size-4 text-center w-description">{data.desc}</p>
      <div className="flex gap-2 items-center flex-wrap justify-center">
        {skills}
      </div>
    </div>
    <p onClick={() => changeEl("ed")} className="fixed top-10 left-12 text-5xl cursor-pointer nunito font-bold">&lt;</p>
  </div>
}

function App() {
  const[el, setEl] = useState(<Welcome changeEl={changeEl}/>);
  const[prevEl, setPrevEl] = useState(<Welcome changeEl={changeEl}/>);
  const[menuOpen, setMenuOpen] = useState(false);
  const[menuDotHide, setMenuDotHide] = useState("");
  const[menuRotate, setMenuRotate] = useState("");
  const vidRef=useRef();
  useEffect(() => {
    vidRef.current.play();
  }, []);
  function changeEl(param, data){
    switch(param){
      case "menu":
        if(!menuOpen){
          setEl(<Menu changeEl={changeEl}/>);
          setMenuDotHide("opacity-0");
          setMenuRotate("rotate-45");          
        }
        else{
          setEl(prevEl);
          setMenuDotHide("");
          setMenuRotate("");
        }
          setMenuOpen(!menuOpen);
        break;
      case "welcome":setEl(<Welcome changeEl={changeEl}/>);
        setPrevEl(<Welcome changeEl={changeEl}/>);setMenuOpen(false);
        setMenuDotHide("");
        setMenuRotate("");
        break;
      case "projects":setEl(<Projects changeEl={changeEl}/>);
        setPrevEl(<Projects changeEl={changeEl}/>);setMenuOpen(false);
        setMenuDotHide("");
        setMenuRotate("");
        break;
      case "about":setEl(<About/>);
        setPrevEl(<About/>);setMenuOpen(false);
        setMenuDotHide("");
        setMenuRotate("");
        break;
      case "ed":setEl(<Ed changeEl={changeEl}/>);
        setPrevEl(<Ed changeEl={changeEl}/>);setMenuOpen(false);
        setMenuDotHide("");
        setMenuRotate("");
        break;
      case "project":setEl(<Project changeEl={changeEl} data={data}/>);
        setPrevEl(<Project changeEl={changeEl} data={data}/>);setMenuOpen(false);
        setMenuDotHide("");
        setMenuRotate("");
        break;
      case "cert":setEl(<Cert changeEl={changeEl} data={data}/>);
        setPrevEl(<Cert changeEl={changeEl} data={data}/>);setMenuOpen(false);
        setMenuDotHide("");
        setMenuRotate("");
        break;
    }
  }
  return <div className="frame overflow-scroll w-full h-full border-4 border-white flex items-center justify-center">
    <video 
      src={require("./media/bg1.mp4")}
      ref={ vidRef }
      type="video/mp4"
      className="fixed top-0 left-0 w-screen h-screen p-6 object-cover"
      autoPlay muted loop>
    </video>
    <div onClick={() => changeEl("menu")} className={menuRotate + " group fixed top-12 right-12 z-10 flex gap-1 flex-wrap w-10 items-center justify-center cursor-pointer"}>
      <div className={menuDotHide + " menuDot border-2 border-white rounded-full shadow1"}></div>
      <div className="group-hover:bg-white menuDot border-2 border-white rounded-full shadow1"></div>
      <div className={menuDotHide + " menuDot border-2 border-white rounded-full shadow1"}></div>
      <div className="group-hover:bg-white menuDot border-2 border-white rounded-full shadow1"></div>
      <div className="group-hover:bg-white menuDot border-2 border-white rounded-full shadow1"></div>
      <div className="group-hover:bg-white menuDot border-2 border-white rounded-full shadow1"></div>
      <div className={menuDotHide + " menuDot border-2 border-white rounded-full shadow1"}></div>
      <div className="group-hover:bg-white menuDot border-2 border-white rounded-full shadow1"></div>
      <div className={menuDotHide + " menuDot border-2 border-white rounded-full shadow1"}></div>
    </div>
    <div className="fixed bottom-12 right-12 z-1 flex flex-col gap-5 z-10">
      <p onClick={() => window.location = "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzCbfQHRdfpqnGmfGTHsdNMrbvHNRCnKrKKPfnzqWgfpSFvfMBjXxMTlzmGHnPrSvhPrplb"} className="font-size-4 rotate90 cursor-pointer txt-shadow">EMAIL</p>
      <p onClick={() => window.location = "https://www.linkedin.com/in/teo-kocev"} className="font-size-4 rotate90 cursor-pointer txt-shadow">LINKEDIN</p>
    </div>
    {el}
  </div>  
}

export default App;
