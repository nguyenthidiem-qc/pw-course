//a. Khai báo hằng số number có giá trị 12
const number = 12;
console.log(number);

//b. Khai báo biến name với giá trị là my number
let name = "my number";
console.log(name);

//note: var và let (var xài cho global, let phạm vị 1 block code {})
{
    var a = 10;
    let b = 11;
    console.log(b);
}
console.log(a);

//c. Khai báo 1 biến isEvent với giá trị sai
let  isEvent = false;
console.log(isEvent);

//d. Kiểm tra nếu number là số chẵn gán isEvent thành giá trị đúng
let number1 = 20;
if (number1 % 2 === 0) {
    isEvent = true;
    console.log(isEvent);
}
