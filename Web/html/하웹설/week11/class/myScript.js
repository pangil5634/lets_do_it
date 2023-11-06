// id가 alert로 된 버튼을 click하면 경고창을 띄운다.
$('#alert').click(function () {
    alert("Button Clicked!");
});

// id가 button2를 클릭하면 id가 alert로 된 버튼을 click하는 행동을 취한다.
$("#button2").click(function () {
    $('#alert').click();
})

// class가 demo-container인 div 태그를 찾아서 해당 html 코드를 경고창으로 띄운다.
// alert($("div.demo-container").html()); id가 btn으로 된 버튼을 클릭하면 class가
// demo-container로 된 div 태그의 내부 html 값을 바꾼다.
$('#btn').click(function () {
    $('div.demo-container').html("<div class = 'demo-box'>Button clicked!</div>");
})

// id가 btn2로 된 버튼을 클릭하면 class가 demo-box로 된 div 태그의 text를 경고창으로 띄운다.
$('#btn2').click(function () {
    alert($("div.demo-box").text());
})

// id가 btn3로 된 버튼을 클릭하면, class가 demo-box로된 div 태그를 삭제한다.
$('#btn3').click(function () {
    $('div.demo-box').remove();
});

$("#btn4").click(function () {
    $("div.demo-box").empty();
});

$("#btn5").click(function () {
    $("div.demo-box2").append("<p>Append Sample</p>");
});

$("#red-btn").click(function () {
    $("div.addClass").removeClass("yellow");
    $("div.addClass").addClass('red');
});

$("#yellow-btn").click(function () {
    $("div.addClass").removeClass("red");
    $("div.addClass").addClass('yellow');
});

$("#inputBox").val("Hi, hi");
$("#selectBox").val(3)