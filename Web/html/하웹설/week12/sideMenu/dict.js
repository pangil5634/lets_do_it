var dict = $('#myul');
var title = $('h2');
var p = $('p');

$
    .getJSON('dict.json')
    .done(function (data) {
        for (let word of data) {
            var li = $('<li></li>');
            li.text(word.title);
            li.data('word', word);

            li.click(function (event) {
                var el = $(event.target);
                var word1 = el.data('word');
                title.text(word1.title);
                p.text(word1.description);
            });
            dict.append(li);
        }
    });