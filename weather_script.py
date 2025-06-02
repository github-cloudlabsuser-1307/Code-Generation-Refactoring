import requests
import os

def fetch_weather(api_key, city):
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"
    response = requests.get(url)
    response.raise_for_status()
    return response.json()

if __name__ == "__main__":

    API_KEY = os.getenv("OPENWEATHER_API_KEY")  # Set your API key as an environment variable
    CITY = "London"

    if not API_KEY:
        print("Please set the OPENWEATHER_API_KEY environment variable.")
    else:
        try:
            weather = fetch_weather(API_KEY, CITY)
            print(f"Weather in {CITY}: {weather['weather'][0]['description'].capitalize()}")
            print(f"Temperature: {weather['main']['temp']}°C")
        except Exception as e:
            print(f"Error fetching weather data: {e}")