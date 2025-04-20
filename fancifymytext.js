function hello() {
    alert("Hello, world!");
}

function bigger() {
    var text = document.getElementById("text");
    text.style.fontSize = "24pt";
    hello();
}

function fancy() {
    var text = document.getElementById("text");
    text.style.fontWeight = "bold";
    text.style.color = "blue";
    text.style.textDecoration = "underline";
    document.getElementById('boring').checked = false;
    hello();
}

function boring() {
    var text = document.getElementById("text");
    text.style.fontWeight = "normal";
    text.style.color = "black";
    text.style.textDecoration = "none";
    text.style.fontSize = "10pt";
    document.getElementById('fancy').checked = false;
    hello();
}

function moo() {
    var text = document.getElementById("text").value;
    text = text.toUpperCase();
    var sentences = text.split(".");
    for (var index = 0; index < sentences.length; index++) {
        var next = sentences[index].trim();
        if (next === "") continue;
        sentences[index] = next + "-MOO";
    }
    text = sentences.join(". ");
    document.getElementById("text").value = text;
}
