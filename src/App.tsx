import image from "../public/image.png";
import Footer from "./ui/footer";
import Header from "./ui/header";
import "./App.css";
const cards = [
  {
    title: "test",
    image,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, distinctio.",
  },
  {
    title: "test",
    image,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, distinctio.",
  },
  {
    title: "test",
    image,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, distinctio.",
  },
  {
    title: "test",
    image,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, distinctio.",
  },
];
function App() {
  return (
    <div style={{ width: "100%" }}>
      <Header />
      <div style={{ padding: "20px", display: "flex", flexWrap: "wrap" }}>
        <h1 style={{ width: "100%" }}>albums</h1>
        {cards?.map(({ description, image, title }, index) => (
          <div style={{ padding: "20px" }} id="isMd" key={index}>
            <div
              style={{
                width: "100%",
                height: "300px",
                borderRadius: "8px",
                display: "flex",
                boxShadow: "-1px 2px 3px 1px #8f8d8d31;",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                flexDirection: "column",
                border: "1px solid gray",
                textAlign: "center",
              }}
            >
              <img src={image} style={{ width: "90%" }} />
              <h3>{title}</h3>
              <p style={{ width: "100px", overflow: "hidden", height: "20px" }}>
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: "20px", display: "flex", flexWrap: "wrap" }}>
        <h1 style={{ width: "100%" }}>songs</h1>
        {cards?.map(({ description, image, title }, index) => (
          <div style={{ padding: "20px" }} id="isMd" key={index}>
            <div
              style={{
                width: "100%",
                height: "300px",
                borderRadius: "8px",
                display: "flex",
                boxShadow: "-1px 2px 3px 1px #8f8d8d31;",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                flexDirection: "column",
                border: "1px solid gray",
                textAlign: "center",
              }}
            >
              <img src={image} style={{ width: "90%" }} />
              <h3>{title}</h3>
              <p style={{ width: "100px", overflow: "hidden", height: "20px" }}>
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
