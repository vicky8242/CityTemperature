import React, { useEffect, useState } from 'react'

const TempApp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("mumbai")

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=de2536f0b9c9e68d623b6f3f913a3c8d`
            const respose = await fetch(url);
            const resJson = await respose.json();
            console.log(resJson);
            setCity(resJson.main,"HEKKK");

        };
        fetchApi();
    }, [search])
    return (
        <>
            <div className="div-container">


                <div className="items-container">
                    <div className="input-div">
                        <input onChange={(event) => {
                            return setSearch(event.target.value);
                        }} placeholder="Type City Name"></input>
                    </div>

                    {!city ? (
                        <p>no data found</p>
                    ) : (
                        <div className="city-temp">
                            <div className="city-name">
                                <h2> {search}</h2>
                            </div>
                            <div><h1>{city.temp}°C</h1></div>
                            <p>Min:{city.temp_min}°C/Max:{city.temp_max}°C </p>
                        </div>
                    )

                    }
                </div>
            </div>
        </>
    )

}

export default TempApp;