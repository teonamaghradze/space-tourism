import "./Destination.styles.css";
import moon from "./assets/image-moon.png";
import mars from "./assets/image-mars.png";
import europa from "./assets/image-europa.png";
import titan from "./assets/image-titan.png";
import data from "./data.json";

const destinations = data.destinations;
const destinatImagesData = [moon, mars, europa, titan];

const Destination = ({ switchTab, handleClick }) => {
  return (
    <div className="destination-container">
      <h1>01 PICK YOUR DESTINATION</h1>
      <div className="tab-list">
        {destinations.map((el, i) => {
          return (
            <div key={i}>
              <h1
                className={`${switchTab === i ? "active" : null}`}
                onClick={() => {
                  handleClick(i);
                }}
              >
                {el.name}
              </h1>
            </div>
          );
        })}
      </div>

      {destinations.map((el, i) => {
        return (
          <div key={i} hidden={switchTab !== i}>
            <div className="content-flex">
              <img className="planet-img" alt="" src={destinatImagesData[i]} />
              <div className="destination-content">
                <div className="line">
                  <h1 className="planet-name">{el.name}</h1>
                  <p className="planet-description">{el.description}</p>
                </div>
                <div className="time-container">
                  <div>
                    <p className="distance-font">AVG. DISTANCE</p>
                    <h1 className="numbers">{el.distance}</h1>
                  </div>
                  <div>
                    <p className="time-font">EST. TRAVEL TIME</p>
                    <h1 className="travel"> {el.travel}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Destination;
