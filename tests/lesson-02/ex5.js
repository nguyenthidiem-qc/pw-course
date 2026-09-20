//Tạo file ex5.js, thêm vào code đáp án cho đề bài sau:

//a. Lặp từ 1 tới 100
for (i = 0; i < 100; i++)

//b. Trong mỗi vòng lặp in ra:
//b1: Nếu giá trị của vòng lặp chia hết cho 2, in: "Số <i> là số chẵn"
{
    if (i % 2 === 0) {
        console.log(`Số ${i} là số chẵn`);
    }

//b2. Nếu giá trị của vòng lặp không chia hết cho 2, in: "Số <i> là số lẻ"
    else {
        console.log(`Số ${i} là số lẻ`);
    }
}

/*Đáp án 
Số 0 là số chẵn
Số 1 là số lẻ
Số 2 là số chẵn
Số 3 là số lẻ
Số 4 là số chẵn
Số 5 là số lẻ
.
.
*/

