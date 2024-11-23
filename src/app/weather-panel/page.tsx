import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Droplets, Sun } from "lucide-react";

export default function WeatherPanel() {
  return (
    <Card className="max-w-md mx-auto mt-10">
      <CardHeader>
        <CardTitle className="text-center">London Weather</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <div className="text-4xl font-bold">18°C</div>
          <div className="flex items-center">
            <Cloud className="mr-2" />
            <Sun className="text-yellow-400" />
          </div>
        </div>
        <p className="mt-4">Partly cloudy</p>
        <div className="mt-4 flex items-center">
          <Droplets className="mr-2" />
          <span>Humidity: 65%</span>
        </div>
      </CardContent>
    </Card>
  );
}
