"use client";
import { useEffect, useState } from "react";

export default function WeatherPage() {
    const [weather, setWeather] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchWeather() {
            try {
                const res = await fetch(
                    `http://api.weatherstack.com/current?access_key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&query=New York`
                );
                const data = await res.json();
                if (data.error) {
                    setError(data.error.info);
                } else {
                    setWeather(data);
                }
            } catch (err) {
                setError("Failed to fetch weather data.");
            }
        }
        fetchWeather();
    }, []);

    return (
        <div>
            <main className="p-10 text-center">
                <h1 className="text-4xl font-bold mb-6 text-blue-600">Pickleball Weather Info. See the weather at the courts!</h1>

                {error && <p className="text-red-500">{error}</p>}

                {weather ? (
                    <div className="bg-gray-100 p-6 rounded-xl shadow-lg inline-block">
                        <h2 className="text-2xl font-semibold mb-2">{weather.location.name}</h2>
                        <p className="text-lg">Temperature: {weather.current.temperature}°C</p>
                        <p className="text-lg">Condition: {weather.current.weather_descriptions[0]}</p>
                        <p className="text-lg">Humidity: {weather.current.humidity}%</p>
                    </div>
                ) : (
                    !error && <p>Loading weather data...</p>
                )}
            </main>
        </div>
    );
}
