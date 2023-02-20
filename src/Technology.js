import data from "./data.json";
import "./Technology.styles.css";
import launch from "./assets/image-launch-vehicle-portrait.jpg";
import spaceport from "./assets/image-spaceport-portrait.jpg";
import spacecapsule from "./assets/image-space-capsule-portrait.jpg";

const techData = data.technology;
console.log(techData);
const techImages = [launch, spaceport, spacecapsule];

const Technology = ({ switchTab, handleClick }) => {
  return (
    <div className="technology-container">
      <h1>03 SPACE LAUNCH 101</h1>
      <div className="flex-content">
        <div className="btns-container">
          {techData.map((tech, i) => {
            return (
              <button
                key={i}
                onClick={() => {
                  handleClick(i);
                }}
                className={`tech-btns ${switchTab === i ? "active-btn" : null}`}
                // className="tech-btns"
              >
                {i + 1}
              </button>
            );
          })}
        </div>

        <div>
          {techData.map((tech, i) => {
            return (
              <div hidden={switchTab !== i} key={i}>
                <div className="flex-content">
                  <div>
                    <h3
                      style={{
                        fontSize: "2rem",
                        marginBottom: "2rem",
                        marginTop: "2rem",
                      }}
                    >
                      THE TERMINOLOGY...
                    </h3>
                    <h1
                      style={{
                        textTransform: "uppercase",
                        fontSize: "4rem",
                        width: "20rem",
                      }}
                    >
                      {tech.name}
                    </h1>
                    <p
                      style={{
                        fontSize: "1.4rem",
                        lineHeight: "1.9rem",
                        width: "80%",
                        marginTop: "2rem",
                      }}
                    >
                      {tech.description}
                    </p>
                  </div>
                  <img style={{ width: "44rem" }} alt="" src={techImages[i]} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Technology;
