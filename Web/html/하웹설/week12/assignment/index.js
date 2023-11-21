var haksik = [];
var moms = [];

$
    .ajax("http://smart.handong.edu/api/service/menu")
    .done(function (result) {
        haksik = result.haksik;
        moms = result.moms;
        addItems(haksik);
    });

function addItems(menuArr) {
    for (const menu of menuArr) {
        $('#tableBody').append(
            `
            <tr>
                <td>${menu.menu_kor}</td>
                <td>${menu.menu_eng}</td>
            </tr>
            `
        );
    }
}

$("#haksikBtn").click(function () {
    $("#tableBody").html("");
    addItems(haksik);
});

$("#momsBtn").click(function () {
    $("#tableBody").html("");
    addItems(moms);
});

//
//
//

var semesterStr = "http://smart.handong.edu/api/academic_calendar/semester";
var year = "";
var semester = "";
$
    .ajax(semesterStr)
    .done(function (result) {
        year = result.year;
        semester = result.semester;
        showState(year, semester, '#state');
    });

function showState(year, semester, tag) {
    $(tag).html(
        `
        <span>${year}년도 -</span>
        <span>${semester}학기</span>
        `
    )
}

$("#wantDate").click(function () {
    var inputTag = $("#inputTag").val();
    $
        .ajax(semesterStr + "?date=" + inputTag)
        .done(function (result) {
            year = result.year;
            semester = result.semester;
            showState(year, semester, '#searchState');
        });
});

// "current_week":12,"last_week
var weekStr = "http://smart.handong.edu/api/academic_calendar/week";

var current_week = "";
var last_week = "";
$
    .ajax(weekStr)
    .done(function (result) {
        current_week = result.current_week;
        // last_week = result.last_week;
        showState2(current_week, '#state2');
    });

function showState2(current_week, tag) {
    $(tag).html(`
        <span>${current_week}주차</span>
        `)
}

$("#wantDate2").click(function () {
    var inputTag2 = $("#inputTag2").val();
    $
        .ajax(weekStr + "?date=" + inputTag2)
        .done(function (result) {
            // current_week = result.current_week;
            current_week = result.current_week;
            showState2(current_week, '#searchState2');
        });
});

$("#button1").click(function () {
    var text = $("#mydate1").val();
    var newDate = text[0] + text[1] + text[2] + text[3] + text[5] + text[6] +
            text[8] + text[9];
    $
        .ajax(semesterStr + "?date=" + newDate)
        .done(function (result) {
            year = result.year;
            semester = result.semester;
            showState(year, semester, '#searchState');
        });

})

$("#button2").click(function () {
    var text = $("#mydate2").val();
    var newDate = text[0] + text[1] + text[2] + text[3] + text[5] + text[6] +
            text[8] + text[9];
    $
        .ajax(weekStr + "?date=" + newDate)
        .done(function (result) {
            // current_week = result.current_week;
            current_week = result.current_week;
            showState2(current_week, '#searchState2');
        });

})