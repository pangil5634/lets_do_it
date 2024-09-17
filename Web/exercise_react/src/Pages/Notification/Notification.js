import {useState} from 'react';
import './Notification.css';

function App() {
    const [inputValue, setInputValue] = useState('');

    // 알림 권한 요청 및 알림 생성
    const sendNotification = () => {
        if (inputValue.trim() === '') {
            alert("알림을 보내기 위해서는 값을 입력해야 합니다."); // 값을 입력하지 않았을 때 경고 메시지
            return;
        }
        Notification
            .requestPermission()
            .then(permission => {
                if (permission === 'granted') {
                    new Notification("📢 React Notification", {
                        body: inputValue, // 입력된 값
                        image: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" // 아이콘 URL (이모지 포함 가능)
                    });
                }
            });
    }

    return (
        <div id="div0">
            <h2>Notification 구현하기</h2>
            <div id="div1">
                <input
                    type="text"
                    placeholder="알림에 표시할 내용을 입력하세요"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}/>
                <button onClick={sendNotification}>알림 보내기</button>
            </div>
        </div>
    );
}

export default App;