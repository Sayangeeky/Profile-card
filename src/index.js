import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css"
function App() {
  return (<div className="card">
    <Avatar />
    <div className="data">
      <Intro />

      <SkillList />
    </div>
  </div>
  )
}

function Avatar() {
  return <img className="avatar" src="sherlock.jpeg" alt="Error" />;
}
function Intro() {
    return (<div>
        <h1>Sherlock Holmes</h1>
        <p>Sherlock Holmes is a fictional detective created by British author Arthur Conan Doyle. Referring to himself as a "consulting detective" in the stories,
             Holmes is known for his proficiency with observation.</p>
    </div>)
}
function SkillList() {
 return(
  <div className="skill-list">
    <Skill skill="React" emoji="💻" color='red' />
    <Skill skill="Javascript" emoji="🤞" color='yellow' />
    <Skill skill="HTML" emoji="🫡" color='orange' />
    <Skill skill="CSS" emoji="👌" color='blue' />
    <Skill skill="TypeScript" emoji="😒" color='grey' />
    <Skill skill="NextJS" emoji="✌️" color='green' />
    <Skill skill="NodeJs" emoji="😎" color='#157894' />
  </div>
 ) 
}
function Skill(props) {
  return (
    <div className="skill" style={{backgroundColor: props.color}}>
      {props.skill}
      {props.emoji}
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
 <StrictMode>
    <App />
  </StrictMode>
  
);
