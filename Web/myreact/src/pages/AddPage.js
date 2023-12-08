// react import
import {useState} from "react";
import {useNavigate} from "react-router-dom"; // useNavigate 추가
// 컴포넌트 import
import {Page, Label, Input, Textarea, MyButton} from "../components/Page";
// firebase improt
import {db} from "../firebase";
import {collection, addDoc} from "firebase/firestore";
import {useFirebase} from "../App";

function AddPage() {
    const {posts, setPosts} = useFirebase(); // post 변수 선언
    const [postData, setPostData] = useState({title: "", content: ""}); // 새로 추가할 newPost 변수 선언
    const navigate = useNavigate(); // useNavigate 훅 사용

    // newPost를 add하는 핸들러
    const addPost = async () => {
        if (postData.title && postData.content) { // title과 content가 둘 다 있을 경우에만 등록 가능
            try {
                const docRef = await addDoc(collection(db, "posts"), postData); // posts 컬렉션에 postData를 add한다.
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
            <h1>등록 페이지입니다.</h1>
            <div>
                <div>
                    <Label fontSize = "20px" fontWeight = "bold" color = "black">title</Label><br/>
                    <Input
                        fontSize="15px"
                        width = "80vw"
                        type="text"
                        name="title"
                        margin="10px 0px"
                        placeholder="ex) 타이틀 입력하기"
                        onChange={(e) => setPostData({
                            ...postData,
                            title: e.target.value
                        })}/>
                </div>
                <br/>
                <div>
                    <Label fontSize = "20px" fontWeight = "bold" color = "black">content</Label><br/>
                    <Textarea
                        fontSize="15px"
                        width = "80vw"
                        name="content"
                        placeholder="ex) 컨텐츠 입력하기"
                                                margin = "10px 0px"
                        onChange={(e) => setPostData({
                            ...postData,
                            content: e.target.value
                        })}></Textarea>
                </div>
                <br/>
                <MyButton
                    width="100px"
                    fontSize="15px"
                    fontWeight="bold"
                    onClick={addPost}>등록</MyButton>

            </div>
        </Page>
    );
}

export default AddPage;
