import { useEffect, useState } from "react";
import { BASE_URL } from "./api/requests";
import "./App.css";
import Footer from "./ui/footer";
import Header from "./ui/header";

function App() {
  const [songs, setSongs] = useState<Array<any>>([]);

  const getData = async () => {
    const response = await fetch(`${BASE_URL}/albums`);
    const data = await response.json();
    setSongs(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app-container">
      <Header />
      <div className="albums-container">
        <h1 className="albums-title">Albums</h1>
        {songs.map((item, index) => (
          <div className="album-parent" id="isMd">
            <div className="album-card" key={index}>
              <img
                src={`/images/${item?.image}`}
                alt={item?.title}
                className="album-image"
              />
              <h3 className="album-title">{item?.title}</h3>
              <p className="album-description">{item?.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
