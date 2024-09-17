import axios from "axios";
import {useEffect, useState} from "react";

function FrontBackTest() {
    const [postDataList, setPostDataList] = useState([]);
    const [newPost, setNewPost] = useState({title: '', content: ''});

    // 데이터 가져오기 함수
    const getPostData = async () => {
        try {
            const response = await axios.get("http://3.36.115.5:8080/posts");
            setPostDataList(response.data);
            console.log("[success] getPostData()");
        } catch (error) {
            console.log("[get error] getPostData()");
        }
    };

    // 데이터 추가 함수
    const postPostData = async () => {
        try {
            const response = await axios.post("http://3.36.115.5:8080/posts", newPost);
            setPostDataList(prevList => [
                ...prevList,
                response.data
            ]); // 새로 추가된 데이터 추가
            setNewPost({title: '', content: ''}); // 입력 필드 초기화
            alert("데이터 추가 완료");
            console.log("[success] postPostData()");
        } catch (error) {
            console.log("[post error] postPostData()");
        }
    };

    // 입력 필드 변화 핸들러
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setNewPost(prevPost => ({
            ...prevPost,
            [name]: value
        }));
    };

    // 컴포넌트 마운트 시 데이터 로드
    useEffect(() => {
        getPostData();
    }, []); // 빈 배열로 설정하여 처음 로드 시 한 번만 실행

    return (
        <div>
            {
                postDataList.map(
                    (postData, index) => (<div key={index}>
                        {postData.id}
                        {postData.title}
                        {postData.content}
                    </div>)
                )
            }

            <input
                type="text"
                name="title"
                value={newPost.title}
                placeholder="title"
                onChange={handleInputChange}/>
            <br/>
            <input
                type="text"
                name="content"
                value={newPost.content}
                placeholder="content"
                onChange={handleInputChange}/>
            <br/>
            <button onClick={postPostData}>
                추가
            </button>
        </div>
    );
}

export default FrontBackTest;