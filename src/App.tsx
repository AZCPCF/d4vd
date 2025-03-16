import { Fragment, useEffect, useState } from "react";
import { BASE_URL } from "./api/requests";
import "./App.css";
import Footer from "./ui/footer";
import Header from "./ui/header";
import Loading from "./ui/Loading";

function App() {
  const [songs, setSongs] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const getData = async () => {
    setLoading(true);
    const response = await fetch(`${BASE_URL}/albums`);
    const data = await response.json();
    setSongs(data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (showMore) {
      const top =
        document?.getElementsByClassName("albums-container")[0].clientHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, [showMore]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="app-container">
          <Header />
          <div className="albums-container">
            <h1 className="albums-title">Albums</h1>
            {songs.map((item, index) => {
              const shouldDisplay =
                showMore || index < 4 || window.innerWidth >= 900;

              return (
                <Fragment key={index}>
                  {shouldDisplay && (
                    <div className="album-parent" id="isMd">
                      <div className="album-card">
                        <img
                          src={`/images/${item?.image}`}
                          alt={item?.title}
                          className="album-image"
                        />
                        <h3 className="album-title">{item?.title}</h3>
                        <p className="album-description">{item?.description}</p>
                      </div>
                    </div>
                  )}
                </Fragment>
              );
            })}
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                padding: "20px 0",
              }}
            >
              {window.innerWidth < 900 && (
                <button
                  style={{ width: "150px" }}
                  onClick={() => {
                    setShowMore(!showMore);
                  }}
                >
                  {showMore ? "Show Less" : "Show More"}
                </button>
              )}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
