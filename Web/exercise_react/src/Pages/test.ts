// App.js
import React, {useEffect, useState} from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// 기본 마커 아이콘 수정 (기본 아이콘을 제공하지 않음)
delete L.Icon.Default.prototype._getIconUrl;
L
    .Icon
    .Default
    .mergeOptions(
        {iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png', iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png', shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'}
    );

function Map() {
    // // const position = [37.5665, 126.9780];  서울 시청 좌표
    // const position = [35.865496405, 128.593444283];
    // const exits = [
    //     { name: '1번 출구', position: [35.865697, 128.594356] },
    //     { name: '2번 출구', position: [35.865807, 128.594712] },
    //     { name: '3번 출구', position: [35.865929, 128.595051] },
    //     { name: '4번 출구', position: [35.866170, 128.595401] },
    //     { name: '5번 출구', position: [35.866330, 128.595102] },
    //     { name: '6번 출구', position: [35.866120, 128.594635] },
    //     { name: '7번 출구', position: [35.865975, 128.594314] },
    //     { name: '8번 출구', position: [35.865839, 128.594005] },
    // ];

    // return (
    //     <div style={{
    //             height: "100vh"
    //         }}>
    //         <MapContainer
    //             center={position}
    //             zoom={13}
    //             style={{
    //                 height: "100%"
    //             }}>
    //             <TileLayer
    //                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/> {/* <Marker position={position}>
    //                 <Popup>
    //                     서울 시청입니다.
    //                 </Popup>
    //             </Marker> */
    //             }
    //             {
    //                 exits.map((exit, index) => (
    //                     <Marker key={index} position={exit.position}>
    //                         <Popup>{exit.name}</Popup>
    //                     </Marker>
    //                 ))
    //             }
    //         </MapContainer>
    //     </div>
    // );

    const [location, setLocation] = useState({latitude: null, longitude: null});
    const [weather, setWeather] = useState(null);
    const apiKey = "bfa478154b5ee33013cfe3c19f7bc878";
    useEffect(() => {
        if (navigator.geolocation) {
            navigator
                .geolocation
                .getCurrentPosition((position) => {
                    setLocation(
                        {latitude: position.coords.latitude, longitude: position.coords.longitude}
                    );
                });
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    }, []);
    useEffect(() => {
        if (location.latitude && location.longitude) {
            fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${apiKey}&units=metric`
            )
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setWeather(data);
                })
                .catch((error) => {
                    console.error('Error fetching the weather data:', error);
                });
        }
    }, [location]);

    return (
        <div>
            <h1>현재 위치의 날씨</h1>
            {
                location.latitude && location.longitude
                    ? (<p>
                        위도: {location.latitude}, 경도: {location.longitude}
                    </p>)
                    : (<p>위치 정보를 얻고 있습니다...</p>)
            }
            {
                weather
                    ? (
                        <div>
                            <p>온도: {weather.main.temp}°C</p>
                            <p>날씨: {
                                    weather
                                        .weather[0]
                                        .description
                                }</p>
                        </div>
                    )
                    : (<p>날씨 정보를 불러오는 중입니다...</p>)
            }
        </div>
    );
}

export default Map;


