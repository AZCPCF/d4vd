import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function AlbumCard({ image, title, description }) {
  return (
    <Card sx={{ width: "100%",height:'100%'}}>
      <CardActionArea sx={{minHeight:'100%'}}>
        <img src={`/images/${image}`}
        alt={title}
        width={'100%'}
        height={'100%'}
        style={{objectFit:'contain'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
