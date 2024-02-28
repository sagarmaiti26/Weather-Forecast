import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./infoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import CloudIcon from "@mui/icons-material/Cloud";
export default function InfoBox({ info }) {
  let HAZY_URL =
    "https://images.unsplash.com/photo-1634642007298-2a2c315422e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HOT_URL =
    "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VtbWVyfGVufDB8fDB8fHww";
  const COLD_URL =
    "https://plus.unsplash.com/premium_photo-1671127302439-a05f49dd5171?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAINY_URL =
    "https://images.unsplash.com/photo-1619260584294-8a4e63f5ade5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="infoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAINY_URL
                : info.temp > 30
                ? HOT_URL
                : info.temp > 18
                ? HAZY_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 30 ? (
                <WbSunnyIcon />
              ) : info.temp > 18 ? (
                <CloudIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <div>
                Temperature={info.temp}&deg;C : Humidity={info.humidity}%
              </div>

              <div>
                Today's High={info.maxTemp}&deg;C : Today's Low={info.minTemp}
                &deg;C{" "}
              </div>

              <div>
                Today's Weather Can Be Described as {info.weather} and Feels
                Like: {info.feelsLike}&deg;C
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
