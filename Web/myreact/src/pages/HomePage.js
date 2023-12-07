import React from 'react';
import { Page } from '../components/Page';
import { useFirebase } from '../App'; // App 컴포넌트에서 만든 useFirebase 커스텀 훅을 가져옴


function Home() {
  // useFirebase 훅을 사용하여 Firebase 데이터에 접근

  return (
    <Page>
      <h1>김광일의 사이트에 오신 것을 환영합니다.</h1>
      <p>상단에 있는 MenuBar를 통해서 다양한 페이지에 접근 가능합니다.</p>

    </Page>
  );
}

export default Home;
