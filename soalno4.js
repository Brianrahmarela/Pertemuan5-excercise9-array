const first = ["Math", "English", "Programming"];
const second = ["Geography", "Spanish", "Programming"];

const areEqual = (first, second) => {
    //cek jika isi aray second ada di aray 1 dgn includes()
    //return true
    for(let i = 0; i < first.length; i++){
       if(second.includes(first[i])){
        //cek element seluruh array lwt console
        // console.log(first);
        // console.log(second);
           return true;
        };
    };

    //cek element seluruh array lwt console
    //jika elemen second & first tdk sama
    // console.log(first);
    // console.log(second);
    return false;
};
console.log(areEqual(first, second));
// document.write(areEqual(first, second));
document.write(`Apakah isi element array 1: ${first} dan Isi element array 2: ${first} ada yang sama? <br> Jawaban: <b>${areEqual(first, second)}</b>`);
