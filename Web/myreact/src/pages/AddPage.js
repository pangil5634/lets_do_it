// react import
import {useState} from "react";
import {useNavigate} from "react-router-dom"; // useNavigate 추가
// 컴포넌트 import
import {Page, Label, Input, Textarea, MyButton} from "../components/Page";
import ImageUpload from "../components/ImageUpload";
// firebase improt
import {db} from "../firebase";
import {collection, addDoc} from "firebase/firestore";
import {useFirebase} from "../App";

function AddPage() {
    const {posts, setPosts} = useFirebase(); // post 변수 선언
    const [postData, setPostData] = useState({title: "", content: ""}); // 새로 추가할 newPost 변수 선언
    const navigate = useNavigate(); // useNavigate 훅 사용
    const [imageUrl, setImageUrl] = useState(''); // 이미지 URL 상태 추가

    // 이미지 업로드 후 호출될 함수
    const handleImageUpload = (url) => {
        setImageUrl(url);
    };

    // newPost를 add하는 핸들러
    const addPost = async () => {
        if (postData.title && postData.content && imageUrl) {
            try {
                const docRef = await addDoc(collection(db, "posts"), {
                    ...postData,
                    imageUrl: imageUrl, // 이미지 URL 추가
                });

                alert("데이터가 성공적으로 추가되었습니다");

                setPosts([
                    ...posts, {
                        id: docRef.id,
                        ...postData,
                        imageUrl: imageUrl
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
            {/* 타이틀 */}
            <h1>등록 페이지입니다.</h1>


            <div>

                {/* 타이틀 입력하는 부분 */}
                <div>
                    <Label fontSize="20px" fontWeight="bold" color="black">title</Label><br/>
                    <Input
                        fontSize="15px"
                        width="80vw"
                        type="text"
                        name="title"
                        margin="10px 0px"
                        placeholder="ex) 타이틀 입력하기"
                        onChange={(e) => setPostData({
                            ...postData,
                            title: e.target.value
                        })}/>
                </div>
                <br />
                
                {/* 컨텐츠 입려하는 부분 */}
                <div>
                    <Label fontSize="20px" fontWeight="bold" color="black">content</Label><br/>
                    <Textarea
                        fontSize="15px"
                        width="80vw"
                        name="content"
                        placeholder="ex) 컨텐츠 입력하기"
                        margin="10px 0px"
                        onChange={(e) => setPostData({
                            ...postData,
                            content: e.target.value
                        })}></Textarea>
                </div>

                {/* 이미지 입력하는 부분 */}
                <div>
                    <Label fontSize="20px" fontWeight="bold" color="black">content</Label><br/>
                    <ImageUpload onImageUpload={handleImageUpload}/>
                </div>
                {imageUrl &&
                    <img src={imageUrl} alt="이미지" style={{
                                                    maxWidth: '300px',
                                                    borderRadius : "15px"
                                                }}/>
                }
                <br />
                <br />
                
                {/* 등록 버튼 */}
                <MyButton width="100px" fontSize="15px" fontWeight="bold" onClick={addPost}>등록</MyButton>

            </div>
        </Page>
    );
}

export default AddPage;
