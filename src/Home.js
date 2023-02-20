import "./Home.styles.css";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-text">
          <h2
            style={{
              textTransform: "uppercase",
              fontSize: "2rem",
              color: "gray",
            }}
          >
            So, you want to travel to
          </h2>
          <h1
            style={{
              textTransform: "uppercase",
              fontSize: "5rem",
              letterSpacing: "0.6rem",
              marginTop: "1.2rem",
            }}
          >
            space
          </h1>
          <p
            style={{
              marginTop: "1.2rem",
              fontSize: "1.5rem",
              color: "lightgray",
              lineHeight: "2.3rem",
              width: "60%",
            }}
          >
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well, sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <button className="pulse-button btn-explore">explore</button>
      </div>
    </>
  );
};

export default Home;
