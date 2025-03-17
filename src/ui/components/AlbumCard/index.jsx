import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function AlbumCard({ image, title, description }) {
  return (
    <Card
      sx={{ width: "100%", height: "100%", backgroundColor: "primary.dark" }}
    >
      <CardActionArea sx={{ minHeight: "100%" }}>
        <img
          src={`/images/${image}`}
          alt={title}
          width={"100%"}
          height={"100%"}
          style={{ objectFit: "cover" }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              width: "100%",
              height: "40px",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              width: "100%",
              height: "40px",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
