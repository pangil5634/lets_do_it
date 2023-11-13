// 변수 선언
var dict = $('#myul');
var title = $('h2');
var p = $('p');

// ajax call
$
    .getJSON('dict.json') // dict.json 파일로부터 JSON을 get한다.
    .done(function (data) { // ajax가 실행되면 Call되는 부분
        for (let word of data) { // 읽어들인 데이터 중 하나씩 사용
            // 삽입할 태그 꾸미기
            var li = $('<li></li>'); // html 태그 생성
            li.text(word.title); // li 태그의 text를 word.title로 설정
            li.data('word', word); // li 태그의 'word'라는 data를 word 자체로 설정

            li.click(function (event) { // li 태그를 클릭했을 때 발행하는 이벤트
                var el = $(event.target); // event가 발생된 태그의 target

                // 데이터 찾고 할당하기
                var word1 = el.data('word'); // el이라는 target의 'word'라는 data를 word1 변수에 할당
                title.text(word1.title); // word1의 title을 h2태그(title)의 text로 설정
                p.text(word1.description); // word1의 description을 p태그(p)의 text로 설정
            });
            dict.append(li);
        }
    });