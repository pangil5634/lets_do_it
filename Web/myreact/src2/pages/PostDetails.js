// PostDeatils.js 파일
import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {useFirebase} from '../App';
import {Img, Input, MyButton, Page} from '../components/Page';
import {Div} from '../components/Menubar';
import {P} from '../components/Heading';

function PostDetails() {
    // Firebase 컨텍스트에서 데이터 가져오기
    const {posts} = useFirebase();

    // URL의 동적 매개변수에서 postId 추출
    const {postId} = useParams();

    // postId에 해당하는 포스트 찾기
    const post = posts.find((p) => p.id === postId);

    const [comment, setComment] = useState('');
    const [commentList, setCommentList] = useState([]);

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleAddComment = () => {
        if (comment.trim() !== '') {
            setCommentList([
                ...commentList,
                comment
            ]);
            setComment(''); // 댓글 추가 후 텍스트 필드 초기화
        }
    };
    const handleKeyDown = (e) => {
        // 엔터 키를 눌렀을 때 댓글 추가
        if (e.key === 'Enter') {
            handleAddComment();
        }
    };

    if (!post) {
        return <div>포스트를 찾을 수 없습니다.</div>;
    }

    return (
        <Page height="100vh" alignItems="center">
            <Page
                width="90%"
                backgroundColor="white"
                alignItems="center"
                flexDirection="row"
                borderRadius="20px"
                height="100%">
                <Div
                    className="content"
                    flexDirection="column"
                    width="75%"
                    height="100%"
                    backgroundColor="#B2A59B"
                    borderRadius="15px"
                    margin="0px 15px 0px 0px">
                    {/* 게시글 제목 */}
                    <P fontSize="30px" fontWeight="bold">{post.title}</P>

                    {/* 게시글 내용 */}
                    <P>{post.content}</P>

                    {/* 게시글 이미지 */}
                    {
                        post.imageUrl && (
                            <Div width="50%">
                                <Img
                                    width="100%"
                                    borderRadius="30px"
                                    blur={true}
                                    widthOnMobile="100%"
                                    src={post.imageUrl}
                                    alt="Post"/>
                            </Div>
                        )
                    }
                </Div>
                <Div
                    classNAme="comments"
                    flexDirection="column"
                    width="25%"
                    height="100%"
                    backgroundColor="#607274"
                    borderRadius="15px">
                    <P fontSize="20px" fontWeight="bold">댓글</P>
                    <Div
                        width="95%"
                        backgroundColor="gray"
                        justifyContent="space-around"
                        borderRadius="15px">
                        <Input
                            width="80%"
                            height="40px"
                            borderRadius="10px"
                            fontSize="inherit"
                            onChange={handleCommentChange}
                            onKeyDown={handleKeyDown}
                            value={comment}></Input>
                        <MyButton onClick={handleAddComment} margin="20px 0px" fontSize="inherit">추가</MyButton>

                    </Div>

                    {/* 댓글 목록 출력 */}
                    <Div flexDirection="column" padding="10px" alignItems="start" width="100%">
                        {
                            commentList.map((comment, index) => (
                                <Div
                                    width="100%"
                                    backgroundColor="white"
                                    margin="5px 0px"
                                    borderRadius="10px"
                                    padding="5px">
                                    <P key={index} color="black" fontWeight="bold">{comment}</P>
                                </Div>
                            ))
                        }
                    </Div>
                </Div>
            </Page>
        </Page>
    );
}

export default PostDetails;
