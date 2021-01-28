//Tim 1 menggunkan split
// let dynamic = "Brian, Dendy, Faay, Febian";
// console.log (dynamic.split(',',4));
// document.write(`<b>Tim 1</b><br>`);
// document.write(`${dynamic}<br>` );
// document.write(`<b>Leader: </b>${dynamic[2]}<br> `);

//Tim 1 menggunkan for each
let dynamic = ["Brian", "Dendy", "Faay", "Febian"];
//buat teks judul tim1 utk html
var newTextNode = document.createTextNode("<b>Tim 1: </b><br>");
var newTextNodeConsole = document.createTextNode("Tim 1: ");
document.write(newTextNode.nodeValue);
//buat teks judul tim1 utk console
console.log(newTextNodeConsole.nodeValue);

dynamic.forEach((value) => {
    if(value == "Dendy") {
        console.log(value, "(Leader)");
        document.write(`<b>${value}, (LEADER}</b><br>`);
    } else {
        console.log(value);
        document.write(`${value}, <br>`);
    }

})

//Tim 2 menggunkan for each
let draco = ["Rendy", "Suryanto", "Utomo", "Yoshi"];
//buat teks judul tim1 utk html
var newTextNode = document.createTextNode("<br><b>Tim 2: </b><br>");
var newTextNodeConsole = document.createTextNode("Tim 2: ");
document.write(newTextNode.nodeValue);
//buat teks judul tim1 utk console
console.log(newTextNodeConsole.nodeValue);

draco.forEach((value) => {
    if(value == "Utomo"){
        console.log(value, "(Leader)");
        document.write(`<b>${value}, (LEADER)</b><br>`)
    } else {
        console.log(value);
        document.write(`${value}, <br>`);
    }
})


