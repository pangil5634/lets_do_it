var todos = {}; // todos 라는 JSON 변수를 선언
// todos 에는 할 일의 내용이 Key로, 완료 여부를 나타내는 true/false 값이 value로 저장될 것 입니다. 추가 버튼 클릭
// 시 발생하는 이벤트
$("#addButton").click(function () {

    // inputBox에 입력된 내용의 문자열을 text 변수에 저장
    var text = $("#inputBox").val();
    // todos라는 JSON 객체에 새로운 키-값 쌍을 추가 text 변수의 값을 키로 사용하고, 초기값을 false로 설정
    todos[text] = false;
    // 입력 상자 (id가 "inputBox"인)의 내용을 비운다.
    $("#inputBox").val("");
    // console.log(todos); HTML 문서에서 class가 "contents"인 요소 내의 ul 태그를 찾아서, 그 안에
    // liTemplate(text) 함수로 생성한 새로운 리스트 아이템을 추가
    $(".contents ul").append(liTemplate(text));
});

// checkbox 태그 삽입
function inputTemplate(text) {
    var inputTag = $("<input type = 'checkbox' id = 'checkBox'>");
    // inputTag에 사용자가 입력한 텍스트 (text 변수)를 연결하여 데이터를 저장
    inputTag.data("value", text);
    return inputTag;
}

// button 태그 삽입
function buttonTemplate(text) {
    var buttonTag = $("<button id = 'deleteButton'>X</button>");
    // buttonTag에 사용자가 입력한 텍스트 (text 변수)를 연결하여 데이터를 저장
    buttonTag.data("value", text);
    return buttonTag;
}

// li 태그 삽입
function liTemplate(text) {
    // li태그 객체 생성
    var li = $("<li></li>");

    // attr()는 jQuery에서 사용되는 메서드로, HTML 요소의 속성(attribute)을 가져오거나 설정할 때 사용
    li.attr("value", text); // 어떤 데이터를 지워야 하는지 구분하는데 사용된다.

    // checkbox 삽입
    li.append(inputTemplate(text));
    // text 삽입
    li.append(text);
    // x 버튼 삽입
    li.append(buttonTemplate(text));

    // li가 체크되었을 때
    li.click(function (event) {

        // event된 객체를 지정
        var el = $(event.target);
        // console.log(el.data("value"));
        if (el.is("button")) {
            //  event된 객체가 button 태그이면

            delete todos[text];
            $(`li[value='${text}']`).remove()
            // console.log(todos);
        } else if (el.is("input[type='checkbox']")) {
            // event된 객체가 checkbox로 된 input 태그이면;

            // el의 checked 여부(true/false)를 isChecked 변수에 저장
            var isChecked = el.is(":checked");

            // isChecked의 값에 따라 class 추가 및 삭제
            if (isChecked) {
                $(`li[value='${text}']`).addClass("checked");
                todos[text] = true;
            } else {
                $(`li[value='${text}']`).removeClass("checked");
                todos[text] = false
            }
        } else {
            // event된 객체의 이외의 경우;

            // text를 경고창으로 띄우기
            alert("할일 : " + text);
        }
    })

    return li;
}