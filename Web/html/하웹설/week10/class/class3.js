var list = document.getElementById("list");

var products = [];

function AddData() {
    var num = prompt("몇 개의 데이터를 입력하실 건가요?");
    for (var i = 1; i <= num; i++) {
        var str = prompt(i + "번째 데이터를 입력해주세요.");
        products.push(str);
    }
    var html = '';
    for (var product of products) {
        html += '<li>' + product + '</li>';
    }

    list.innerHTML = html
}
