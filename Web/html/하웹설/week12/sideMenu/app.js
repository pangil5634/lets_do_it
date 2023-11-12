// 변수 선언
var menu = $('#sidemenu li');
var content = $('#content');

// li 태그인 menu를 클릭했을 때 발생할 event
menu.click(function (event) {
    // 클릭한 메뉴의 페이지를 보여주기 위한 변수 선언
    var url = event.target.innerText + '.html';

    // ajax 실행
    $
        .ajax(url)
        .done(function (html) {
            //  성공 시 실행할 코드
            content.html(html);
        });

    
});



// .fail(function (error) {          실패시 실행할 코드         console.log("에러 발생");
// })     .always(function(){          항상 실행할 코드         console.log("ajax 호출이
// 완료되면 실행됩니다.");     }) console.log("AJAX 호출은 비동기 방식입니다.");