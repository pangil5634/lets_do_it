import React, { useState } from 'react';

// F1층과 B1층의 위치 정보를 구분
const locationsB1 = {
    A: { x: 50, y: 340 },
    B: { x: 100, y: 350 },
    D: { x: 150, y: 350 },
    C: { x: 170, y: 300 },
    G: { x: 150, y: 270 }
};

const locationsF1 = {
    A: { x: 820, y: 340 },
    B: { x: 790, y: 300 },
    D: { x: 790, y: 300 },
    C: { x: 790, y: 300 },
    G: { x: 790, y: 300 },
};

const RoutePlanner = () => {
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [route, setRoute] = useState([]);
    const [route2, setRoute2] = useState([]);

    const handleStartChange = (event) => {
        setStart(event.target.value.toUpperCase());
    };

    const handleEndChange = (event) => {
        setEnd(event.target.value.toUpperCase());
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const calculatedRoute = calculateRoute(start, end);
        setRoute(calculatedRoute);
        const calculatedRoute2 = calculateRoute2(start, end);
        setRoute2(calculatedRoute2);
    };

    const calculateRoute = (start, end) => {
        // F1층 예제 경로
        return [start, 'B', 'D', 'C', end];
    };

    const calculateRoute2 = (start, end) => {
        // B1층 예제 경로
        return [start, 'B', 'D', 'G', end];
    };

    const drawLine = (x1, y1, x2, y2) => (
        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="black" strokeWidth="2"/>
    );

    return (
        <div>
            <h1>경로 계획</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    출발지:
                    <input type="text" value={start} onChange={handleStartChange}/>
                </label>
                <br/>
                <label>
                    도착지:
                    <input type="text" value={end} onChange={handleEndChange}/>
                </label>
                <br/>
                <button type="submit">경로 계산</button>
            </form>
            {route.length > 0 && (
                <div>
                    <h2>F1층</h2>
                    <div
                        style={{
                            position: 'relative',
                            width: '1000px',
                            height: '500px',
                            border: '1px solid black',
                            marginTop: '20px',
                            backgroundImage: 'url(https://deptmapp.shinsegae.com/cms12/SC00001/guide/floor/__icsFiles/afieldfile/2016/08/24/B1f.jpg)', // 배경 이미지 URL
                            backgroundSize: 'cover'
                        }}>
                        <svg
                            width="100%"
                            height="100%"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0
                            }}>
                            {route.map((location, index) => {
                                const nextLocation = route[index + 1];
                                if (nextLocation) {
                                    const [x1, y1] = [locationsF1[location].x, locationsF1[location].y];
                                    const [x2, y2] = [locationsF1[nextLocation].x, locationsF1[nextLocation].y];
                                    return drawLine(x1, y1, x2, y2);
                                }
                                return null;
                            })}
                        </svg>
                        {route.map((location, index) => (
                            <div
                                key={index}
                                style={{
                                    position: 'absolute',
                                    top: locationsF1[location].y - 10 + 'px',
                                    left: locationsF1[location].x - 10 + 'px',
                                    width: '20px',
                                    height: '20px',
                                    backgroundColor: 'red',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontWeight: 'bold'
                                }}>
                                {location}
                            </div>
                        ))}
                    </div>

                    <h2>B1층</h2>
                    <div
                        style={{
                            position: 'relative',
                            width: '500px',
                            height: '500px',
                            border: '1px solid black',
                            marginTop: '20px',
                            backgroundImage: 'url(https://deptmapp.shinsegae.com/cms12/SC00009/guide/floor/__icsFiles/afieldfile/2019/02/26/0226_APP_3MF_2.jpg)', // 배경 이미지 URL
                            backgroundSize: 'cover'
                        }}>
                        <svg
                            width="100%"
                            height="100%"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0
                            }}>
                            {route2.map((location, index) => {
                                const nextLocation = route2[index + 1];
                                if (nextLocation) {
                                    const [x1, y1] = [locationsB1[location].x, locationsB1[location].y];
                                    const [x2, y2] = [locationsB1[nextLocation].x, locationsB1[nextLocation].y];
                                    return drawLine(x1, y1, x2, y2);
                                }
                                return null;
                            })}
                        </svg>
                        {route2.map((location, index) => (
                            <div
                                key={index}
                                style={{
                                    position: 'absolute',
                                    top: locationsB1[location].y - 10 + 'px',
                                    left: locationsB1[location].x - 10 + 'px',
                                    width: '20px',
                                    height: '20px',
                                    backgroundColor: 'blue',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontWeight: 'bold'
                                }}>
                                {location}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default RoutePlanner;
