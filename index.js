// let angka = [1,2,3,4,5];
// angka.sort();
// console.log(numbers);

// for(let i = 0; i < angka.length; i++){
//     if (angka[i] == 3){
//     console.log(angka[i] + " ditemukan");
//     break
// } else {
//         console.log(angka[i]);
//     }
// }
//

//melihat index
let buah = ["jeruk", "pepaya", "magga", "apel"];

//callback function mengirimkan argumen berupa function
//yg akanditerima & menggantikan parameter callback
// buah.forEach((value, index) => {
    //     console.log(index, value);
    // })
    
    //foreach (cuma melakukan proses)
    buah.forEach((value) => {
        if (value == "Pepaya") {
            console.log(value, "DITEMUKAN");
            // break;
        }else {
            console.log(value);
        }
    })
    
//map (mengembalikan array)
//SYNTAX
//array.map(function(currentValue, index, arr), thisValue)

// let buah = ["jeruk", "pepaya", "magga", "apel"];
// let buahs = buah.map((value) => {
//     return value + "s"
// })
// console.log(buahs);