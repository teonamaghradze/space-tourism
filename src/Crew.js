import data from "./data.json";
import "./Crew.styles.css";
import douglas from "./assets/image-douglas-hurley.png";
import mark from "./assets/image-mark-shuttleworth.png";
import victor from "./assets/image-victor-glover.png";
import anou from "./assets/image-anousheh-ansari.png";

const crewData = data.crew;
const crewImages = [douglas, mark, victor, anou];

const Crew = ({ switchTab, handleClick }) => {
  return (
    <div className="crew-container">
      <h1 style={{ margin: "10rem 0 5rem 0" }}>02 MEET YOUR CREW</h1>

      {crewData.map((crew, i) => {
        return (
          <div key={i} hidden={switchTab !== i ? "active" : null}>
            <img className="crew-img" alt="crew members" src={crewImages[i]} />
            <h3 style={{ textTransform: "uppercase", fontSize: "1.7rem" }}>
              {crew.role}
            </h3>
            <h1 className="crew-name">{crew.name}</h1>
            <p className="bio">{crew.bio}</p>
          </div>
        );
      })}

      <div>
        {crewData.map((el, i) => {
          return (
            <button
              key={i}
              className={`crew-btns ${switchTab !== i ? "active-btn" : null}`}
              onClick={() => {
                handleClick(i);
              }}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default Crew;
