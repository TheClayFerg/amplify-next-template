"use client";
import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import WeatherCard from "../../components/WeatherCard";

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
                <h1 className="text-4xl font-bold mb-6 text-blue-600">Weather Info</h1>

                {error && <p className="text-red-500">{error}</p>}

                {weather && (
                    <WeatherCard
                        location={weather.location.name}
                        temperature={weather.current.temperature}
                        condition={weather.current.weather_descriptions[0]}
                        humidity={weather.current.humidity}
                    />
                )}
            </main>
        </div>
    );
}
