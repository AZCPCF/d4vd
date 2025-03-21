import { Grid, Link, Skeleton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { API, skeleton } from "./config";
import AlbumCard from "./ui/components/AlbumCard";
import Header from "./ui/components/Header";
import { MuiThemeProvider } from "./ui/theme"; // Fixed typo here
import AlbumCardSkeleton from "./ui/components/AlbumSkeleton";

const App = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [songs, setSongs] = useState([]);
  const getData = async () => {
    setLoading(true);
    const albums = await (await fetch(`${API.url}/albums`)).json();
    setAlbums(albums);
    const songs = await (await fetch(`${API.url}/songs`)).json();
    setSongs(songs);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <MuiThemeProvider>
      <Header />
      <Grid container mt={10} p={{ sm: 3, xs: 2 }}>
        <Grid
          item
          xs={12}
          py={1}
          pt={2}
          sx={{ pr: { sm: 1 } }}
          container
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
            }}
          >
            Albums
          </Typography>
          <Link href="/albums">more</Link>
        </Grid>
        {loading
          ? Array.from({ length: skeleton.home.count }).map((_, index) => (
              <Grid
                item
                lg={12 / 5}
                md={12 / 4}
                sm={12 / 3}
                py={{ sm: 0, xs: 1 }}
                p={{ sm: 1 }}
                xs={12}
                key={index}
              >
                <AlbumCardSkeleton />
              </Grid>
            ))
          : albums
              ?.filter((_, index) => index <= 4)
              ?.map((item, index) => (
                <Grid
                  item
                  lg={12 / 5}
                  md={12 / 4}
                  sm={12 / 3}
                  py={{ sm: 0, xs: 1 }}
                  p={{ sm: 1 }}
                  xs={12}
                  key={index}
                >
                  <AlbumCard
                    title={item?.title}
                    description={item?.description}
                    image={item?.image}
                  />
                </Grid>
              ))}
        <Grid
          item
          xs={12}
          py={1}
          pt={8}
          sx={{ pr: { sm: 1 } }}
          container
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
            }}
          >
            Songs
          </Typography>
          <Link href="/songs">more</Link>
        </Grid>
        {loading
          ? Array.from({ length: skeleton.home.count }).map((_, index) => (
              <Grid
                item
                lg={12 / 5}
                md={12 / 4}
                sm={12 / 3}
                py={{ sm: 0, xs: 1 }}
                p={{ sm: 1 }}
                xs={12}
                key={index}
              >
                <AlbumCardSkeleton />
              </Grid>
            ))
          : songs
              ?.filter((_, index) => index <= 4)
              ?.map((item, index) => (
                <Grid
                  item
                  lg={12 / 5}
                  md={12 / 4}
                  sm={12 / 3}
                  py={{ sm: 0, xs: 1 }}
                  p={{ sm: 1 }}
                  xs={12}
                  key={index}
                >
                  <AlbumCard
                    title={item?.title}
                    description={item?.description}
                    image={item?.image}
                  />
                </Grid>
              ))}
      </Grid>
    </MuiThemeProvider>
  );
};

export default App;
