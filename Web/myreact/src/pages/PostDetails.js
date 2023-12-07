import React from 'react';
import {useFirebase} from '../App';
import { useParams } from 'react-router-dom';
import { Page } from '../components/Page';

function PostDetails() {
    // Firebase 컨텍스트에서 데이터 가져오기
    const {posts} = useFirebase();

    // URL의 동적 매개변수에서 postId 추출
    const {postId} = useParams();

    // postId에 해당하는 포스트 찾기
    const post = posts.find((p) => p.id === postId);

    if (!post) {
        return <div>포스트를 찾을 수 없습니다.</div>;
    }

    return (
        <Page>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </Page>
    );
}

export default PostDetails;