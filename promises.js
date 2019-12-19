
var form = $("#form");
var table = $("#table");
var body = $(document.body);
var button = $("button");
var div = $("#div");
var wrapper = $("#table-wrapper");

function setStyle() {
    body.css("color", "white");
    body.css("background", "hotpink");
    button.css("color", "red");
    div.css("text-align", "center");
    table.css("border", "5px solid black");
    table.css("padding", "15px");
    wrapper.css("display", "inline-block");
}

form.submit(function (event) {
    event.preventDefault();
    var input = $("#input");
    var url = "https://api.github.com/search/users?q=" + input.val();


    fetch(url)

        .then(function (response) {
            return response.json();
        })
        .then(function (elems) {
            if (elems.items.length > 0) {
                table.html("<tr><th>#</th><th>Name</th><th>Score</th><th>URL</th>");
                var i = 1;
                elems.items.forEach(function (elem) {
                    table.append("<tr><td>" + i + "</td><td>" + elem.login + "</td><td>" + elem.score + "</td><td><a href=" + elem.html_url + " target=\"_blank\">Github</a></td></tr>")
                    i++;
                })
            } else {
                table.html("<h1>No users found!</h1>")
            }
        })
        .catch(function () {
            table.html("<h1>At least put something in bastard...</h1>")
        })

});