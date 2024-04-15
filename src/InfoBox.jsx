import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({info}) {
  const weatherImage =
    "https://images.unsplash.com/photo-1561470508-fd4df1ed90b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb2R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  
  return (
    <div className="InfoBox">
      <h1>Weather info</h1>
      <div className="CardCompnent">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={weatherImage}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div>Temperature = {info.temp}</div>
            <div>Min temp = {info.tempMin}</div>
            <div>Max temp = {info.tempMax}</div>
            <div>Humidity = {info.humidity}</div>
            <div>Pressure = {info.pressure}</div>
            <div>FeelsLike = {info.feelsLike}</div>
            <div>Weather = {info.weather}</div>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      </div>
    </div>
  );
}
