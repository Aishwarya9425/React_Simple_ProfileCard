import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="./aish.jpg" alt="Aish" />;
}

function Intro() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Aishwarya J </h1>
      <p className="data">
        Hello! I have 6+ handson experience as a MERN stack developer with basic
        DevOps CICD handson When I dont code, well I sleep..like a LOT haha. I
        dance, watch movies, true crime docs, I swim . Waiting for the day to
        see northern light with my hard earned money 🌠😍
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="✅Html5" color="blue" />
      <Skill name="✅CSS3" color="yellow" />
      <Skill name="✅Javascript" color="red" />
      <Skill name="✅Node" color="orange" />
      <Skill name="✅Express" color="green" />
      <Skill name="✅Mongo" color="pink" />
      <Skill name="✅SQL" color="navy" />
      <Skill name="✅Angular" color="purple" />
      <Skill name="✅DevOps CICD" color="gray" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.name}</span>
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
