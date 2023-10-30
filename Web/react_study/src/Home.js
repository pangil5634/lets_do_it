import {useState} from 'react';

function Home() {
    const [age, setAge] = useState(1);
    return (<div>나이 : {age}</div>);

}

export default Home;