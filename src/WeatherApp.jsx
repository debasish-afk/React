import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  let [info, setInfo] = useState({
    // city: "Baripada",
    // temp: 17,
    // tempMin: 16,
    // tempMax: 15,
    // humidity: 28,
    // pressure: 56,
    // feelsLike: 67,
    // weather: "Cloudy",
  });
  let updateInfo = (result)=>{
    setInfo(result);
  }
  return (
    <div>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={info} />
    </div>
  );
}
