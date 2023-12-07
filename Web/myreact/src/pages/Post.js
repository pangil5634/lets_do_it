import React from 'react';
import { Page } from '../components/Page';
import { useFirebase } from '../App'; // App 컴포넌트에서 만든 useFirebase 커스텀 훅을 가져옴
import { Link } from 'react-router-dom';
import { H2 } from "../components/Heading";

function Home() {
  // useFirebase 훅을 사용하여 Firebase 데이터에 접근
  const { posts } = useFirebase();

  return (
    <Page>
      <h1>Post 페이지입니다.</h1>
      
      {/* posts 배열을 사용하여 데이터를 렌더링 */}
      {posts.map((post) => (
        <div key={post.id}>
         {/* Link 컴포넌트를 사용하여 페이지 이동 */}
          <Link to={`/post/${post.id}`}>
            <H2 hoverColor = "skyblue">{post.title}</H2>
          </Link>
          {/* <p>{post.content}</p> */}
        </div>
      ))}
    </Page>
  );
}

export default Home;
