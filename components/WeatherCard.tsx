type WeatherCardProps = {
    location: string;
    temperature: number;
    condition: string;
    humidity: number;
};

export default function WeatherCard({ location, temperature, condition, humidity }: WeatherCardProps) {
    return (
        <div className="bg-gray-100 p-6 rounded-xl shadow-lg inline-block">
            <h2 className="text-2xl font-semibold mb-2">{location}</h2>
            <p className="text-lg">Temperature: {temperature}°C</p>
            <p className="text-lg">Condition: {condition}</p>
            <p className="text-lg">Humidity: {humidity}%</p>
        </div>
    );
}
