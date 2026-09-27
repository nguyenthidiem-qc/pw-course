//Thêm phần từ vào mảng, dùng hàm push
const arr = [1, 2];
arr.push(3);

console.log(arr);

//BÀI TẬP
//1. Tính tổng từ 1 đến 100
function tinhTong() {
    let tong = 0;
    for (let i = 0; i <= 100; i++) {
        tong = tong + i;
    }
    return tong;
};

console.log(tinhTong());

//2. (nâng cao) In bảng cửu chương từ 2 đến 9
function inBangCuuChuong() {
    for (let bang = 2; bang <= 9; bang++) {
        console.log(`Bảng cửu chương ${bang}:`);
        for (let i = 1; i <= 10; i++) {
            let kqBang = bang * i;
            console.log(`${bang} * ${i} = ${kqBang}`);
        }
        console.log("");
    }
};

inBangCuuChuong();

//3. Tạo 1 mảng chứa các số lẻ từ 1 đến 99
const array3 = [];
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        array3.push(i);
    }
}

console.log(array3);

//4. In ra 10 email dựa trên tên người dùng và số thứ tự. (vd: user1@example.com...)
const userMails = {
    soThuTu: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    userName: "user",
    endOfMail: "@example.com"
};
for (let soThuTu = 1; soThuTu <= 10; soThuTu++) {
    console.log(userMails.userName + soThuTu + userMails.endOfMail);
}


/*5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và in ra tổng doanh thu.
Biết cấu trúc object của mảng doanh thu như sau: {"month": 2, "total": 100}*/
