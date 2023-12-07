import {Page} from "../components/Page";
import {useState} from "react";
import {db} from "../firebase";
import {collection, addDoc} from "firebase/firestore";
import {useFirebase} from "../App";
import {Link, useNavigate} from "react-router-dom"; // useNavigate 추가

function AddPage() {
    const {posts, setPosts} = useFirebase();
    const [postData, setPostData] = useState({title: "", content: ""});
    const navigate = useNavigate(); // useNavigate 훅 사용

    const addPost = async () => {
        if (postData.title && postData.content) {
            try {
                const docRef = await addDoc(collection(db, "posts"), postData);
                alert("데이터가 성공적으로 추가되었습니다");

                setPosts([
                    ...posts, {
                        id: docRef.id,
                        ...postData
                    }
                ]);

                // 추가 후 Post 페이지로 이동
                navigate(`/post`);
            } catch (error) {
                console.error("데이터 추가 중 오류 발생:", error);
            }
        } else {
            alert("유효한 데이터가 아닙니다.");
        }
    };

    return (
        <Page>
            등록 페이지입니다.
            <div>
                <label>title:</label>
                <input
                    type="text"
                    name="title"
                    onChange={(e) => setPostData({
                        ...postData,
                        title: e.target.value
                    })}/>
                <br/>
                <label>content :</label>
                <textarea
                    name="content"
                    onChange={(e) => setPostData({
                        ...postData,
                        content: e.target.value
                    })}></textarea>
                <br/>
                <button onClick={addPost}>등록</button>

            </div>
        </Page>
    );
}

export default AddPage;
