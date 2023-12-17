import {Page} from "../components/Page";

function MyPage() {
    return (
        <Page alignItems="center">
            <Page
                width="90%"
                backgroundColor="white"
                alignItems="center"
                borderRadius="20px">
                {/* 타이틀 */}
                <h1>마이페이지입니다.</h1>

                {/* 컨텐츠 */}
                <p>내용이 업데이트 될 예정입니다.</p>
            </Page>
        </Page>
    );
}

export default MyPage;