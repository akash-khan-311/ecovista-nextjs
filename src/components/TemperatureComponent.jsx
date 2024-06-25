import { getTemperature } from "@/lib/weather-info";
import Card from "./Card";
import Image from "next/image";

const TemperatureComponent = async ({ lat, lon }) => {
  const { temp, feels_like } = await getTemperature(lat, lon);
  console.log()
  return (
    <Card>
      <h6 className="feature-name">Current Temperature</h6>
      <div className="feature-main">
        <Image width={80} height={80} 
          className="max-w-20"
          src="/icons/icon_tempareture.png"
          alt="rain icon"
        />
        <h3 className="feature-title">{Math.round(temp)}°C</h3>
        <span className="feature-name">Feels Like {Math.round(feels_like)}°C</span>
      </div>
    </Card>
  );
};
export default TemperatureComponent;
