/* eslint-disable */

import logo from './logo.svg';
import './App.css'; // css파일 import
import {useState} from 'react';

function App() {

    let post = '강남 우동 맛집!'; // 자료를 잠깐 저장할 때는 변수를 사용
    let [title, changeTitle] = useState(['남자 코트 추천', '남자 상의 추천', '남자 하의 추천']);
    let [date, c] = useState(['2월 7일 발행', '2월 8일 발행', '2월 9일 발행']);
    let [heart, changeHeart] = useState(0);
    // a -> '남자 코드 추천' b -> state 변경을 도와주는 함수

    function addHeart() {
        changeHeart(heart++)
    }
    function changeGender() {

        let copy = [...title];
        copy[0] = '여자 코트 추천';
        copy[1] = '여자 상의 추천';
        copy[2] = '여자 하의 추천';
        changeTitle(copy);
    }
    function titleSorting() {
        let copy = [...title];
        copy.sort();
        changeTitle(copy);
    }

    return (
        <div className="App">
            <div className="black-nav">
                <h4>ReactBlog</h4>
            </div>

            <button className="button1" onClick={changeGender}>여자로 변경</button>
            <button className="button1" onClick={titleSorting}>가나다순으로 정렬</button>
            <div className="list">
                <h4>{title[0]}
                    <span onClick={addHeart}>
                        &nbsp;❤️&nbsp;
                    </span>
                    <span>
                        {heart}
                    </span>
                </h4>
                <p>{date[0]}</p>
            </div>

            <div className="list">
                <h4>{title[1]}
                    <span onClick={addHeart}>
                        &nbsp;❤️&nbsp;
                    </span>
                    <span>
                        {heart}
                    </span>
                </h4>
                <p>{date[1]}</p>
            </div>
            <div className="list">
                <h4>{title[2]}
                    <span onClick={addHeart}>
                        &nbsp;❤️&nbsp;
                    </span>
                    <span>
                        {heart}
                    </span>
                </h4>
                <p>{date[2]}</p>
            </div>
            <h4>{post}</h4>
        </div>
    );
}

export default App;
