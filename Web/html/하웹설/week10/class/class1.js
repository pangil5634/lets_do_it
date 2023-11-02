function cal() {
    var mode = prompt("모드를 입력해주세요. add(1) sub(2)");

    if (mode == 1 || mode == 2) {
        var num1 = Number(prompt("첫 번째 숫자를 입력해주세요."));
        var num2 = Number(prompt("두 번째 숫자를 입력해주세요."));

        if (mode == 1) 
            alert("계산 결과\n" + num1 + ' + ' + num2 + ' = ' + operator(num1, num2, add))
        else if (mode == 2) 
            alert("계산 결과\n" + num1 + ' - ' + num2 + ' = ' + operator(num1, num2, sub))
    } else 
        alert("잘못 입력하셨습니다.");
    }

function operator(x, y, func) {
    return func(x, y);
}

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function deleteData() {
    var element = document.getElementById('text');
    setTimeout(function () {
        element.innerHTML = '쿠폰 번호 : 삭제됨';
    }, 3000);
}

var myData = [];

function inputData() {
    var num = Number(prompt("몇 개의 단어를 입력할 것인가요?"));
    for (var i = 0; i < num; i++) {
        var str = prompt((i + 1) + "번 째 단어를 입력해주세요.");
        myData.push(str);
    }
    alert("모든 단어 입력이 완료되었습니다.");

}

function myForEach() {

    if (confirm("입력하신 단어를 보시겠습니까?")) {
        myData.forEach(showData);

        function showData(data) {
            alert("내용 : " + data);
        }
    }
}

function myMap() {
    if (confirm("입력하신 단어를 보시겠습니까?")) {
        var result = myData.map(function (value, index) {
            return ("내용 : " + value);
        });

        alert(result);
    }
}
