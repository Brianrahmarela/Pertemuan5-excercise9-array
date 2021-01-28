//Get Data Console
// let jobIt = ["Software Developer", "Web Developer", "Front End Developer", "Back End Developer", "IT Support"];
// console.log(`Pekerjaan dibidang IT: `);
// for(let i = 0; i < jobIt.length; i++){
//     console.log(jobIt[i]);
// }
// console.log("Panjang data array adalah : " + jobIt.length);

//Tampilkan Data di HTML
let jobIt = ["Software Developer", "Web Developer", "Front End Developer", "Back End Developer", "IT Support"];

//buat teks judul utk console
var newTextNode = document.createTextNode("Pekerjaan dibidang IT:");
console.log(newTextNode.nodeValue);

for(let i = 0; i < jobIt.length; i++){
    document.write(`<li>${jobIt[i]}</li>`);
    console.log(`${jobIt[i]}`);
}
console.log("Panjang data array adalah : " + jobIt.length);


